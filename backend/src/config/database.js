const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const dbPath =
    process.env.SQLITE_DB_PATH ||
    path.join(__dirname, '../../../database/portfolio.db');

const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

const db = new sqlite3.Database(dbPath);

function run(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) reject(err);
            else resolve({ lastID: this.lastID, changes: this.changes });
        });
    });
}

function get(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });
    });
}

function all(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function exec(sql) {
    return new Promise((resolve, reject) => {
        db.exec(sql, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

function resolveInitSqlPath() {
    const candidates = [
        process.env.INIT_SQL_PATH,
        path.join(__dirname, '../../../database/init.sql'),
        path.join(__dirname, '../../database/init.sql'),
    ].filter(Boolean);

    for (const candidate of candidates) {
        if (fs.existsSync(candidate)) return candidate;
    }
    throw new Error('init.sql not found');
}

async function initialize() {
    const initSql = fs.readFileSync(resolveInitSqlPath(), 'utf8');
    await exec(initSql);
    console.log(`✅ SQLite database ready at ${dbPath}`);
}

module.exports = { db, run, get, all, initialize };
