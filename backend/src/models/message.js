const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432,
});

class Message {
    static async create(data) {
        const { name, email, phone_number, message, ip_address, user_agent } = data;
        const query = `
            INSERT INTO messages (name, email, phone_number, message, ip_address, user_agent)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *
        `;
        const values = [name, email, phone_number, message, ip_address, user_agent];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    static async findAll() {
        const query = 'SELECT * FROM messages ORDER BY date_sent DESC';
        const result = await pool.query(query);
        return result.rows;
    }

    static async findById(id) {
        const query = 'SELECT * FROM messages WHERE id = $1';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }

    static async markAsRead(id) {
        const query = 'UPDATE messages SET read = true WHERE id = $1 RETURNING *';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }
}

module.exports = Message;
