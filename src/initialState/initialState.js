import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  questionnaires: {
    html: [
      {
        title: "Мова розмітку гіпертексту - це",
        variants: [
          {
            id: uuidv4(),
            text: "сукупність команд для настраювання Інтернету",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "сукупність та правила розташування спеціальних кодів, які керують формування, вставленням ілюстрацій, таблиць і зв'язком з іншими документами",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "спеціальні команди для створення зв'язку між певними веб-сторінками",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "спеціальні команди та правила призначені для створення веб-сторінок",
            isChecked: false,
          },
        ],
      },
      {
        title: "Тег- це",
        variants: [
          {
            id: uuidv4(),
            text: "код для визначення структури веб-сторінок",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "будь-яке текстове повідомлення, що розташоване в кутових дужках",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "команда у мові HTML",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "настроювання вигляду частини веб-сторінки за допомогою спеціального коду",
            isChecked: false,
          },
        ],
      },
      {
        title: "Атрибут- це",
        variants: [
          {
            id: uuidv4(),
            text: "характеристика тегу, що впливає на створюваний ним ефект",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "характеристика кольорів тексту та тла веб-сторінки",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "характеристика тегу, що вивчає місце його розташування в HTML- документі",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "властивість тегу",
            isChecked: false,
          },
        ],
      },
      {
        title: "Навігаційна панель - це",
        variants: [
          {
            id: uuidv4(),
            text: "HTML-код головної веб-сторінки",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "один із фреймів головної сторінки, що містять геперпосилання на всі розділи сайту і є постійно видимим для відвідувача",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "список гіперпосилань, розташований лише на головній сторінці",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "зрочний спосіб перегляду розділів веб-сайту",
            isChecked: false,
          },
        ],
      },
      {
        title: "Тег FONT призначений для:",
        variants: [
          {
            id: uuidv4(),
            text: "настраювання вигляду тла частини веб-сторінки",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "настраювання кольору, накреслення, розміру для групи символів",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "визначення місця розташування заголовка",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "позначення підкреслення для групи символів",
            isChecked: false,
          },
        ],
      },
      {
        title: "Тег A призначений для :",
        variants: [
          {
            id: uuidv4(),
            text: "позначення нового абзацу",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "позначення тексту як заголову",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "створення гіперпосилання",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "позначення нумерованаго списку",
            isChecked: false,
          },
        ],
      },
      {
        title: "Тег TITLE призначений для :",
        variants: [
          {
            id: uuidv4(),
            text: "визначення заголовку документа, в якому міститься його ключовий опис",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "позначення тексту як заголовка",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "визначення заголовка вікна, в якому відображатиметься документ",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "вставлення тексту в комірку таблиці",
            isChecked: false,
          },
        ],
      },
      {
        title: "Теги HI ... H6 використовують для:",
        variants: [
          {
            id: uuidv4(),
            text: "визначення вигляду заголовка вікна, в якому відображатиметься документ",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "позначення тексту як заголовка",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "позначення нового абзацу",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "позначення заголовка для таблиці",
            isChecked: false,
          },
        ],
      },
      {
        title: "Тег, в якому лежить основний вміст сторінки?",
        variants: [
          {
            id: uuidv4(),
            text: "head",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "title",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "body",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "footer",
            isChecked: false,
          },
        ],
      },
      {
        title: "За допомогою якого тега слід розділяти абзаци?",
        variants: [
          {
            id: uuidv4(),
            text: "p",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "b",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "q",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "d",
            isChecked: false,
          },
        ],
      },
    ],
    css: [
      {
        id: uuidv4(),
        title: "Що таке CSS?",
        variants: [
          {
            id: uuidv4(),
            text: "Каскадні таблиці стилів",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "Це спеціальна мова (мова стилів), за допомогою якої описують вигляду документів (як і де відображати елементи вебсторінки), написаних мовами розмітки даних",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "Це мова, яка визначає, як документи подаються користувачам - як вони оформляються, викладаються тощо",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "Всі варіанти правильні",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Як під'єднати зовнішні стилі до сторінки?",
        variants: [
          {
            id: uuidv4(),
            text: "<style></style>",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "<link rel=\"stylesheet\" href=\"style.css\">",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "<h1 style=\"color=green;\">",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "Всі варіанти правильні",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Який тип (формат) файлу стилів",
        variants: [
          {
            id: uuidv4(),
            text: ".css",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: ".html",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: ".js",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: ".txt",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Будь-яке CSS правило складається із ...",
        variants: [
          {
            id: uuidv4(),
            text: "селектора, властивості, значення",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "лише з селектора",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "лише з властивості та значення",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "лише з селектора та властивості",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "body {\n" +
            "\n" +
            "color: red;\n" +
            "\n" +
            "}",
        variants: [
          {
            id: uuidv4(),
            text: "body - це селектор по тегу",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "body - це селектор по класу",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "body - це селектор по ідентифікатору",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "body - це значення",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Які лапки використовують в оголошенні СSS правила?",
        variants: [
          {
            id: uuidv4(),
            text: "[]",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "{}",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "''",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "<>",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Який знак розділяє CSS властивість та значення?",
        variants: [
          {
            id: uuidv4(),
            text: "-",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: ";",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: ":",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "#",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Як звернутися до CSS селектора по класу у файлі стилів?\n" +
            "\n" +
            "\n" +
            "\n" +
            "<div class=\"container\"></div>",
        variants: [
          {
            id: uuidv4(),
            text: ".container",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "container",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "#container",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: ":container",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Яка CSS властивість відповідає за розмір тексту?",
        variants: [
          {
            id: uuidv4(),
            text: "text-size",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "font-size",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "size",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "text",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Як правильно додавати коментарі в CSS документ?",
        variants: [
          {
            id: uuidv4(),
            text: " < !-- коментар -->",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "// коментар",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "/* коментар */",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "// коментар //",
            isChecked: false,
          },
        ],
      },
    ],
    js: [
      {
        id: uuidv4(),
        title: "Як оголошується змінна в мові JavaScript ?",
        variants: [
          {
            id: uuidv4(),
            text: "let",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "const",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "var",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "Всі варіанти правильні",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Який синтаксис стрілкової функції?",
        variants: [
          {
            id: uuidv4(),
            text: "() -> {}",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "() ==> {}",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "--> <3",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "() => {}",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Що із перечисеного оголошує цикл?",
        variants: [
          {
            id: uuidv4(),
            text: "for",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "!important",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "just do it",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "while just",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Що із переліченого є масивом ?",
        variants: [
          {
            id: uuidv4(),
            text: "[]",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "undefined",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "{}",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "лише з селектора та властивості",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Що із переліченого не є покемоном ?",
        variants: [
          {
            id: uuidv4(),
            text: "Snorlax",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "Redux",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "Pikachu",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "Jynx",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Асинхронна функція оголошується ключовим словом ",
        variants: [
          {
            id: uuidv4(),
            text: "asynx",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "asics",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "async",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "i think",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Як вивести в косоль значення ?",
        variants: [
          {
            id: uuidv4(),
            text: "console.frog()",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "colonsole.log()",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "colos.logistic()",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "console.log()",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Чи можливо повернути Promise в статус pending",
        variants: [
          {
            id: uuidv4(),
            text: "так",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "ні",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "що таке проміс ?",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "правильної відповіді немає",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Array.push() методі додає",
        variants: [
          {
            id: uuidv4(),
            text: "значення на початку масиву",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "видаляє масив",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "додає значення в кінець масиву",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "пушить базу",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Що таке реакт",
        variants: [
          {
            id: uuidv4(),
            text: "JavaScript бібліотека",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "Бібліотека Вернадського",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "Реактивний двигун",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "Супергерой",
            isChecked: false,
          },
        ],
      },
    ],
  },
  currentCategory: "",
  currentQuestionIndex: 0,
  isFinalPage: false,
  answerHistory: [],
  finalScore: 0
};
