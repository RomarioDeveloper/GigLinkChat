# Документация для микросервиса чата

## Описание

Данный микросервис предоставляет API для чата, который поддерживает отправку текстовых сообщений и медиафайлов (например, изображений и голосовых сообщений). Реализован с использованием Express.js и PostgreSQL.

## Содержание

1. [Требования](#требования)
2. [Установка](#установка)
3. [Конфигурация](#конфигурация)
4. [Запуск](#запуск)
5. [Структура проекта](#структура-проекта)
6. [API эндпоинты](#api-эндпоинты)
   - [Отправка сообщения](#отправка-сообщения)
   - [Отправка медиафайла](#отправка-медиафайла)
   - [Получение всех сообщений](#получение-всех-сообщений)
7. [Поддержка и контакты](#поддержка-и-контакты)

## Требования

Перед началом работы убедитесь, что у вас установлены следующие компоненты:

- Node.js (версии 12 и выше)
- PostgreSQL (версии 9.6 и выше)
- npm (версии 6 и выше)

## Установка

1. Склонируйте репозиторий:

   ```bash
   git clone https://github.com/your-repo/chat-app.git
## API эндпоинты

### Отправка сообщения

- **URL**: `/api/messages/send`
- **Метод**: `POST`
- **Описание**: Отправка текстового сообщения.

#### Параметры запроса:

- `userId` (обязательный): ID пользователя.
- `message` (обязательный): Текст сообщения.

#### Пример запроса:

```json
{
  "userId": 1,
  "message": "Hello, world!"
}
