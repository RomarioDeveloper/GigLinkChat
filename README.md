Документация для микросервиса чата
Описание
Данный микросервис предоставляет API для чата, который поддерживает отправку текстовых сообщений и медиафайлов (например, изображений и голосовых сообщений). Реализован с использованием Express.js и PostgreSQL.

Содержание
Требования
Установка
Конфигурация
Запуск
Структура проекта
API эндпоинты
Отправка сообщения
Отправка медиафайла
Получение всех сообщений
Поддержка и контакты
Требования
Перед началом работы убедитесь, что у вас установлены следующие компоненты:

Node.js (версии 12 и выше)
PostgreSQL (версии 9.6 и выше)
npm (версии 6 и выше)
Установка
Склонируйте репозиторий:

bash
Копировать код
git clone https://github.com/your-repo/chat-app.git
Перейдите в директорию проекта:

bash
Копировать код
cd chat-app
Установите зависимости:

bash
Копировать код
npm install
Конфигурация
Создайте файл .env в корне проекта и добавьте туда следующие параметры:

makefile
Копировать код
DB_USER=your_db_user       # Имя пользователя PostgreSQL
DB_HOST=localhost          # Хост для подключения к PostgreSQL
DB_NAME=chat_db            # Имя базы данных
DB_PASSWORD=your_db_password # Пароль пользователя PostgreSQL
DB_PORT=5432               # Порт для подключения к PostgreSQL (по умолчанию 5432)
PORT=3000                  # Порт для запуска сервера
Замените your_db_user, your_db_password и другие параметры на свои значения.

Запуск
Инициализация базы данных
Создайте базу данных и необходимые таблицы:

sql
Копировать код
CREATE DATABASE chat_db;

\c chat_db;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  message TEXT,
  media_path VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Запуск сервера
Для запуска сервера выполните команду:

bash
Копировать код
npm start
Или используйте nodemon для автоматической перезагрузки при изменениях в коде:

bash
Копировать код
npm install -g nodemon
nodemon src/app.js
После запуска сервер будет доступен по адресу: http://localhost:3000.

Структура проекта
lua
Копировать код
chat-app/
|-- src/
|   |-- config/
|   |   |-- database.js         # Конфигурация подключения к PostgreSQL
|   |
|   |-- controllers/
|   |   |-- messageController.js # Логика обработки сообщений
|   |
|   |-- models/
|   |   |-- messageModel.js     # Модели данных для работы с сообщениями
|   |   |-- userModel.js        # Модели данных для работы с пользователями
|   |
|   |-- routes/
|   |   |-- messageRoutes.js    # Маршруты для работы с сообщениями
|   |   |-- userRoutes.js       # Маршруты для работы с пользователями
|   |
|   |-- middleware/
|   |   |-- uploadMiddleware.js # Middleware для обработки загрузки файлов
|   |
|   |-- app.js                  # Основной файл приложения
|   |
|-- uploads/                    # Папка для хранения загруженных файлов
|-- .env                        # Файл с переменными окружения
|-- package.json
|-- package-lock.json
API эндпоинты
Отправка сообщения
URL: /api/messages/send

Метод: POST

Описание: Отправка текстового сообщения.

Параметры запроса:

Параметр	Тип	Описание
userId	int	ID пользователя
message	string	Текст сообщения
Пример запроса:

json
Копировать код
{
  "userId": 1,
  "message": "Hello, world!"
}
Пример ответа:

json
Копировать код
{
  "id": 1,
  "user_id": 1,
  "message": "Hello, world!",
  "media_path": null,
  "created_at": "2024-07-31T12:34:56.789Z"
}
Отправка медиафайла
URL: /api/messages/upload

Метод: POST

Описание: Отправка медиафайла.

Параметры запроса:

Параметр	Тип	Описание
userId	int	ID пользователя
file	file	Медиафайл для отправки
Пример использования с curl:

bash
Копировать код
curl -X POST http://localhost:3000/api/messages/upload \
  -F "userId=1" \
  -F "file=@path/to/your/file.jpg"
Пример ответа:

json
Копировать код
{
  "id": 2,
  "user_id": 1,
  "message": null,
  "media_path": "uploads/1624345678901-file.jpg",
  "created_at": "2024-07-31T12:35:01.123Z"
}
Получение всех сообщений
URL: /api/messages

Метод: GET

Описание: Получение всех сообщений, отсортированных по времени создания в порядке убывания.

Пример запроса:

bash
Копировать код
curl http://localhost:3000/api/messages
Пример ответа:

json
Копировать код
[
  {
    "id": 2,
    "user_id": 1,
    "message": null,
    "media_path": "uploads/1624345678901-file.jpg",
    "created_at": "2024-07-31T12:35:01.123Z"
  },
  {
    "id": 1,
    "user_id": 1,
    "message": "Hello, world!",
    "media_path": null,
    "created_at": "2024-07-31T12:34:56.789Z"
  }
]
Поддержка и контакты
Если у вас возникли вопросы или проблемы, пожалуйста, свяжитесь с нами по электронной почте: support@yourcompany.com.
