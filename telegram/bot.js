const TelegramApi = require('node-telegram-bot-api');
const token = '6958498691:AAGDn9X5SqZIgFFGNXpJgKO_Sg4jqsfq7jw';
const bot = new TelegramApi(token, { polling: true });

class User {
  constructor() {
    this.name = '';
    this.id = 0;
    this.email = '';
    this.userStatus = '';
  }

  askForEmail(botInstance) {
    return new Promise((res) => {
      botInstance.on('message', (msg) => {
        this.email = msg.text
        bot.sendMessage(user.id, `Спасибо за ввод email! ${user.email}`)
        res()
      })
    })
  }

  askForName(chatId, botInstance) {
    return new Promise((resolve) => {
      botInstance.sendMessage(chatId, "Ничего, давайте оформим регистрацию здесь! Введите ваше имя:\n\n P.S. Кстати, не забудьте посетить наш сайт \nhttp://localhost:3000/");

      botInstance.on('message', (msg) => {
        this.name = msg.text;
        this.id = chatId;
        this.userStatus = 'user';
        console.log(this);
        botInstance.sendMessage(chatId, `Спасибо, ${this.name}! Вам также нужно ввести ваш email`);
        resolve(); 
      });
    });
  }
}

const user = new User();

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  if (chatId == 5194729836) {
    bot.sendMessage(chatId, "Привет, Ричард!")
    return
  }
  if (msg.text === '/start') {
    bot.sendMessage(chatId, "Вы зарегистрированы на нашем сайте?");

    const isRegister = await new Promise((resolve) => {
      bot.on('message', (msg) => {
        resolve(msg.text.trim().toLowerCase());
      });
    });

    if (isRegister === "да") {
      bot.sendMessage(chatId, "Вы входите в аккаунт как сотрудник или как клиент?")

      const isClient = await new Promise((res) => {
        bot.on("message", (msg) => {
          res(msg.text.trim().toLowerCase())
        })
      })

      if (isClient == "да") {
        bot.sendMessage("Отправьте Ваш уникальный код:")

      } else {
        // написать логику для пользователей
      }

    } else if (isRegister === "нет") {
      await user.askForName(chatId, bot);
      console.log("Отправьте свой email: ");
      await user.askForEmail(bot)
    } else {
      bot.sendMessage(chatId, "Пожалуйста, отправьте верный ответ (Да или Нет):");
    }
  }
});