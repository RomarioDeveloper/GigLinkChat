
const pool = require('../config/database');

const MessageModel = {
    createMessage: async (userId, message, mediaPath = null) => {
        const result = await pool.query(
            'INSERT INTO messages (user_id, message, media_path) VALUES ($1, $2, $3) RETURNING *',
            [userId, message, mediaPath]
        );
        return result.rows[0];
    },

    getAllMessages: async () => {
        const result = await pool.query('SELECT * FROM messages ORDER BY created_at DESC');
        return result.rows;
    },
};

module.exports = MessageModel;
