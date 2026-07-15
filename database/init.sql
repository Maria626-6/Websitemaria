-- database/init.sql (SQLite)
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone_number TEXT,
    message TEXT NOT NULL,
    read INTEGER DEFAULT 0,
    replied INTEGER DEFAULT 0,
    date_sent DATETIME DEFAULT CURRENT_TIMESTAMP,
    ip_address TEXT,
    user_agent TEXT
);
CREATE TABLE IF NOT EXISTS message_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message_id INTEGER REFERENCES messages(id),
    action TEXT,
    done_by TEXT,
    date DATETIME DEFAULT CURRENT_TIMESTAMP
);