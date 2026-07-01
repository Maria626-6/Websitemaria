const { run, get, all } = require('../config/database');

class Message {
    static async create(data) {
        const { name, email, phone_number, message, ip_address, user_agent } = data;
        const result = await run(
            `INSERT INTO messages (name, email, phone_number, message, ip_address, user_agent)
             VALUES (?, ?, ?, ?, ?, ?)`,
            [name, email, phone_number, message, ip_address, user_agent]
        );
        return get('SELECT * FROM messages WHERE id = ?', [result.lastID]);
    }

    static async findAll() {
        return all('SELECT * FROM messages ORDER BY date_sent DESC');
    }

    static async findById(id) {
        return get('SELECT * FROM messages WHERE id = ?', [id]);
    }

    static async markAsRead(id) {
        await run('UPDATE messages SET read = 1 WHERE id = ?', [id]);
        return get('SELECT * FROM messages WHERE id = ?', [id]);
    }
}

module.exports = Message;
