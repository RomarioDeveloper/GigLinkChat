
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const messageRoutes = require('./routes/messageRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware для обработки JSON
app.use(express.json());

// Маршруты для работы с сообщениями
app.use('/api/messages', messageRoutes);

// Статические файлы
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
