const TelegramApi = require('node-telegram-bot-api')

const token = ''
const bot = new TelegramApi(token, { polling: true })

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === "/start") {
    bot.sendMessage(chatId, 'Привет, юзер!');
  } else {
    bot.sendMessage(chatId, 'Бот пока в разработке, но когда команды будут добавлены - мы обязательно вам сообщим');
  }
});
