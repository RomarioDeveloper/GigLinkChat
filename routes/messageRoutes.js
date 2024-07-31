
const express = require('express');
const MessageController = require('../controllers/messageController');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

// Маршрут для отправки текстового сообщения
router.post('/send', MessageController.sendMessage);

// Маршрут для отправки медиафайла
router.post('/upload', upload.single('file'), MessageController.uploadMedia);

// Маршрут для получения всех сообщений
router.get('/', MessageController.getMessages);

module.exports = router;
