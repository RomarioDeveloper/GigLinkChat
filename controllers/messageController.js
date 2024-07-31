
const MessageModel = require('../models/messageModel');

const MessageController = {
    sendMessage: async (req, res) => {
        const { userId, message } = req.body;

        try {
            const newMessage = await MessageModel.createMessage(userId, message);
            res.status(201).json(newMessage);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error saving message' });
        }
    },

    uploadMedia: async (req, res) => {
        const { userId } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        try {
            const newMessage = await MessageModel.createMessage(userId, null, file.path);
            res.status(201).json(newMessage);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error saving media' });
        }
    },

    getMessages: async (req, res) => {
        try {
            const messages = await MessageModel.getAllMessages();
            res.status(200).json(messages);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error fetching messages' });
        }
    },
};

module.exports = MessageController;
