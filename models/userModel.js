// src/models/userModel.js

const pool = require('../config/database');

const UserModel = {
    createUser: async (username) => {
        const result = await pool.query(
            'INSERT INTO users (username) VALUES ($1) RETURNING *',
            [username]
        );
        return result.rows[0];
    },

    getUserById: async (userId) => {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
        return result.rows[0];
    },
};

module.exports = UserModel;
