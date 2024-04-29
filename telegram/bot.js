const { default: axios } = require('axios');
const TelegramApi = require('node-telegram-bot-api');
const FormData = require('form-data');
const token = '6958498691:AAGDn9X5SqZIgFFGNXpJgKO_Sg4jqsfq7jw';
const bot = new TelegramApi(token, { polling: true });

class User {
  constructor(name, last_name, status, role) {
    this.name = name
    this.status = status
    this.last_name = last_name
    this.role = role
  }
}
const user = new User();

import('axios').then(
  bot.onText(/\/start/, (msg) => {
  
  user.name = msg.chat.first_name
  user.last_name = msg.chat.last_name
  user.status = "user"
  user.role = "patient"
    
  const formData = new FormData();
  formData.append('telegram_id', msg.chat.id);
    axios.post('http://localhost:3002/telegramCheckUser', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
})
  .then(response => {
    const data = response.data;

    if (data.user !== null) {
      bot.sendMessage(chatId, `Здравствуйте, ${data.name} ${data.second_name}! Мы рады, что Вы решили воспользоваться нашим ботом.`)
    } else {
      bot.sendMessage(chatId, `Здравствуйте, пользователь! Мы рады, что Вы решили воспользоваться нашим ботом.`)
    }
    

    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
    const chatId = msg.chat.id;
    
  })
  
)

bot.on('polling_error', (err) => {
  console.log(err)
})

bot.onText(/\/register (.+)/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(`Зравствуйте, ${msg.from.first_name}, это помощник DrugFree! Этот бот был разработан для помощи людям с разной формой  `)
})

bot.onText(/\/donate (.+)/ , (msg, match) => {
  const chatId = msg.chat.id;
  const amount = match[0];
  bot.sendMessage(chatId, `Для поддержания проекта, Вам следует придерживаться следующих инструкций:\n`)

})

bot.onText(/\/search (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const nameOfAddiction = match[0]
  if (User.status === "customer") {
    bot.sendMessage(chatId, `Выполняется поиск клиента...`)
  } else {
    bot.sendMessage(chatId, `Выполняется поиск сотрудника...`)
  }
})

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  
  user.role === "customer" ? bot.sendMessage(chatId, `Вы - сотрудник`) : bot.sendMessage(chatId, `Вы - клиент`)

})

function debug(obj = {}) {
   return JSON.stringify(obj, null, 4)
}
/*

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

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
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

      if (isClient == "сотрудник") {
        bot.sendMessage("Отправьте Ваш уникальный код:")

        const checkForEmployee = await new Promise((res) => {
          bot.on("message", (msg) => {
            id = msg.text
            
            fetch("/emploee", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              body: id,
            }) 
            .then((response) => response.json)
            .then((data) => {
              if (data) {
                // TODO think about how to check customer
                bot.sendMessage(chatId, `Здравствуйте, ${data.name}!`)
                
                if (data.userStatus == "admin") {
                  
                }
              } else {
                bot.sendMessage(chatId, "Пожалуйста, повторите либо вернитесь назад")
              }
            })
          })
        })
      } else {
        // написать логику для пользователей
      }

    } else if (isRegister === "нет") {
      bot.sendMessage(chatId, "Ничего, давайте пройдём регистрацию тут. Скажите Ваше имя:")
      const askForName = await new Promise(res => {
        bot.on('message', msg => {

        })
      })

      await user.askForName(chatId, bot);
      console.log("Отправьте свой email: ");
      await user.askForEmail(bot)
    } else {

      bot.sendMessage(chatId, "Пожалуйста, отправьте верный ответ (Да или Нет):");
    }
  }
});
*/
/*
Команды:
  1) /start
    Возврат к началу

  2) /register
    Пройти регистрацию

  3) /donate
    Поддержать проект

  4) /search
    Найти сотрудника

  5) /help
    Вывести список команд

    start - Возврат к началу
    register - Пройти регистрацию
    donate - Поддержать проект
    search - Найти сотрудника
    help - Вывести список команд
*/