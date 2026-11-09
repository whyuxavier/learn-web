/* Веб-програмування — логіка курсу */
'use strict';
const D=(t,b)=>'<!DOCTYPE html>\n<html lang="uk">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>'+t+'</title>\n</head>\n<body>\n'+b+'\n</body>\n</html>';
const BP=D('Моя перша вебсторінка','    <!-- Створи свою сторінку тут -->');
const MODS=['HTML — структура та вміст','CSS — стиль і адаптивність','JavaScript — інтерактивність'];
const MOD_OF=[0,0,0,1,1,1,1,2,2,2,2,2];

const LESSONS=[
{t:'Знайомство з вебсередовищем. Перша вебсторінка',
 th:"<p><b>HTML</b> (HyperText Markup Language) — мова розмітки, що описує <i>зміст</i> сторінки: заголовки, абзаци, списки. <b>CSS</b> відповідає за вигляд сторінки, а <b>JavaScript</b> — за її поведінку.</p><p><b>Тег</b> — службове слово в кутових дужках. Більшість тегів парні: є відкривальний і закривальний. Кожен HTML-документ має однакову основу: у частині <b>head</b> зберігається службова інформація, а в <b>body</b> — усе, що бачить користувач.</p>",cm:[["<!DOCTYPE html>", "Повідомляє браузеру, що це документ HTML5."], ["<html lang=\"uk\">", "Кореневий елемент; lang задає мову сторінки."], ["<head>", "Службова інформація: кодування, назва вкладки."], ["<title>", "Назва сторінки на вкладці браузера."], ["<body>", "Видимий вміст сторінки."], ["<h1> … <h6>", "Заголовки: від найважливішого до найменшого."], ["<p>", "Абзац тексту."], ["<strong>", "Важливий текст, зазвичай напівжирний."], ["<br>", "Перенесення рядка; закривального тега немає."]],
 ex:`<body>
    <h1>Мій заголовок</h1>
    <p>Звичайний абзац із <strong>важливою</strong> фразою.</p>
    <p>Перший рядок<br>Другий рядок</p>
</body>`,
 task:'Створи власну вебсторінку з нуля.',
 ok:['Напиши з нуля структуру документа: <!DOCTYPE html>, <html>, <head>, <body>. Якщо потрібна підказка — скористайся кнопкою нижче.','Додай головний заголовок <h1>.','Додай щонайменше два абзаци <p> зі вступом про себе або вигаданого героя.','Виділи важливу фразу тегом <strong>.','Задай назву сторінки в <title>.','Перевір результат у попередньому перегляді.'],
 h:'',c:'/* Стилі додаватимемо з уроку 4 */',j:'// Код JavaScript з\'явиться в модулі 3'},

{t:'Структурування контенту: списки, посилання та зображення',
 th:"<p><b>Список</b> — набір пов'язаних пунктів: маркований (без порядку) або нумерований.</p><p><b>Атрибут</b> — додаткове налаштування тега у вигляді <i>назва=\"значення\"</i>.</p><p><b>Гіперпосилання</b> — елемент, який веде на іншу сторінку чи ресурс. Для зображень важливий <b>альтернативний текст</b>: його озвучують екранні читачі, а браузер показує, якщо картинка не завантажилась.</p>",cm:[["<ul>", "Маркований список."], ["<ol>", "Нумерований список."], ["<li>", "Пункт списку."], ["<a href=\"адреса\">", "Посилання; href — куди веде."], ["target=\"_blank\"", "Відкрити посилання в новій вкладці."], ["<img src=\"…\" alt=\"…\">", "Зображення; src — адреса, alt — опис."], ["width=\"200\"", "Ширина зображення в пікселях."]],
 ex:`<ol>
    <li><a href="https://uk.wikipedia.org" target="_blank">Вікіпедія</a></li>
    <li>Другий ресурс</li>
</ol>

<img src="https://picsum.photos/id/237/200/120" alt="Чорний цуценя" width="200">`,
 task:'Створи сторінку «Мої топ-5 корисних ресурсів» з посиланнями та картками з зображеннями.',
 ok:['Нумерований список із 5 пунктів, кожен — посилання.','Принаймні 2 зображення з атрибутом alt.','Заголовок і короткий опис до сторінки.'],
 h:D('Корисні ресурси','    <h1>Мої топ-5 корисних ресурсів</h1>\n\n    <!-- Додай нумерований список із посиланнями -->\n    <ol>\n        <li></li>\n    </ol>'),c:'',j:''},

{t:'Таблиці та форми введення даних',
 th:"<p><b>Таблиця</b> подає дані у рядках і стовпцях. <b>Форма</b> збирає дані від користувача.</p><p><b>Валідація</b> — перевірка введених даних до надсилання. Браузер може виконати її автоматично завдяки спеціальним атрибутам.</p>",cm:[["<table>", "Таблиця."], ["<tr>", "Рядок таблиці."], ["<th>", "Комірка-заголовок."], ["<td>", "Комірка з даними."], ["<form>", "Форма для збору даних."], ["<label>", "Підпис до поля вводу."], ["<input type=\"…\">", "Поле вводу: text, email, number, checkbox."], ["<select> <option>", "Випадаючий список і його варіанти."], ["<button>", "Кнопка."], ["required, min, max", "Атрибути валідації: обов'язкове поле, межі значень."]],
 ex:`<table border="1">
    <tr>
        <th>Ім'я</th>
        <th>Клас</th>
    </tr>
    <tr>
        <td>Олена</td>
        <td>10</td>
    </tr>
</table>

<form>
    <label>Email: <input type="email" required></label>
    <button>Надіслати</button>
</form>`,
 task:'Створи форму реєстрації на шкільний ІТ-турнір.',
 ok:['Поля: ім\'я, email, клас (select), гра (select).','Усі поля обов\'язкові (required).','Кнопка «Зареєструватися».','Таблиця розкладу турніру з щонайменше 3 рядками.'],
 h:D('Реєстрація на турнір','    <h1>ІТ-турнір</h1>\n\n    <form>\n        <!-- Додай поля форми -->\n    </form>'),c:'',j:''},

{t:'CSS-селектори та підключення стилів',
 th:"<p><b>CSS</b> (Cascading Style Sheets) — мова стилів, що задає вигляд елементів. <b>Селектор</b> вказує, до яких елементів застосувати правило, а <b>декларація</b> — пара «властивість: значення».</p><p>Стилі можна підключити трьома способами: <b>inline</b> (прямо в тезі), <b>internal</b> (у тезі style в head) і <b>external</b> (окремий файл). Вкладка CSS у редакторі працює як зовнішній файл.</p>",cm:[["style=\"color: red\"", "Inline-стиль в атрибуті тега."], ["<style> … </style>", "Internal-стилі всередині head."], ["<link rel=\"stylesheet\" href=\"style.css\">", "Підключення зовнішнього файлу."], ["p { }", "Селектор елемента: усі абзаци."], [".card { }", "Селектор класу (class=\"card\")."], ["#main { }", "Селектор id: унікальний елемент."], ["color, background", "Колір тексту та фон."], ["font-size, font-family", "Розмір і гарнітура шрифту."], ["margin, padding", "Зовнішній і внутрішній відступи."]],
 ex:`body {
    font-family: Arial, sans-serif;
    background: #f4f0ff;
}

h1 {
    color: #5b4bb7;
}

.note {
    padding: 10px;
    background: white;
}`,
 task:'Оформ сторінку-профіль, створену в уроці 1.',
 ok:['Твій HTML з уроку 1 уже перенесено в редактор (якщо урок 1 ще не виконано — відкрито шаблон сторінки-профілю).','Змінений колір і шрифт тексту.','Фон сторінки.','Стиль для класу (додай class до свого тега в HTML).','Відступи між абзацами.'],
 h:D('Мій профіль','    <h1>Привіт, я Олена</h1>\n    <p class="intro">Я навчаюся у 10 класі й вивчаю вебпрограмування.</p>\n    <p>Моя улюблена мова — <strong>HTML</strong>.</p>'),
 c:'/* Оформи сторінку тут */\nbody {\n    \n}\n\nh1 {\n    \n}\n\np {\n    \n}',j:''},

{t:'Блокова модель та позиціювання',
 th:"<p>Кожен елемент сторінки — це прямокутна «коробка» (<b>блокова модель</b>): вміст, навколо нього внутрішній відступ, рамка та зовнішній відступ.</p><p><b>Блокові</b> елементи (div, p) займають весь рядок, <b>рядкові</b> (span, a) — лише власний вміст. <b>Позиціювання</b> визначає, де саме розміщується елемент.</p>",cm:[["width, height", "Розміри вмісту."], ["padding", "Внутрішній відступ."], ["border", "Рамка."], ["margin", "Зовнішній відступ; auto центрує блок."], ["box-sizing: border-box", "Ширина включає padding і border."], ["display: block / inline", "Блоковий або рядковий елемент."], ["position: relative / absolute", "Спосіб позиціювання елемента."], ["border-radius", "Заокруглення кутів."], ["box-shadow", "Тінь елемента."]],
 ex:`* {
    box-sizing: border-box;
}

.card {
    width: 260px;
    padding: 16px;
    margin: 20px auto;
    border: 1px solid #ccc;
    border-radius: 14px;
}`,
 task:'Створи охайну картку товару або профілю.',
 ok:['Задана ширина, padding, border і border-radius.','Картка по центру (margin: auto).','Тінь (box-shadow).','Використано box-sizing.'],
 h:D('Картка','    <div class="card">\n        <h2>Назва</h2>\n        <p>Короткий опис товару або людини.</p>\n        <span class="price">199 грн</span>\n    </div>'),
 c:'* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: sans-serif;\n}\n\n.card {\n    \n}',j:''},

{t:'Сучасне компонування: Flexbox',
 th:"<p><b>Flexbox</b> — сучасна модель компонування: контейнер розташовує дочірні елементи вздовж <b>головної осі</b> (за замовчуванням горизонтальної), а перпендикулярна до неї — <b>поперечна вісь</b>.</p>",cm:[["display: flex", "Робить елемент гнучким контейнером."], ["justify-content", "Вирівнювання вздовж головної осі."], ["align-items", "Вирівнювання вздовж поперечної осі."], ["flex-wrap: wrap", "Дозволяє переносити елементи на новий рядок."], ["gap", "Проміжок між елементами."], ["flex: 1 1 200px", "Як елемент росте, стискається та яка його базова ширина."]],
 ex:`.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
}

.item {
    flex: 1 1 200px;
}`,
 task:'Створи адаптивну галерею карток проєктів.',
 ok:['Контейнер із display: flex і gap.','Не менше 4 карток.','Картки переносяться на новий рядок при звуженні вікна.'],
 h:D('Галерея','    <h1>Мої проєкти</h1>\n    <div class="gallery">\n        <div class="item">Проєкт 1</div>\n        <div class="item">Проєкт 2</div>\n        <div class="item">Проєкт 3</div>\n    </div>'),
 c:'body {\n    font-family: sans-serif;\n    padding: 16px;\n}\n\n.gallery {\n    \n}\n\n.item {\n    padding: 24px;\n    background: rgba(139, 127, 208, 0.25);\n    border-radius: 12px;\n}',j:''},

{t:'CSS-анімації, переходи та адаптивність',
 th:"<p><b>Перехід</b> (transition) робить зміну стилю плавною. <b>Анімація</b> описує кілька кадрів. <b>Адаптивність</b> — здатність сторінки підлаштовуватись під розмір екрана; для цього використовують <b>медіазапити</b>.</p>",cm:[["transition: transform .2s", "Плавна зміна властивості за 0,2 с."], ["transform: scale(1.1)", "Зміна масштабу, також translate, rotate."], [":hover", "Стан при наведенні курсора."], ["@keyframes назва { }", "Опис кадрів анімації."], ["animation: назва 2s infinite", "Запуск анімації."], ["@media (max-width: 768px) { }", "Стилі лише для екранів вужчих за 768 px."]],
 ex:`.btn {
    transition: transform .2s;
}

.btn:hover {
    transform: scale(1.08);
}

@keyframes pulse {
    50% { opacity: .5; }
}

@media (max-width: 768px) {
    .gallery { flex-direction: column; }
}`,
 task:'Створи анімовану кнопку заклику до дії та адаптуй галерею для мобільних екранів.',
 ok:['Кнопка змінюється при наведенні (transition + transform).','Є анімація @keyframes.','Є @media (max-width: 768px), що змінює макет.'],
 h:D('Анімація','    <button class="cta">Приєднатися</button>\n    <div class="gallery">\n        <div class="item">1</div>\n        <div class="item">2</div>\n        <div class="item">3</div>\n    </div>'),
 c:'body {\n    font-family: sans-serif;\n    padding: 16px;\n}\n\n.cta {\n    padding: 12px 28px;\n    border: 0;\n    border-radius: 10px;\n    background: #8b7fd0;\n    color: white;\n}\n\n.gallery {\n    display: flex;\n    gap: 12px;\n    margin-top: 20px;\n}\n\n.item {\n    flex: 1;\n    padding: 24px;\n    background: rgba(139, 127, 208, 0.25);\n}\n\n/* Додай :hover, @keyframes та @media */',j:''},

{t:'Змінні, типи даних та взаємодія з користувачем',
 th:"<p><b>Змінна</b> — іменована комірка пам'яті. <b>Тип даних</b> визначає, що в ній зберігається: текст (string), число (number) чи логічне значення (boolean).</p><p><b>DOM</b> — «дерево» елементів сторінки, яким керує JavaScript. Через нього скрипт змінює вміст сторінки.</p>",cm:[["let x = 5", "Змінна, значення якої можна змінювати."], ["const name = \"Оля\"", "Стала: значення не змінюється."], ["console.log(x)", "Вивід у консоль браузера."], ["alert(\"текст\")", "Повідомлення у вікні."], ["prompt(\"Питання\")", "Запит тексту в користувача."], ["document.querySelector(\"#id\")", "Пошук елемента на сторінці."], ["elem.textContent = \"…\"", "Змінити текст елемента."], ["elem.innerHTML = \"…\"", "Змінити вміст як HTML."]],
 ex:`const name = prompt("Як тебе звати?");
let age = 16;
const isStudent = true;

console.log(name, age, isStudent);
document.querySelector("#out").textContent = "Привіт, " + name + "!";`,
 task:'Створи інтерактивну програму-привітання.',
 ok:['Запитай ім\'я через prompt.','Збережи його у змінній.','Виведи привітання на сторінку через textContent.'],
 h:D('Привітання','    <h1 id="out">Привіт!</h1>'),c:'body {\n    font-family: sans-serif;\n    text-align: center;\n    padding: 40px;\n}',
 j:'// Запитай ім\'я та покажи привітання\nconst out = document.querySelector("#out");\n\n'},

{t:'Події та робота з DOM',
 th:"<p><b>Подія</b> — це дія користувача або браузера: клік, введення, натискання клавіші. <b>Обробник події</b> — функція, яка виконується, коли подія настала.</p>",cm:[["document.querySelector()", "Знаходить елемент за CSS-селектором."], ["addEventListener(\"click\", f)", "Підписує функцію f на подію click."], ["function () { }", "Функція — іменований блок коду."], ["classList.toggle(\"dark\")", "Додає або прибирає клас."], ["elem.textContent", "Читання або зміна тексту."]],
 ex:`const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});`,
 task:'Реалізуй перемикач світлої/темної теми у власному міні-проєкті.',
 ok:['Кнопка перемикає клас dark на body.','У CSS є стилі для .dark.','Текст кнопки змінюється залежно від теми.'],
 h:D('Тема','    <h1>Мій міні-проєкт</h1>\n    <p>Натисни на кнопку, щоб змінити тему.</p>\n    <button id="btn">Темна тема</button>'),
 c:'body {\n    font-family: sans-serif;\n    padding: 30px;\n    background: #fff;\n    color: #222;\n}\n\nbody.dark {\n    \n}',j:'const btn = document.querySelector("#btn");\n\n// Додай addEventListener\n'},

{t:'Умови та розгалуження',
 th:"<p><b>Умова</b> дозволяє програмі обирати, яку дію виконати. <b>Логічний оператор</b> поєднує умови. Значення з поля вводу завжди приходить як рядок, тому його перетворюють на число та перевіряють.</p>",cm:[["if (умова) { }", "Виконується, якщо умова істинна."], ["else if / else", "Додаткова умова / усі інші випадки."], ["===, !==", "Строго дорівнює / не дорівнює."], ["<, >, <=, >=", "Порівняння чисел."], ["&&, ||, !", "І, або, не."], ["Number(рядок)", "Перетворення рядка на число."], ["isNaN(x)", "true, якщо x — не число."], ["Math.floor(Math.random() * 100)", "Випадкове ціле число від 0 до 99."]],
 ex:`const n = Number(input.value);

if (isNaN(n)) {
    msg.textContent = "Введи число";
} else if (n > secret) {
    msg.textContent = "Менше";
} else {
    msg.textContent = "Більше";
}`,
 task:'Заверш гру «Вгадай число».',
 ok:['Перевір, що введено число від 1 до 100.','Підказки «Більше» / «Менше».','Повідомлення про перемогу.'],
 h:D('Вгадай число','    <h1>Вгадай число від 1 до 100</h1>\n    <input id="num" type="number">\n    <button id="go">Перевірити</button>\n    <p id="msg"></p>'),
 c:'body {\n    font-family: sans-serif;\n    padding: 30px;\n}',
 j:'const secret = Math.floor(Math.random() * 100) + 1;\nconst input = document.querySelector("#num");\nconst msg = document.querySelector("#msg");\n\ndocument.querySelector("#go").addEventListener("click", function () {\n    const n = Number(input.value);\n\n    // Додай умови if / else if / else\n});'},

{t:'Масиви та цикли',
 th:"<p><b>Масив</b> — впорядкований список значень; кожне має <b>індекс</b> (нумерація з нуля). <b>Цикл</b> повторює дії. Нові елементи на сторінці створюють з коду та додають у DOM.</p>",cm:[["const a = [\"a\", \"b\"]", "Створення масиву."], ["a[0], a.length", "Перший елемент і довжина масиву."], ["a.push(x)", "Додає елемент у кінець масиву."], ["for (let i = 0; i < n; i++)", "Цикл із лічильником."], ["while (умова)", "Цикл, поки умова істинна."], ["document.createElement(\"li\")", "Створює елемент."], ["list.append(li)", "Додає елемент у список на сторінці."], ["li.remove()", "Видаляє елемент зі сторінки."]],
 ex:`const items = ["HTML", "CSS", "JS"];

for (let i = 0; i < items.length; i++) {
    const li = document.createElement("li");
    li.textContent = items[i];
    list.append(li);
}`,
 task:'Створи працюючий To-Do List із додаванням і видаленням завдань.',
 ok:['Додавання завдання з поля вводу.','Кнопка видалення біля кожного завдання.','Порожні завдання не додаються.'],
 h:D('To-Do','    <h1>Мої завдання</h1>\n    <input id="task" placeholder="Нове завдання">\n    <button id="add">Додати</button>\n    <ul id="list"></ul>'),
 c:'body {\n    font-family: sans-serif;\n    padding: 30px;\n}\n\nli {\n    margin: 6px 0;\n}',
 j:'const input = document.querySelector("#task");\nconst list = document.querySelector("#list");\n\ndocument.querySelector("#add").addEventListener("click", function () {\n    const text = input.value.trim();\n    if (text === "") return;\n\n    const li = document.createElement("li");\n    li.textContent = text + " ";\n\n    // Створи кнопку видалення і додай її до li\n\n    list.append(li);\n    input.value = "";\n});'},

{t:'Підсумковий проєкт: інтерактивна гра «Швидкий клік»',
 th:"<p><b>Стан гри</b> — дані про поточну ситуацію (очки, час). <b>Таймер</b> викликає функцію через однакові проміжки часу. У фінальному проєкті ви поєднуєте HTML (структура), CSS (вигляд) і JavaScript (логіка).</p>",cm:[["setInterval(f, 1000)", "Викликає f щосекунди; повертає id таймера."], ["clearInterval(id)", "Зупиняє таймер."], ["score++", "Збільшує змінну на 1."], ["elem.disabled = true", "Вимикає кнопку."], ["elem.textContent = …", "Виводить текст на сторінку."]],
 ex:`let time = 10;
const id = setInterval(function () {
    time--;
    if (time === 0) {
        clearInterval(id);
    }
}, 1000);`,
 task:'Заверш гру: 10 секунд, кнопка старту, таймер, лічильник, результат і перезапуск.',
 ok:['Гра триває рівно 10 секунд.','Клики зараховуються лише під час гри.','Після завершення видно результат, а кнопка дозволяє почати знову.'],
 h:D('Швидкий клік','    <h1>Швидкий клік</h1>\n    <p>Час: <span id="time">10</span> с · Очки: <span id="score">0</span></p>\n    <button id="start">Старт</button>\n    <button id="hit" disabled>Клік!</button>\n    <p id="result"></p>'),
 c:'body {\n    font-family: sans-serif;\n    text-align: center;\n    padding: 24px;\n}\n\nbutton {\n    padding: 14px 28px;\n    margin: 6px;\n    border: 0;\n    border-radius: 12px;\n    background: #8b7fd0;\n    color: white;\n    font-size: 18px;\n}\n\nbutton:disabled {\n    opacity: .4;\n}',
 j:'const timeEl = document.querySelector("#time");\nconst scoreEl = document.querySelector("#score");\nconst startBtn = document.querySelector("#start");\nconst hitBtn = document.querySelector("#hit");\nconst result = document.querySelector("#result");\n\nlet score = 0;\nlet time = 10;\nlet timerId = null;\n\nfunction show() {\n    timeEl.textContent = time;\n    scoreEl.textContent = score;\n}\n\n// 1. Напиши функцію endGame(): зупини таймер (clearInterval),\n//    вимкни кнопку «Клік!», увімкни «Старт» і покажи результат у #result.\n\n\n// 2. Додай обробник кліку на кнопку «Старт» (startBtn):\n//    скинь score і time, увімкни «Клік!», запусти setInterval,\n//    який щосекунди зменшує time й викликає endGame(), коли час вийшов.\n\n\n// 3. Додай обробник кліку на кнопку «Клік!» (hitBtn):\n//    збільшуй score і оновлюй екран через show().\n'}
];

/* ---------- стан і сховище ---------- */
const K='wpc:';
/* шкільний режим: прогрес у sessionStorage (зникає після закриття браузера) */
const SKEY=K+'school';
function keysOf(st){const a=[];try{for(let i=0;i<st.length;i++){const k=st.key(i);if(k&&k.startsWith(K)&&k!==SKEY)a.push(k)}}catch(e){}return a}
function wipe(st){keysOf(st).forEach(k=>{try{st.removeItem(k)}catch(e){}})}
const SCH=(()=>{try{
 const u=new URL(location.href),q=u.searchParams.get('school');
 if(q==='1'){localStorage.setItem(SKEY,'1');wipe(localStorage)}
 if(q==='0')localStorage.removeItem(SKEY);
 if(q!==null){u.searchParams.delete('school');history.replaceState(null,'',u.pathname+u.search+u.hash)}
 return localStorage.getItem(SKEY)==='1'}catch(e){return false}})();
const ST=(()=>{try{return SCH?sessionStorage:localStorage}catch(e){return null}})();
const store={
 get(k,d){try{const v=ST.getItem(K+k);return v===null?d:JSON.parse(v)}catch(e){return d}},
 set(k,v){try{ST.setItem(K+k,JSON.stringify(v))}catch(e){}},
 del(k){try{ST.removeItem(K+k)}catch(e){}}
};
let cur=store.get('cur',0),lang='h',done=store.get('done',[]);
if(!(cur>=0&&cur<=11))cur=0;
if(!(cur>=0&&cur<=12))cur=0;
const $=s=>document.querySelector(s);
const ta=$('#ta'),gut=$('#gut'),pv=$('#pv'),hl=$('#hl');
const ICON={moon:'<svg viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',sun:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'};
const CHECK='<svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg>';
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

let tt;
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),1800)}

/* ---------- Піксельний сніг на головній (темна тема, з 20 листопада по 1 березня) ---------- */
// Повертає рік початку зими (0 — не сезон снігу).
function winterSeason(d){const m=d.getMonth(),day=d.getDate(),y=d.getFullYear();
 if(m===10&&day>=20||m===11)return y;if(m<=1||m===2&&day===1)return y-1;return 0}
const WINTER=winterSeason(new Date());
const snowBox=document.createElement('div');snowBox.id='snow';snowBox.hidden=true;document.body.prepend(snowBox);
let snowCtl=null,snowState=0; // 0 — не завантажено, 1 — завантажується, 2 — готово, 3 — недоступно
function snowSync(){
 const on=!!WINTER&&snowState!==3&&document.body.classList.contains('home')&&document.documentElement.dataset.theme==='dark'&&!!window.WebGL2RenderingContext;
 snowBox.hidden=!on;
 if(!on)return;
 if(snowState===2){snowCtl.wake();return}
 if(snowState===1)return;
 snowState=1;
 const s=document.createElement('script');s.src='snow.js';s.async=true;
 s.onload=()=>{try{snowCtl=window.PixelSnow&&PixelSnow.mount(snowBox,{color:'#ece8ff',density:.35,opacity:.75,dpr:document.documentElement.classList.contains('lite')?1:0})}catch(e){snowCtl=null}
  snowState=snowCtl?2:3;if(!snowCtl)snowBox.remove();else snowSync()};
 s.onerror=()=>{snowState=3;snowBox.remove()};
 document.head.appendChild(s);
}
function setTheme(t,manual){document.documentElement.dataset.theme=t;$('#theme').innerHTML=t==='dark'?ICON.sun:ICON.moon;$('#theme').setAttribute('aria-label',t==='dark'?'Увімкнути світлу тему':'Увімкнути темну тему');if(manual)store.set('themeC',t);snowSync()}
$('#theme').onclick=()=>{setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark',true);preview()};
// Темна тема — за замовчуванням; світла лише якщо учень сам її обрав (themeC).
setTheme(store.get('themeC','dark')==='light'?'light':'dark');

/* ---------- підсвітка синтаксису ---------- */
const E=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const W=(c,s)=>'<span class="'+c+'">'+E(s)+'</span>';
function hlHtml(s){
 return s.replace(/(<!--[\s\S]*?(?:-->|$))|(<\/?[A-Za-z!][^>]*>?)|([^<]+|<)/g,(m,c,t,x)=>{
  if(c)return W('c',c);
  if(!t)return E(x);
  const p=t.match(/^(<\/?!?)([\w-]*)([\s\S]*?)(\/?>?)$/);
  const at=p[3].replace(/([^\s=]+)(\s*=\s*)?("[^"]*"|'[^']*'|[^\s"']+)?/g,(a,n,eq,v)=>W('a',n)+(eq?E(eq):'')+(v?W('s',v):''));
  return E(p[1])+W('t',p[2])+at+E(p[4]);
 });
}
function hlCss(s){
 let d=0;
 return s.replace(/(\/\*[\s\S]*?(?:\*\/|$))|("[^"\n]*"?|'[^'\n]*'?)|(@[\w-]+)|(#[0-9a-fA-F]{3,8}\b)|(-?\d*\.?\d+(?:px|em|rem|%|s|ms|vh|vw|deg|fr)?)|([{}])|([.#][\w-]+)|(:{1,2}[A-Za-z-][\w-]*)|([\w-]+)(?=\s*:)|([A-Za-z_-][\w-]*)|([\s\S])/g,
 (m,c,st,at,hx,n,br,sel,ps,pr,w)=>{
  if(c)return W('c',m);if(st)return W('s',m);if(at)return W('k',m);if(hx||n)return W('n',m);
  if(br){d+=m==='{'?1:-1;return E(m)}
  if(sel)return d?E(m):W('f',m);
  if(ps)return d?E(m):W('k',m);
  if(pr)return d?W('p',m):W('t',m);
  if(w)return d?E(m):W('t',m);
  return E(m);
 });
}
const JK=/^(?:const|let|var|function|return|if|else|for|while|new|this|true|false|null|undefined|break|continue|of|in|typeof)$/;
const JB=/^(?:document|console|window|Math|Number|String|Array|Date|JSON)$/;
function hlJs(s){
 return s.replace(/(\/\/[^\n]*|\/\*[\s\S]*?(?:\*\/|$))|("(?:[^"\\\n]|\\.)*"?|'(?:[^'\\\n]|\\.)*'?|`(?:[^`\\]|\\.)*`?)|(\b\d+\.?\d*\b)|(\.\s*[A-Za-z_$][\w$]*)|([A-Za-z_$][\w$]*)|([\s\S])/g,
 (m,c,st,n,pr,w,o,off,str)=>{
  if(c)return W('c',m);if(st)return W('s',m);if(n)return W('n',m);
  const call=/^\s*\(/.test(str.slice(off+m.length));
  if(pr){const nm=m.match(/[A-Za-z_$][\w$]*$/)[0];return E(m.slice(0,m.length-nm.length))+W(call?'f':'p',nm)}
  if(w){return JK.test(m)?W('k',m):JB.test(m)?W('o',m):call?W('f',m):E(m)}
  return E(m);
 });
}
const HL={h:hlHtml,c:hlCss,j:hlJs};

/* ---------- код ---------- */
const codeKey=(i,l)=>'code:'+i+':'+l;
const starter=(i,l)=>LESSONS[i][l];
let shared=null;
/* Сторінка з уроку 1 переноситься в урок 4, лише якщо в ній уже є вміст;
   порожній каркас (урок 1 не виконано) — тоді береться шаблон уроку 4. */
const hasBody=src=>{
 if(typeof src!=='string'||!src.trim())return false;
 const m=src.match(/<body[^>]*>([\s\S]*?)(<\/body>|$)/i),b=(m?m[1]:src).replace(/<!--[\s\S]*?-->/g,'');
 return /<(img|video|audio|iframe|svg|canvas|input|button|table|hr)\b/i.test(b)||b.replace(/<[^>]*>/g,'').replace(/&nbsp;/g,' ').trim()!=='';
};
const getCode=(i,l)=>{
 if(shared)return shared[l]||'';
 const v=store.get(codeKey(i,l),null);if(v!==null)return v;
 if(i===3&&l==='h'){const p=store.get(codeKey(0,'h'),'');if(hasBody(p))return p}
 return starter(i,l);
};
let gutN=0,pend=null,saveT=0;
function flushSave(){if(pend){store.set(pend[0],pend[1]);pend=null}clearTimeout(saveT);saveT=0}
addEventListener('pagehide',flushSave);
function updateGutter(){
 let n=1;for(let i=ta.value.indexOf('\n');i>=0;i=ta.value.indexOf('\n',i+1))n++;
 if(n!==gutN){gutN=n;let s='';for(let i=1;i<=n;i++)s+=i+'\n';gut.textContent=s}
 gut.scrollTop=ta.scrollTop;
 hl.innerHTML=HL[lang](ta.value)+'\n';hl.scrollTop=ta.scrollTop;hl.scrollLeft=ta.scrollLeft;
}
function loadEditor(){flushSave();ta.value=getCode(cur,lang);updateGutter();ta.scrollTop=0;
 document.querySelectorAll('#tabs .tab').forEach(b=>{const on=b.dataset.l===lang;b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1});
 ta.setAttribute('aria-label','Код '+{h:'HTML',c:'CSS',j:'JavaScript'}[lang]);}
ta.addEventListener('scroll',()=>{gut.scrollTop=ta.scrollTop;hl.scrollTop=ta.scrollTop;hl.scrollLeft=ta.scrollLeft});
new ResizeObserver(()=>{gut.scrollTop=ta.scrollTop}).observe(ta);
ta.addEventListener('input',()=>{pend=[codeKey(cur,lang),ta.value];clearTimeout(saveT);saveT=setTimeout(flushSave,250);updateGutter();schedule();clearTimeout(chkT);chkT=setTimeout(()=>evalChecks(true),600)});
ta.addEventListener('keydown',e=>{
 if(ta.readOnly)return;
 const s=ta.selectionStart,en=ta.selectionEnd,v=ta.value;
 if(e.key==='Tab'){e.preventDefault();ins('    ',s,en)}
 else if(e.key==='Enter'){
  e.preventDefault();
  const ls=v.lastIndexOf('\n',s-1)+1,line=v.slice(ls,s);
  let ind=line.match(/^\s*/)[0];
  if(/[{(\[]\s*$/.test(line)||/<(?!\/|!|meta|link|br|img|input|hr)[a-z][^>]*>\s*$/i.test(line)&&!/<\/[^>]+>\s*$/.test(line))ind+='    ';
  ins('\n'+ind,s,en);
 }
});
function ins(t,s,e){ta.focus();if(!document.execCommand||!document.execCommand('insertText',false,t)){ta.setRangeText(t,s,e,'end');ta.dispatchEvent(new Event('input'))}}
/* ---------- Підказки в редакторі ---------- */
const AC=(()=>{
 const h_=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
 const sp=s=>s?s.split(' '):[];
 /* --- HTML: тег: 'атрибути ; опис' --- */
 const GA='id class style title hidden';
 const TG={};
 Object.entries({
  html:'lang ; корінь документа',head:' ; службова частина сторінки',title:' ; назва вкладки браузера',
  meta:'charset name content ; службові дані',link:'rel href ; підключає файл (CSS, іконку)',
  style:' ; CSS усередині сторінки',script:'src ; JavaScript усередині сторінки',body:' ; усе, що бачить користувач',
  h1:' ; заголовок 1 рівня (головний)',h2:' ; заголовок 2 рівня',h3:' ; заголовок 3 рівня',h4:' ; заголовок 4 рівня',h5:' ; заголовок 5 рівня',h6:' ; заголовок 6 рівня',
  p:' ; абзац',strong:' ; важливий (жирний) текст',em:' ; виділений (курсивний) текст',br:' ; перенос рядка',hr:' ; горизонтальна лінія',
  ul:' ; маркований список',ol:'type start ; нумерований список',li:' ; пункт списку',
  a:'href target ; посилання',img:'src alt width height ; зображення',
  table:'border ; таблиця',tr:' ; рядок таблиці',th:'colspan rowspan ; комірка-заголовок',td:'colspan rowspan ; комірка з даними',
  form:'action method ; форма',label:'for ; підпис до поля',
  input:'type name placeholder value required min max step checked disabled ; поле введення',
  select:'name required ; список для вибору',option:'value selected ; варіант у списку',
  textarea:'name rows cols placeholder required ; багаторядкове поле',
  button:'type disabled ; кнопка',div:' ; блок-контейнер',span:' ; рядковий контейнер',
  header:' ; шапка сторінки',nav:' ; меню навігації',main:' ; основний вміст',section:' ; розділ',article:' ; окрема стаття чи картка',footer:' ; підвал сторінки'
 }).forEach(([k,v])=>{const [a,d]=v.split(' ; ');TG[k]={a:sp(a),d}});
 const VOID=/^(meta|link|br|hr|img|input)$/;
 const AD={id:'унікальне ім\'я елемента (#id)',class:'клас для CSS (.клас)',style:'CSS прямо в тегу',title:'підказка при наведенні',hidden:'сховати елемент',
  lang:'мова сторінки',charset:'кодування символів',name:'назва поля / тип meta',content:'значення meta',rel:'тип підключеного файлу',href:'адреса посилання або файлу',
  src:'адреса файлу',target:'де відкрити посилання',alt:'текст замість зображення',width:'ширина в пікселях',height:'висота в пікселях',
  border:'рамка таблиці',colspan:'об\'єднати стовпці',rowspan:'об\'єднати рядки',action:'куди надіслати форму',method:'спосіб надсилання',for:'id поля, до якого підпис',
  type:'тип',placeholder:'сірий текст-підказка в полі',value:'значення',required:'обов\'язкове поле',min:'найменше значення',max:'найбільше значення',step:'крок',
  checked:'позначено',disabled:'вимкнено',selected:'вибрано',rows:'кількість рядків',cols:'кількість символів у рядку',start:'з якого числа почати'};
 const BOOL=/^(hidden|required|checked|disabled|selected)$/;
 const AV={
  'input type':'text email number password checkbox radio date color range file submit',
  'button type':'button submit reset','ol type':'1 a A i I','a target':'_blank _self','form method':'get post',
  'link rel':'stylesheet icon','meta name':'viewport description author','meta charset':'UTF-8',
  'meta content':'width=device-width,~initial-scale=1.0','html lang':'uk en'
 };
 /* --- CSS: властивість: значення через пробіл (~ — пробіл усередині значення) --- */
 const COL='black white red green blue gray orange purple pink yellow transparent #ffffff rgb() rgba()';
 const CP={
  color:[COL,'колір тексту'],background:[COL+' linear-gradient() url()','фон'],'background-color':[COL,'колір фону'],
  'font-size':['16px 1.2rem 2em','розмір шрифту'],'font-family':['sans-serif serif monospace Arial system-ui','шрифт'],
  'font-weight':['normal bold 400 600 700','товщина шрифту'],'font-style':['normal italic','курсив'],'line-height':['1.5 normal','висота рядка'],
  'text-align':['left center right justify','вирівнювання тексту'],'text-decoration':['none underline line-through','підкреслення'],
  'text-transform':['uppercase lowercase capitalize none','регістр літер'],'letter-spacing':['1px normal','відстань між літерами'],
  width:['auto 100% 200px 50vw','ширина'],height:['auto 100% 200px 100vh','висота'],'max-width':['100% 600px none','найбільша ширина'],
  'min-height':['100vh 200px','найменша висота'],margin:['0 10px 0~auto auto','зовнішній відступ'],padding:['0 10px 10px~20px','внутрішній відступ'],
  'margin-top':['0 10px auto','відступ зверху'],'margin-bottom':['0 10px auto','відступ знизу'],'margin-left':['0 10px auto','відступ зліва'],'margin-right':['0 10px auto','відступ справа'],
  'padding-top':['0 10px','внутрішній відступ зверху'],'padding-bottom':['0 10px','внутрішній відступ знизу'],
  border:['1px~solid~#ccc 2px~dashed~red none','рамка'],'border-radius':['8px 50% 0','заокруглення кутів'],'border-bottom':['1px~solid~#ccc none','рамка знизу'],
  'box-sizing':['border-box content-box','як рахувати розмір'],'box-shadow':['0~4px~12px~rgba(0,0,0,.15) none','тінь'],
  display:['block inline inline-block flex grid none','як показувати елемент'],position:['static relative absolute fixed sticky','спосіб позиціювання'],
  top:['0 10px 50%','відступ від верху'],left:['0 10px 50%','відступ зліва'],right:['0 10px','відступ справа'],bottom:['0 10px','відступ знизу'],
  'z-index':['1 10 100','що вище при накладанні'],
  'justify-content':['flex-start center flex-end space-between space-around space-evenly','розподіл по головній осі'],
  'align-items':['stretch flex-start center flex-end baseline','вирівнювання по поперечній осі'],
  'flex-direction':['row column row-reverse column-reverse','напрямок flex'],'flex-wrap':['nowrap wrap','перенос на новий рядок'],
  flex:['1 1~1~200px none','як елемент росте й стискається'],gap:['10px 20px','проміжок між елементами'],
  'grid-template-columns':['repeat(3,~1fr) 1fr~1fr','стовпці сітки'],
  opacity:['0 0.5 1','прозорість'],cursor:['pointer default not-allowed','вигляд курсора'],overflow:['hidden auto scroll visible','що робити з тим, що не вміщується'],
  visibility:['visible hidden','видимість'],'list-style':['none disc decimal','маркери списку'],'object-fit':['cover contain','як вписати зображення'],
  transition:['all~.3s transform~.2s background~.3s','плавна зміна'],transform:['scale(1.1) rotate(10deg) translateX(10px) translateY(-5px) none','перетворення'],
  animation:['назва~2s~infinite назва~1s~ease','анімація з @keyframes'],'user-select':['none auto','чи можна виділяти текст']
 };
 const PSEUDO=':hover :active :focus :first-child :last-child :nth-child() ::before ::after';
 const AT='@media @keyframes @import';
 /* --- JavaScript: члени об'єктів. 'параметри через | ; опис ; тип результату' або '=prop ; опис ; тип' --- */
 const M=o=>{const r={};for(const k in o){const [p,d,t]=o[k].split(' ; ');r[k]=p==='='?{prop:1,d,r:t}:{p:p?p.split('|'):[],d,r:t}}return r};
 const T={};
 T.element=M({textContent:'= ; текст усередині елемента ; string',innerHTML:'= ; HTML усередині елемента ; string',value:'= ; що введено в поле ; string',
  style:'= ; CSS-стилі елемента ; style',classList:'= ; класи елемента ; classList',disabled:'= ; вимкнений (true/false) ; ',checked:'= ; чи позначено прапорець ; ',
  src:'= ; адреса картинки ; string',href:'= ; адреса посилання ; string',id:'= ; id елемента ; string',className:'= ; класи одним рядком ; string',
  hidden:'= ; сховати (true/false) ; ',children:'= ; дочірні елементи ; nodelist',parentElement:'= ; батьківський елемент ; element',
  addEventListener:'подія|функція ; реакція на подію: "click", "input"… ; ',removeEventListener:'подія|функція ; прибрати реакцію ; ',
  append:'елемент… ; додати в кінець ; ',prepend:'елемент… ; додати на початок ; ',remove:' ; видалити елемент ; ',
  setAttribute:'атрибут|значення ; задати атрибут ; ',getAttribute:'атрибут ; значення атрибута ; string',
  querySelector:'селектор ; перший елемент усередині ; element',querySelectorAll:'селектор ; усі елементи всередині ; nodelist',
  closest:'селектор ; найближчий батьківський за селектором ; element',focus:' ; поставити курсор у поле ; ',click:' ; натиснути програмно ; '});
 T.document=Object.assign({},M({querySelector:'селектор ; перший елемент: "#id", ".клас", "тег" ; element',querySelectorAll:'селектор ; усі елементи за селектором ; nodelist',
  getElementById:'id ; елемент за id (без #) ; element',createElement:'тег ; новий елемент: "li", "div"… ; element',
  body:'= ; елемент <body> ; element',title:'= ; назва вкладки ; string',addEventListener:'подія|функція ; реакція на подію ; '}));
 T.classList=M({add:'клас… ; додати клас ; ',remove:'клас… ; прибрати клас ; ',toggle:'клас ; додати, якщо нема, і прибрати, якщо є ; ',contains:'клас ; чи є клас (true/false) ; '});
 T.style=M({color:'= ; колір тексту ; string',backgroundColor:'= ; колір фону ; string',background:'= ; фон ; string',display:'= ; "none", "block", "flex" ; string',
  width:'= ; ширина: "200px" ; string',height:'= ; висота ; string',fontSize:'= ; розмір шрифту ; string',transform:'= ; "scale(1.2)" ; string',
  opacity:'= ; прозорість 0…1 ; string',left:'= ; відступ зліва ; string',top:'= ; відступ зверху ; string',margin:'= ; зовнішній відступ ; string',
  padding:'= ; внутрішній відступ ; string',border:'= ; рамка ; string',borderRadius:'= ; заокруглення ; string'});
 T.console=M({log:'значення… ; вивести в консоль браузера (F12) ; ',error:'значення… ; вивести помилку ; ',warn:'значення… ; попередження ; ',table:'дані ; вивести таблицею ; ',clear:' ; очистити консоль ; '});
 T.math=M({random:' ; випадкове число від 0 до 1 ; number',floor:'x ; округлити вниз ; number',ceil:'x ; округлити вгору ; number',round:'x ; округлити ; number',
  abs:'x ; модуль числа ; number',max:'a|b… ; найбільше ; number',min:'a|b… ; найменше ; number',sqrt:'x ; квадратний корінь ; number',pow:'x|y ; x у степені y ; number',
  trunc:'x ; відкинути дробову частину ; number',PI:'= ; число π ; number'});
 T.storage=M({setItem:'ключ|значення ; зберегти в браузері (рядком) ; ',getItem:'ключ ; прочитати збережене або null ; string',removeItem:'ключ ; видалити ; ',clear:' ; видалити все ; '});
 T.json=M({stringify:'значення ; перетворити на рядок JSON ; string',parse:'рядок ; перетворити JSON на дані ; '});
 T.string=M({length:'= ; кількість символів ; number',toUpperCase:' ; ВЕЛИКІ ЛІТЕРИ ; string',toLowerCase:' ; малі літери ; string',trim:' ; прибрати пробіли з країв ; string',
  includes:'підрядок ; чи містить (true/false) ; ',indexOf:'підрядок ; позиція або -1 ; number',slice:'початок|кінець ; частина рядка ; string',
  split:'роздільник ; розбити на масив ; array',replace:'що|на_що ; замінити перше входження ; string',replaceAll:'що|на_що ; замінити всі ; string',
  startsWith:'початок ; чи починається з ; ',endsWith:'кінець ; чи закінчується на ; ',repeat:'n ; повторити n разів ; string',
  padStart:'довжина|символ ; доповнити зліва: "5" → "05" ; string',charAt:'позиція ; символ за номером ; string'});
 T.array=M({length:'= ; кількість елементів ; number',push:'елемент… ; додати в кінець ; number',pop:' ; забрати останній ; ',shift:' ; забрати перший ; ',
  unshift:'елемент… ; додати на початок ; number',includes:'елемент ; чи є в масиві ; ',indexOf:'елемент ; позиція або -1 ; number',
  join:'роздільник ; з\'єднати в рядок ; string',slice:'початок|кінець ; частина масиву ; array',splice:'позиція|скільки|нові… ; видалити / вставити ; array',
  forEach:'функція ; для кожного елемента ; ',map:'функція ; новий масив з результатів ; array',filter:'функція ; лише ті, що підходять ; array',
  find:'функція ; перший, що підходить ; ',sort:'функція ; відсортувати ; array',reverse:' ; у зворотному порядку ; array',concat:'масив ; об\'єднати масиви ; array'});
 T.nodelist=M({length:'= ; кількість елементів ; number',forEach:'функція ; для кожного елемента ; '});
 T.number=M({toFixed:'знаків ; рядок з n знаками після коми ; string',toString:' ; перетворити на рядок ; string'});
 T.event=M({target:'= ; елемент, з яким сталася подія ; element',key:'= ; натиснута клавіша: "Enter", "a" ; string',code:'= ; код клавіші: "KeyA", "Space" ; string',
  type:'= ; назва події ; string',clientX:'= ; x курсора ; number',clientY:'= ; y курсора ; number',preventDefault:' ; скасувати дію за замовчуванням ; '});
 T.date=M({getHours:' ; години ; number',getMinutes:' ; хвилини ; number',getSeconds:' ; секунди ; number',getFullYear:' ; рік ; number',
  getDate:' ; день місяця ; number',getDay:' ; день тижня (0 — неділя) ; number',getTime:' ; мілісекунди від 1970 р. ; number',toLocaleDateString:' ; дата текстом ; string',toLocaleTimeString:' ; час текстом ; string'});
 T.window=M({innerWidth:'= ; ширина вікна ; number',innerHeight:'= ; висота вікна ; number',addEventListener:'подія|функція ; "resize", "keydown"… ; ',
  alert:'текст ; вікно з повідомленням ; ',scrollTo:'x|y ; прокрутити ; ',localStorage:'= ; сховище браузера ; storage'});
 T.numberCls=M({isInteger:'значення ; чи ціле число ; ',parseInt:'рядок ; ціле число з рядка ; number',parseFloat:'рядок ; дробове число з рядка ; number'});
 const G=Object.assign(M({
  alert:'текст ; вікно з повідомленням ; ',prompt:'питання|за_замовчуванням ; запитати в користувача (рядок або null) ; string',confirm:'питання ; так → true, ні → false ; ',
  Number:'значення ; перетворити на число ; number',String:'значення ; перетворити на рядок ; string',parseInt:'рядок ; ціле число з рядка ; number',parseFloat:'рядок ; дробове число з рядка ; number',
  isNaN:'значення ; чи це «не число» ; ',setTimeout:'функція|мс ; виконати один раз через мс ; number',setInterval:'функція|мс ; виконувати кожні мс, повертає id ; number',
  clearInterval:'id ; зупинити setInterval ; ',clearTimeout:'id ; скасувати setTimeout ; ',Date:' ; дата й час: new Date() ; date'}),
  {document:{prop:1,d:'сторінка (DOM)',r:'document'},console:{prop:1,d:'консоль браузера',r:'console'},Math:{prop:1,d:'математика',r:'math'},
   localStorage:{prop:1,d:'сховище браузера',r:'storage'},JSON:{prop:1,d:'перетворення даних у рядок і назад',r:'json'},window:{prop:1,d:'вікно браузера',r:'window'}});
 const KW='const let var function return if else for while do of in new true false null undefined break continue typeof switch case default try catch this class'.split(' ');
 const EVENTS={click:'клік',dblclick:'подвійний клік',input:'зміна тексту в полі',change:'зміна значення (після вибору)',submit:'надсилання форми',
  keydown:'натискання клавіші',keyup:'відпускання клавіші',mouseover:'наведення миші',mouseout:'миша пішла з елемента',mouseenter:'миша зайшла',mouseleave:'миша вийшла',
  mousemove:'рух миші',focus:'фокус на полі',blur:'поле втратило фокус',load:'усе завантажилось',DOMContentLoaded:'сторінку побудовано',scroll:'прокрутка',resize:'зміна розміру вікна'};

 /* --- збір імен із коду учня --- */
 const CHAIN=/((?:[A-Za-z_$][\w$]*(?:\([^()]*\)|\[[^\[\]]*\])*\.)*[A-Za-z_$][\w$]*(?:\([^()]*\)|\[[^\[\]]*\])*)$/;
 function resolve(chain,S){
  const parts=chain.split('.');let t=null;
  parts.forEach((raw,i)=>{
   const idx=/\[[^\]]*\]$/.test(raw),n=raw.replace(/(\([^()]*\)|\[[^\[\]]*\])+$/,'');
   if(i===0){
    if(S.types[n])t=S.types[n];else if(n==='Number')t=/\(/.test(raw)?'number':'numberCls';
    else if(G[n])t=G[n].r||null;else if(S.vars.has(n))t=S.types[n]||null;else t=null;
    if(n==='Date'&&/^new\s/.test(chain))t='date';
   }else{const mm=t&&T[t]&&T[t][n];t=mm?mm.r||null:null}
   if(idx)t=t==='array'?null:t==='nodelist'?'element':t==='string'?'string':null;
  });
  return t;
 }
 function infer(rhs,S){
  rhs=rhs.trim();
  if(/^["'`]/.test(rhs))return /^["'`][^"'`]*["'`]\s*$/.test(rhs)||/^[`"']/.test(rhs)?'string':null;
  if(/^\[/.test(rhs))return 'array';if(/^-?\d/.test(rhs))return 'number';if(/^new\s+Date\b/.test(rhs))return 'date';
  const m=/^[A-Za-z_$][\w$]*(?:\([^()]*\)|\[[^\[\]]*\])*(?:\.[A-Za-z_$][\w$]*(?:\([^()]*\)|\[[^\[\]]*\])*)*/.exec(rhs);
  return m?resolve(m[0],S):null;
 }
 function scanJs(code){
  const S={types:{},vars:new Set(),defs:{}};
  code=code.replace(/\/\*[\s\S]*?\*\/|\/\/[^\n]*/g,'');
  for(const m of code.matchAll(/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(([^)]*)\)/g))S.defs[m[1]]={p:m[2].split(',').map(s=>s.trim()).filter(Boolean),d:'твоя функція',own:1};
  for(const m of code.matchAll(/\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*(?:async\s*)?(?:function\s*\(([^)]*)\)|\(([^)]*)\)\s*=>|([A-Za-z_$][\w$]*)\s*=>)/g))
   S.defs[m[1]]={p:(m[2]||m[3]||m[4]||'').split(',').map(s=>s.trim()).filter(Boolean),d:'твоя функція',own:1};
  for(const m of code.matchAll(/\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*(?:=\s*([^;\n]*))?/g)){
   S.vars.add(m[1]);if(m[2]!==undefined&&!S.defs[m[1]]){const t=infer(m[2],S);if(t)S.types[m[1]]=t}
  }
  for(const m of code.matchAll(/\bfor\s*\(\s*(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s+of\s+([A-Za-z_$][\w$.]*)/g)){const t=resolve(m[2],S);if(t==='nodelist')S.types[m[1]]='element';else if(t==='string')S.types[m[1]]='string'}
  for(const m of code.matchAll(/(?:function\s*[\w$]*\s*\(([^)]*)\)|\(([^()]*)\)\s*=>|\b([A-Za-z_$][\w$]*)\s*=>)/g))
   (m[1]||m[2]||m[3]||'').split(',').forEach(x=>{const n=x.split('=')[0].trim();if(/^[A-Za-z_$][\w$]*$/.test(n)){S.vars.add(n);if(/^(e|ev|evt|event)$/.test(n))S.types[n]='event'}});
  for(const m of code.matchAll(/\.forEach\(\s*(?:function\s*\(\s*|\(\s*)?([A-Za-z_$][\w$]*)/g)){
   const before=code.slice(Math.max(0,m.index-120),m.index),c=CHAIN.exec(before);const t=c&&resolve(c[1],S);if(t==='nodelist')S.types[m[1]]='element'}
  return S;
 }
 function sel(html){
  const ids=new Set(),cls=new Set(),tags=new Set();
  html=html.replace(/<!-[-][\s\S]*?-->/g,'');
  for(const m of html.matchAll(/<([a-z][a-z0-9]*)\b([^>]*)>/gi)){tags.add(m[1].toLowerCase());
   const i=/\bid\s*=\s*["']([^"']+)/i.exec(m[2]);if(i)ids.add(i[1]);
   const c=/\bclass\s*=\s*["']([^"']+)/i.exec(m[2]);if(c)c[1].split(/\s+/).filter(Boolean).forEach(x=>cls.add(x))}
  return {ids:[...ids],cls:[...cls],tags:[...tags]};
 }
 function cssNames(css){
  const ids=new Set(),cls=new Set();
  css=css.replace(/\/\*[\s\S]*?\*\//g,'').replace(/\{[^{}]*\}/g,'{}');
  for(const m of css.matchAll(/\.([A-Za-z_-][\w-]*)/g))cls.add(m[1]);
  for(const m of css.matchAll(/#([A-Za-z_-][\w-]*)/g))if(!/^[0-9a-f]{3,8}$/i.test(m[1]))ids.add(m[1]);
  return {ids:[...ids],cls:[...cls]};
 }
 const htmlCode=()=>lang==='h'?ta.value:getCode(cur,'h');
 const cssCode=()=>(lang==='c'?ta.value:getCode(cur,'c'))+'\n'+[...htmlCode().matchAll(/<style\b[^>]*>([\s\S]*?)(?:<\/style>|$)/gi)].map(m=>m[1]).join('\n');
 const jsCode=()=>(lang==='j'?ta.value:getCode(cur,'j'))+'\n'+[...htmlCode().matchAll(/<script\b[^>]*>([\s\S]*?)(?:<\/script>|$)/gi)].map(m=>m[1]).join('\n');

 /* --- стан JS до курсора: рядки, коментарі, відкриті дужки --- */
 function jsCtx(text){
  const st=[];let q=null,qs=0,com=0;
  for(let i=0;i<text.length;i++){
   const c=text[i];
   if(com===1){if(c==='\n')com=0;continue}
   if(com===2){if(c==='*'&&text[i+1]==='/'){com=0;i++}continue}
   if(q){if(c==='\\'){i++;continue}if(c===q||c==='\n'&&q!=='`')q=null;continue}
   if(c==='/'&&text[i+1]==='/'){com=1;i++;continue}
   if(c==='/'&&text[i+1]==='*'){com=2;i++;continue}
   if(c==='"'||c==="'"||c==='`'){q=c;qs=i+1;continue}
   if(c==='('||c==='['||c==='{'){const m=c==='('&&CHAIN.exec(text.slice(Math.max(0,i-200),i).replace(/\s+$/,''));st.push({c,callee:m?m[1]:'',arg:0,start:i+1});continue}
   if(c===')'||c===']'||c==='}'){st.pop();continue}
   if(c===','&&st.length){const t=st[st.length-1];t.arg++;t.start=i+1}
  }
  let f=null;for(let k=st.length-1;k>=0;k--)if(st[k].c==='('){f=st[k];break}
  const top=st.length?st[st.length-1]:null;
  return {q,str:q?text.slice(qs):'',com:!!com,frame:f,top};
 }
 function lookup(callee,S){
  const i=callee.lastIndexOf('.');
  const name=(i<0?callee:callee.slice(i+1)).replace(/(\([^()]*\)|\[[^\[\]]*\])+$/,'');
  if(i<0)return S.defs[name]||(G[name]&&!G[name].prop?G[name]:null);
  const t=resolve(callee.slice(0,i),S);
  if(t&&T[t])return T[t][name]&&!T[t][name].prop?T[t][name]:null;
  for(const k of ['element','document','classList','string','array','console','math','storage','json'])if(T[k][name]&&!T[k][name].prop)return T[k][name];
  return null;
 }

 /* --- що підказати в цьому місці --- */
 const ent=(o,f)=>Object.entries(o).map(([n,x])=>[n,f?f(x,n):x]);
 const vals=s=>sp(s).map(v=>[v.replace(/~/g,' '),{d:''}]);
 function cssCands(text,inline){
  // text — CSS від початку файлу / <style> / атрибута style="" до курсора
  if(/\/\*(?![\s\S]*\*\/)/.test(text))return null;
  const clean=text.replace(/\/\*[\s\S]*?\*\//g,m=>' '.repeat(m.length)).replace(/"[^"\n]*"|'[^'\n]*'/g,m=>'"'+' '.repeat(m.length-2)+'"');
  const st=inline?['rule']:[];let last=0;
  for(let i=0;i<clean.length;i++){const c=clean[i];
   if(c==='{'){const h=clean.slice(last,i).trim();st.push(/^@(media|supports)/.test(h)?'group':/^@[\w-]*keyframes/.test(h)?'kf':'rule');last=i+1}
   else if(c==='}'){st.pop();last=i+1}else if(c===';')last=i+1}
  const decl=clean.slice(last),top=st[st.length-1];
  if(/"[^"]*$/.test(decl)||/\/\*/.test(decl))return null;
  let m;
  if(top!=='rule'){
   if(top==='kf'||(decl.match(/\(/g)||[]).length>(decl.match(/\)/g)||[]).length)return null;
   if((m=/(?:^|[\s,])(@[\w-]*)$/.exec(decl)))return {pref:m[1],c:vals(AT).map(([n])=>[n,{d:n==='@media'?'стилі для певної ширини екрана':n==='@keyframes'?'кроки анімації':'підключити інший CSS'}])};
   if((m=/[\w\])*-](:{1,2}[\w-]*)$/.exec(decl)))return {pref:m[1],c:vals(PSEUDO).map(([n])=>[n,{d:{':hover':'під курсором',':active':'під час натискання',':focus':'у фокусі',':nth-child()':'елемент за номером',':first-child':'перший',':last-child':'останній'}[n]||''}])};
   return null;
  }
  if((m=/^\s*([\w-]+)\s*:\s*(?:[^:]*\s)?([\w#().%-]*)$/.exec(decl))){const p=CP[m[1]];return p?{pref:m[2],c:vals(p[0]+' inherit')}:null}
  if((m=/^\s*([a-z-]+)$/.exec(decl)))return {pref:m[1],c:ent(CP,x=>({d:x[1],css:1}))};
  return null;
 }
 function jsCands(text,S){
  const c=jsCtx(text);if(c.com)return null;
  if(c.q){
   // у лапках: назви подій, селектори, класи, теги
   const f=c.frame;if(!f||!f.callee||c.q==='`'||f.arg!==0||text.slice(f.start).trim()[0]!==c.q)return null;
   const fn=f.callee.split('.').pop(),pref=c.str;
   if(fn==='addEventListener')return {pref,c:ent(EVENTS,d=>({d}))};
   const H=sel(htmlCode()),C=cssNames(cssCode());
   if(fn==='getElementById')return {pref,c:H.ids.map(n=>[n,{d:'id з HTML'}])};
   if(/^(add|remove|toggle|contains)$/.test(fn)&&/classList$/.test(f.callee.slice(0,f.callee.lastIndexOf('.'))))return {pref,c:[...new Set([...C.cls,...H.cls])].map(n=>[n,{d:'клас'}])};
   if(fn==='createElement')return {pref,c:ent(TG,x=>({d:x.d}))};
   if(/^(querySelector|querySelectorAll|closest)$/.test(fn))return {pref,c:[...H.ids.map(n=>['#'+n,{d:'id з HTML'}]),...[...new Set([...H.cls,...C.cls])].map(n=>['.'+n,{d:'клас'}]),...H.tags.map(n=>[n,{d:'тег'}])]};
   return null;
  }
  const line=text.slice(text.lastIndexOf('\n')+1);let m;
  if(/\d[\w.]*$/.test(line)&&!/[A-Za-z_$][\w$]*$/.test(line))return null;
  if((m=/\.\s*([A-Za-z_$][\w$]*)?$/.exec(line))){
   const pref=m[1]||'',head=line.slice(0,line.length-m[0].length).replace(/\s+$/,''),ch=CHAIN.exec(head);
   if(!ch)return null;
   const t=resolve(ch[1],S);
   if(t&&T[t])return {pref,c:ent(T[t])};
   if(!pref)return null;
   const u={};for(const k of ['element','string','array','classList'])for(const [n,x] of Object.entries(T[k]))if(!u[n])u[n]=x;
   return {pref,c:ent(u)};
  }
  if((m=/(?:^|[^\w$.])([A-Za-z_$][\w$]*)$/.exec(line))){
   const pref=m[1];
   if(/\b(?:const|let|var|function|class)\s+[\w$]*$/.test(line)||/\bfor\s*\(\s*(?:const|let|var)\s+\w*$/.test(line))return null;
   if(pref.length<2)return null;
   const seen=new Map();
   Object.entries(S.defs).forEach(([n,x])=>seen.set(n,x));
   S.vars.forEach(n=>{if(!seen.has(n))seen.set(n,{prop:1,d:'змінна',own:1})});
   Object.entries(G).forEach(([n,x])=>{if(!seen.has(n))seen.set(n,x)});
   KW.forEach(n=>{if(!seen.has(n))seen.set(n,{kw:1,d:''})});
   return {pref,c:[...seen]};
  }
  return null;
 }
 function htmlCands(text){
  // усередині <style>/<script> — інша мова
  const lc=text.toLowerCase();
  const ci=lc.lastIndexOf('<!-'+'-');if(ci>=0&&ci>lc.lastIndexOf('-->'))return null;
  for(const [tg,l] of [['style','c'],['script','j']]){
   const re=new RegExp('<'+tg+'\\b[^>]*>','gi');let open=-1,mm;while((mm=re.exec(lc)))open=mm.index+mm[0].length;
   if(open>=0&&lc.indexOf('</'+tg,open)<0){const code=text.slice(open);return l==='c'?cssCands(code,false):jsCands(code,scanJs(jsCode()))}
  }
  const lt=text.lastIndexOf('<');if(lt<0||lt<text.lastIndexOf('>'))return null;   // звичайний текст між тегами
  const t=text.slice(lt);let m;
  if((m=/^<(\/?)([a-zA-Z][\w-]*)?$/.exec(t))){
   const pref=m[2]||'';
   if(m[1]){const stack=[];for(const x of text.slice(0,lt).replace(/<!-[-][\s\S]*?-->/g,'').matchAll(/<(\/?)([a-zA-Z][\w-]*)[^>]*>/g)){const n=x[2].toLowerCase();if(VOID.test(n))continue;if(x[1]){const k=stack.lastIndexOf(n);if(k>=0)stack.length=k}else stack.push(n)}
    return stack.length?{pref,c:[[stack[stack.length-1],{d:'закрити тег'}]],close:1}:null}
   return {pref,c:ent(TG,x=>({d:x.d,tag:1}))};
  }
  m=/^<([a-zA-Z][\w-]*)(\s[\s\S]*)?$/.exec(t);if(!m||!m[2])return null;
  const tag=m[1].toLowerCase(),rest=m[2];
  const qs=rest.replace(/"[^"]*"|'[^']*'/g,'');
  if((m=/([\w-]+)\s*=\s*(["'])([^"']*)$/.exec(rest))&&/["'][^"']*$/.test(qs)){
   const at=m[1].toLowerCase(),pref=m[3];
   if(at==='style'){const r=cssCands(pref,true);return r}
   if(at==='class'){const C=cssNames(cssCode()),w=pref.split(/\s+/).pop();return {pref:w,c:C.cls.map(n=>[n,{d:'клас із CSS'}])}}
   if(at==='id'&&tag!=='label'){const C=cssNames(cssCode());return {pref,c:C.ids.map(n=>[n,{d:'id із CSS'}])}}
   if(at==='for')return {pref,c:sel(htmlCode()).ids.map(n=>[n,{d:'id поля'}])};
   if(at==='href'&&tag==='link'&&/stylesheet/i.test(rest))return {pref,c:[['style.css',{d:''}]]};
   const v=AV[tag+' '+at];return v?{pref,c:vals(v)}:null;
  }
  if(/["']/.test(qs)||/=\s*$/.test(rest))return null;
  if((m=/\s([\w-]*)$/.exec(rest))){
   const pref=m[1],used=new Set([...rest.matchAll(/([\w-]+)\s*=/g)].map(x=>x[1].toLowerCase()));
   const own=(TG[tag]?TG[tag].a:[]).concat(sp(GA)).filter(a=>!used.has(a));
   return {pref,c:own.map(a=>[a,{d:AD[a]||'',attr:1}])};
  }
  return null;
 }
 function cands(){
  const s=ta.selectionStart,text=ta.value.slice(Math.max(0,s-6000),s);
  if(lang==='h')return htmlCands(text);
  if(lang==='c')return cssCands(text,false);
  return jsCands(text,scanJs(jsCode()));
 }

 /* --- інтерфейс --- */
 const KEY='lw:ac';
 let on=true;try{on=localStorage.getItem(KEY)!=='0'}catch(e){}
 const box=document.createElement('div');box.className='acl';box.hidden=true;box.setAttribute('role','listbox');
 const tip=document.createElement('div');tip.className='act';tip.hidden=true;
 document.body.append(box,tip);
 let items=[],sel_=0,moved=false,rng=null,cw=0,cur_=null;
 function charW(){
  if(cw)return cw;const cs=getComputedStyle(ta),c=document.createElement('canvas').getContext('2d');
  c.font=cs.fontStyle+' '+cs.fontWeight+' '+cs.fontSize+' '+cs.fontFamily;cw=c.measureText('M'.repeat(20)).width/20||8.4;return cw;
 }
 function caretXY(){
  const s=ta.selectionStart,v=ta.value,ls=v.lastIndexOf('\n',s-1)+1,line=(v.slice(0,s).match(/\n/g)||[]).length,r=ta.getBoundingClientRect();
  const cs=getComputedStyle(ta),lh=parseFloat(cs.lineHeight)||21;
  return {x:r.left+parseFloat(cs.paddingLeft)+(s-ls)*charW()-ta.scrollLeft,y:r.top+parseFloat(cs.paddingTop)+line*lh-ta.scrollTop,lh,r};
 }
 function place(el,below){
  const c=caretXY();if(c.y<c.r.top-c.lh/2||c.y>c.r.bottom-c.lh/2){el.hidden=true;return}
  el.style.left='0px';el.style.top='0px';
  const w=el.offsetWidth,h=el.offsetHeight,vw=document.documentElement.clientWidth,vh=innerHeight;
  const x=Math.max(8,Math.min(Math.max(c.r.left,Math.min(c.x,c.r.right))-4,vw-w-8));let y;
  if(below){y=c.y+c.lh+2;if(y+h>vh-4)y=c.y-h-4-(tip.hidden?0:tip.offsetHeight+4)}
  else{y=c.y-h-4;if(y<4)y=c.y+c.lh+2+(box.hidden?0:box.offsetHeight+4)}
  el.style.left=x+'px';el.style.top=Math.max(4,y)+'px';
 }
 const hideList=()=>{box.hidden=true;items=[]};
 const hide=()=>{hideList();tip.hidden=true};
 function sigHTML(sg,name,fr,curArg){
  const ps=sg.p;let a=fr.arg,act=a<ps.length?a:-1;
  if(act<0){const r=ps.findIndex(p=>p.endsWith('…'));if(r>=0&&a>=r)act=r}
  return '<code>'+h_(name)+'(<span>'+ps.map((p,i)=>i===act?'<b>'+h_(p)+'</b>':h_(p)).join(', ')+'</span>)</code>'+(sg.d?'<small>'+h_(sg.d)+'</small>':'');
 }
 function updateTip(){
  const s=ta.selectionStart;if(s!==ta.selectionEnd){tip.hidden=true;return}
  let text=ta.value.slice(Math.max(0,s-6000),s);
  if(lang==='h'){
   const lc=text.toLowerCase(),re=/<script\b[^>]*>/gi;let open=-1,mm;while((mm=re.exec(lc)))open=mm.index+mm[0].length;
   if(open<0||lc.indexOf('<\/script',open)>=0){tip.hidden=true;return}
   const ci=lc.lastIndexOf('<!-'+'-');if(ci>open){tip.hidden=true;return}
   text=text.slice(open);
  }else if(lang!=='j'){tip.hidden=true;return}
  const c=jsCtx(text),fr=c.frame;
  if(c.com||!fr||!fr.callee||c.top&&c.top.c==='{'&&c.top.start>fr.start){tip.hidden=true;return}
  const sg=lookup(fr.callee,scanJs(jsCode()));if(!sg||!sg.p||!sg.p.length){tip.hidden=true;return}
  tip.innerHTML=sigHTML(sg,fr.callee.split('.').pop().replace(/(\([^()]*\)|\[[^\[\]]*\])+$/,''),fr);
  tip.hidden=false;place(tip,false);
 }
 function updateList(){
  const s=ta.selectionStart;if(s!==ta.selectionEnd){hideList();return}
  const r=cands();if(!r){hideList();return}
  const low=r.pref.toLowerCase();
  items=r.c.filter(([n])=>n.toLowerCase().startsWith(low)&&n!==r.pref)
   .sort((a,b)=>(b[1].own?1:0)-(a[1].own?1:0)||(low?a[0].length-b[0].length:0)||(low?a[0].localeCompare(b[0]):0)).slice(0,40);
  if(!items.length){hideList();return}
  cur_=r;rng=[s-r.pref.length,s];sel_=0;moved=false;render();
 }
 function render(){
  box.innerHTML=items.map(([n,x],i)=>'<div class="aci'+(i===sel_?' on':'')+'" data-i="'+i+'" role="option"><code>'+h_(n)+(x.p?'('+')':'')+'</code>'+(x.d?'<span>'+h_(x.d)+'</span>':'')+'</div>').join('');
  box.hidden=false;place(box,true);
  const a=box.children[sel_];if(a)a.scrollIntoView({block:'nearest'});
 }
 let busy=false;
 function accept(i){
  const [n,x]=items[i],r=cur_;hideList();
  busy=true;ta.setSelectionRange(rng[0],rng[1]);
  const v=ta.value,after=v[rng[1]]||'';let t=n,back=0,again=false;
  if(x.p&&!x.prop&&!x.kw&&after!=='('){t=n+'()';back=x.p.length?1:0}
  else if(x.css){t=n+(after===':'?'':': ');again=after!==':'}
  else if(x.attr&&!BOOL.test(n)&&after!=='='){t=n+'=""';back=1;again=true}
  else if(r&&r.close&&after!=='>')t=n+'>';
  ins(t);if(back)ta.setSelectionRange(ta.selectionStart-back,ta.selectionStart-back);
  busy=false;refresh(again);
 }
 function refresh(list){
  if(!on||ta.readOnly){hide();return}
  if(list||!box.hidden)updateList();
  updateTip();
 }
 const TRIG=/[\w$.<\/ "'=:#@-]$/;
 ta.addEventListener('input',e=>{if(busy)return;const d=e.data,it=e.inputType||'';
  refresh((it==='insertText'||it==='insertCompositionText')&&d&&TRIG.test(d)||it==='deleteContentBackward'&&!box.hidden)});
 ta.addEventListener('click',()=>{hideList();refresh(false)});
 ta.addEventListener('keyup',e=>{if(/^(Arrow(Left|Right)|Home|End|PageUp|PageDown)$/.test(e.key)){hideList();refresh(false)}});
 ta.addEventListener('blur',()=>setTimeout(()=>{if(document.activeElement!==ta)hide()},150));
 const repos=()=>{if(!box.hidden)place(box,true);if(!tip.hidden)place(tip,false)};
 ta.addEventListener('scroll',repos);addEventListener('scroll',repos,true);
 addEventListener('resize',()=>{cw=0;hide()});
 box.addEventListener('pointerdown',e=>{e.preventDefault();const r=e.target.closest('.aci');if(r)accept(+r.dataset.i)});
 box.addEventListener('mousedown',e=>e.preventDefault());
 // перехоплюємо клавіші раніше за Tab/Enter редактора
 ta.parentNode.addEventListener('keydown',e=>{
  if(e.target!==ta||!on||ta.readOnly||e.isComposing)return;
  let done=false;
  if(!box.hidden&&items.length){
   if(e.key==='ArrowDown'||e.key==='ArrowUp'){sel_=(sel_+(e.key==='ArrowDown'?1:items.length-1))%items.length;moved=true;render();done=true}
   else if(e.key==='Tab'&&!e.shiftKey||e.key==='Enter'&&moved&&!e.shiftKey&&!e.ctrlKey){accept(sel_);done=true}
   else if(e.key==='Escape'){hideList();done=true}
   else if(e.key==='Enter')hideList();
  }else if(e.key==='Escape'&&!tip.hidden){tip.hidden=true;done=true}
  if(done){e.preventDefault();e.stopPropagation()}
 },true);
 return {hide,get on(){return on},set on(v){on=!!v;try{localStorage.setItem(KEY,on?'1':'0')}catch(e){}if(!on)hide()}};
})();

/* ---------- попередній перегляд ---------- */
let pt;
function schedule(){clearTimeout(pt);pt=setTimeout(preview,400)}
function before(html,tag,add){const i=html.toLowerCase().lastIndexOf(tag);return i<0?html+add:html.slice(0,i)+add+html.slice(i)}
function themeBase(){
 const d=document.documentElement.dataset.theme==='dark';
 const bg=d?'#1f2025':'#fcfcff',tx=d?'#e6e6ee':'#23232e',ln=d?'#a597e6':'#5b4bb7';
 return '<style>/* тема за замовчуванням: перекривається стилями учня */\n:where(:root){color-scheme:'+(d?'dark':'light')+';scrollbar-color:'+(d?'#555a66':'#c3c0d8')+' transparent}\n:where(body){background:'+bg+';color:'+tx+';font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;line-height:1.5}\n:where(a){color:'+ln+'}\n</style>\n';
}
function preview(){
 flushSave();
 if(cur>11)return;
 let h=getCode(cur,'h');const c=getCode(cur,'c'),j=getCode(cur,'j');
 h=before(h,'</head>',themeBase()+'<style>\n'+c.replace(/<\/style/gi,'<\\/style')+'\n</style>\n');
 h=before(h,'</body>','<script>\ntry {\n'+j.replace(/<\/script/gi,'<\\/script')+'\n} catch (e) { document.body.insertAdjacentHTML("beforeend", "<pre style=\\"color:#c0392b\\">Помилка: " + e.message + "</pre>"); }\n<\/script>\n');
 pv.srcdoc=h;
}

/* ---------- дії ---------- */
function copyText(t){
 return (navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(t):Promise.reject()).catch(()=>{
  const x=document.createElement('textarea');x.value=t;x.style.cssText='position:fixed;opacity:0';document.body.append(x);x.select();
  const ok=document.execCommand('copy');x.remove();if(!ok)throw new Error('copy');
 });
}
const tryCopy=(t)=>copyText(t).then(()=>toast('Код скопійовано'),()=>toast('Не вдалося скопіювати'));
$('#copy').onclick=()=>tryCopy(ta.value);
$('#reset').onclick=()=>{store.del(codeKey(cur,lang));loadEditor();preview();toast('Код скинуто')};
$('#tabs').onclick=e=>{const b=e.target.closest('.tab');if(b){lang=b.dataset.l;loadEditor()}};


/* ---------- промо Python ---------- */
const QGO='<svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"/></svg>';
const QUESTS=[
 {u:'https://whyuxavier.github.io/ghost-in-html/',t:'Ghost in HTML',d:'Квест: виправ код сайту й визволи привида',i:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20.5V11a7 7 0 0 1 14 0v9.5l-2.3-1.6-2.4 1.6-2.3-1.6-2.3 1.6-2.4-1.6z" fill="#a9b8ec"/><circle cx="9.5" cy="11" r="1.4" fill="#2b3150"/><circle cx="14.5" cy="11" r="1.4" fill="#2b3150"/><path d="M10.5 14.5h3" stroke="#2b3150" stroke-width="1.4" stroke-linecap="round"/><path d="M1.5 6.5 3.5 5 1.5 3.5M22.5 3.5 20.5 5l2 1.5" stroke="#f0c75e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>'},
 {u:'https://whyuxavier.github.io/bug-storm/',t:'Баг-шторм',d:'Гра й тест: виправ помилки в HTML і CSS',i:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6.5a3 3 0 0 1 6 0z" fill="#f0c75e"/><rect x="6.5" y="7.5" width="11" height="13" rx="5.5" fill="#6f8ad6"/><path d="M12 8.5v11" stroke="#fff" stroke-width="1.4"/><path d="M6.5 11H3.5M6.5 15H3M7.5 19l-2.5 2M17.5 11h3M17.5 15h3.5M16.5 19l2.5 2M10 4.5 8.5 2.5M14 4.5l1.5-2" stroke="#6f8ad6" stroke-width="1.6" stroke-linecap="round" fill="none"/><circle cx="9.5" cy="12" r="1" fill="#fff"/><circle cx="14.5" cy="16" r="1" fill="#fff"/></svg>'}];
const qcard=q=>'<a class="card qc" href="'+q.u+'" target="_blank" rel="noopener noreferrer"><span class="qi">'+q.i+'</span><span><b>'+esc(q.t)+'</b><span>'+esc(q.d)+'</span></span><span class="go">'+QGO+'</span></a>';
const PROMO='<a class="card promo" href="https://whyuxavier.github.io/learn-python/" target="_blank" rel="noopener noreferrer"><span class="pi"><svg viewBox="361 102 24 24" aria-hidden="true"><path d="M373 103c-4 0-5 1.4-5 3.2v2.6h5.3v1.3h-7.5c-2.2 0-3.6 1.8-3.6 4.4s1.4 4.4 3.6 4.4h2.2v-3.1c0-2.2 1.3-3.5 3.5-3.5h4.8c1.8 0 3.1-1.3 3.1-3.1v-3c0-1.8-1.8-3.2-6.4-3.2z" fill="#6f8ad6"/><path d="M373 125c4 0 5-1.4 5-3.2v-2.6h-5.3v-1.3h7.5c2.2 0 3.6-1.8 3.6-4.4s-1.4-4.4-3.6-4.4H378v3.1c0 2.2-1.3 3.5-3.5 3.5h-4.8c-1.8 0-3.1 1.3-3.1 3.1v3c0 1.8 1.8 3.2 6.4 3.2z" fill="#f0c75e"/></svg></span><span class="pt"><small>Можливо, ти також захочеш вивчити</small><b>Python з нуля</b><span class="pills"><span>print("Hello, world!")</span><span>tkinter</span><span>turtle</span></span></span><span class="btn">Відкрити курс →</span></a>';

/* ---------- бонус ---------- */
const STAR='<svg viewBox="0 0 24 24"><path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.3l1.1-6.2L3 9.7l6.2-.9z"/></svg>';
const TOOLS=[
 ['https://code.visualstudio.com/','Visual Studio Code','Безкоштовний редактор коду'],
 ['https://developer.mozilla.org/uk/','MDN Web Docs','Довідник з HTML, CSS, JS (українською)'],
 ['https://uk.javascript.info/','Сучасний підручник JavaScript','Українською, з прикладами'],
 ['https://codepen.io/','CodePen','Онлайн-пісочниця для вебекспериментів'],
 ['https://jsfiddle.net/','JSFiddle','Швидкі тести HTML/CSS/JS'],
 ['https://caniuse.com/','Can I use','Підтримка можливостей у браузерах'],
 ['https://flexboxfroggy.com/#uk','Flexbox Froggy','Гра для вивчення Flexbox'],
 ['https://flukeout.github.io/','CSS Diner','Гра для вивчення CSS-селекторів'],
 ['https://fonts.google.com/','Google Fonts','Безкоштовні шрифти'],
 ['https://coolors.co/','Coolors','Генератор палітр'],
 ['https://www.figma.com/','Figma','Дизайн інтерфейсів'],
 ['https://github.com/','GitHub','Зберігання коду та публікація сайтів']];
const VIDEO=[
 ['https://www.youtube.com/@freelancerlifestyle','Фрілансер по життю','Верстка сайтів, HTML, CSS, JavaScript і фриланс'],
 ['https://www.youtube.com/@codymoSolo/courses',"Кодимо солов'їною",'HTML, CSS, JavaScript і Astro'],
 ['https://www.youtube.com/@itmentor/courses','ITMENTOR','Створення сайтів, графіка, Scratch, робототехніка'],
 ['https://www.youtube.com/@savchukit1454/courses','SavchukIT','Frontend-розробка та JavaScript'],
 ['https://www.youtube.com/@ProgerSchool/courses','Школа програмування','Python, Java, C#, C++, розробка ігор'],
 ['https://www.youtube.com/@CodeUA/courses','CodeUA','Розробка, тестування, вебдизайн, DevOps']];
const LNK=a=>a.map(x=>'<a class="lk" href="'+x[0]+'" target="_blank" rel="noopener noreferrer"><b>'+esc(x[1])+'</b><span>'+esc(x[2])+'</span></a>').join('');
function bonusHtml(){
 return '<div class="card"><h2>Інструменти веброзробника</h2><div class="lks">'+LNK(TOOLS)+'</div></div>'+
 '<div class="card"><h2>Безкоштовні відеокурси на YouTube</h2><div class="lks">'+LNK(VIDEO)+'</div></div>'+
 '<div class="card"><h2>Що можна створити</h2><p>Ця міні-гра написана лише на HTML, CSS і JavaScript. Лопай бульбашки — клікай або торкайся. Повзунками змінюй кількість і швидкість.</p><div class="gctl"><label>Кількість <input type="range" id="gN" min="1" max="10" step="1"><output id="gNo"></output></label><label>Швидкість <input type="range" id="gV" min="1" max="10" step="1"><output id="gVo"></output></label><button class="ib" id="gSnd" aria-pressed="true"></button></div><canvas id="bg" width="640" height="340" aria-label="Міні-гра: лопай бульбашки"></canvas><div class="bar"><b id="bsc">Лопнуто: 0</b><button class="btn" id="bre">Спочатку</button></div></div>';
}
const SND_ON='<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/></svg>',
 SND_OFF='<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 9l5 6M22 9l-5 6"/></svg>';
let actx=null;
function popSound(){
 if(!store.get('snd',true))return;
 try{
  actx=actx||new (window.AudioContext||window.webkitAudioContext)();
  if(actx.state==='suspended')actx.resume();
  const t=actx.currentTime,o=actx.createOscillator(),g=actx.createGain();
  const f=520+Math.random()*380;
  o.type='sine';o.frequency.setValueAtTime(f,t);o.frequency.exponentialRampToValueAtTime(f*2.2,t+.07);
  g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.28,t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+.13);
  o.connect(g).connect(actx.destination);o.start(t);o.stop(t+.15);
 }catch(e){}
}
function bonusGame(){
 const cv=$('#bg'),x=cv.getContext('2d'),out=$('#bsc'),W=cv.width,H=cv.height;
 const gN=$('#gN'),gV=$('#gV'),sb=$('#gSnd');
 gN.value=store.get('gN',4);gV.value=store.get('gV',4);
 const sync=()=>{$('#gNo').textContent=gN.value;$('#gVo').textContent=gV.value;store.set('gN',+gN.value);store.set('gV',+gV.value)};
 gN.oninput=gV.oninput=sync;sync();
 const sSync=()=>{const on=store.get('snd',true);sb.innerHTML=on?SND_ON:SND_OFF;sb.setAttribute('aria-pressed',on);sb.setAttribute('aria-label',on?'Вимкнути звук':'Увімкнути звук');sb.title=on?'Звук увімкнено':'Звук вимкнено'};
 sb.onclick=()=>{store.set('snd',!store.get('snd',true));sSync()};sSync();
 let score=0,st=[],ps=[],last=0,n=0;
 const cs=getComputedStyle(document.documentElement),C=[cs.getPropertyValue('--ac').trim()||'#8b7fd0',cs.getPropertyValue('--ac2').trim()||'#7ea6d8',cs.getPropertyValue('--mint').trim()||'#8fd1bd'];
 cv.onpointerdown=e=>{
  const b=cv.getBoundingClientRect(),mx=(e.clientX-b.left)*W/b.width,my=(e.clientY-b.top)*H/b.height;
  for(let i=st.length-1;i>=0;i--){const q=st[i];
   if(Math.hypot(q.x-mx,q.y-my)<q.r+8){st.splice(i,1);score++;popSound();out.textContent='Лопнуто: '+score;
    for(let k=0;k<12;k++)ps.push({x:q.x,y:q.y,vx:(Math.random()-.5)*5,vy:(Math.random()-.5)*5,l:1,c:q.c});break}}
 };
 $('#bre').onclick=()=>{score=0;st=[];ps=[];out.textContent='Лопнуто: 0'};
 function loop(t){
  if(!cv.isConnected)return;
  if(!document.body.classList.contains('home')){last=t;requestAnimationFrame(loop);return}
  const N=+gN.value,V=+gV.value;if(t-last>1800/N&&st.length<N*3){last=t;st.push({x:30+Math.random()*(W-60),y:-20,r:14+Math.random()*10,v:(.4+Math.random()*.7)*V*.45,c:C[n++%3]})}
  x.clearRect(0,0,W,H);
  st=st.filter(q=>(q.y+=q.v)<H+30);
  st.forEach(q=>{x.globalAlpha=.9;x.fillStyle=q.c;x.beginPath();x.arc(q.x,q.y,q.r,0,6.283);x.fill()});
  ps=ps.filter(p=>(p.l-=.03)>0);
  ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;x.globalAlpha=p.l;x.fillStyle=p.c;x.fillRect(p.x,p.y,4,4)});
  x.globalAlpha=1;requestAnimationFrame(loop);
 }
 requestAnimationFrame(loop);
}

/* ---------- інтерфейс уроків ---------- */
function renderNav(){
 let h='',last=-1;
 LESSONS.forEach((l,i)=>{
  if(MOD_OF[i]!==last){last=MOD_OF[i];h+='<div class="mod">'+MODS[last]+'</div>'}
  h+='<button class="li'+(done.includes(i)?' d':'')+'" data-i="'+i+'" aria-current="'+(i===cur)+'"><b>'+CHECK+'</b><span>Урок '+(i+1)+'. '+esc(l.t.split('.')[0])+'</span></button>';
 });
 h+='<div class="mod">Головна</div><button class="li bn" data-home="1"><b>'+STAR+'</b><span>Бонус і програма курсу</span></button>';
 $('#nav').innerHTML=h;
 const p=Math.round(done.length/12*100);
 $('#pct').textContent=p+'%';$('#cnt').textContent=done.length+' / 12';
 $('#pbar').firstElementChild.style.width=p+'%';$('#pbar').setAttribute('aria-valuenow',p);
}
/* ---------- Автоперевірка вимог «Перевір себе» ----------
   Для кожного уроку — правила в тому ж порядку, що й пункти вимог.
   null — учень відмічає сам; функція отримує x = {h, c, j, doc}:
   h/c/j — HTML, CSS і JS учня без коментарів, doc — розібрана сторінка. */
const has=(s,re)=>re.test(s);
const AUTO={
 0:[x=>/<!doctype html>/i.test(x.h)&&/<html[\s>]/i.test(x.h)&&/<head[\s>]/i.test(x.h)&&/<body[\s>]/i.test(x.h),
    x=>{const e=x.doc.querySelector('h1');return !!e&&!!e.textContent.trim()},
    x=>[...x.doc.querySelectorAll('p')].filter(p=>p.textContent.trim()).length>=2,
    x=>!!x.doc.querySelector('strong,b'),
    x=>x.doc.title.trim().length>0,
    null],
 1:[x=>{const li=x.doc.querySelectorAll('ol li');return li.length>=5&&[...li].every(l=>l.querySelector('a[href]'))},
    x=>[...x.doc.querySelectorAll('img')].filter(i=>(i.getAttribute('alt')||'').trim()).length>=2,
    x=>!!x.doc.querySelector('h1,h2')&&!!x.doc.querySelector('p')],
 2:[x=>!!x.doc.querySelector('input[type=email]')&&x.doc.querySelectorAll('select').length>=2&&!!x.doc.querySelector('input:not([type]),input[type=text]'),
    x=>{const f=[...x.doc.querySelectorAll('input:not([type=submit]):not([type=button]):not([type=reset]),select,textarea')];return f.length>=3&&f.every(e=>e.hasAttribute('required'))},
    x=>[...x.doc.querySelectorAll('button,input[type=submit]')].some(b=>/зареєструватися/i.test(b.textContent||b.value||'')),
    x=>x.doc.querySelectorAll('table tr').length>=3],
 3:[()=>true,
    x=>has(x.c,/(^|[;{\s])color\s*:/)&&has(x.c,/font-family\s*:/),
    x=>has(x.c,/background(-color)?\s*:/),
    x=>[...x.c.matchAll(/\.([a-zA-Z_][\w-]*)[^{};]*\{/g)].some(m=>{try{return !!x.doc.querySelector('.'+CSS.escape(m[1]))}catch(e){return false}}),
    x=>has(x.c,/(^|[}\s,])p\b[^{}]*\{[^}]*\b(margin|padding|line-height)/)],
 4:[x=>['width','padding','border','border-radius'].every(p=>new RegExp('(^|[;{\\s])'+p+'\\s*:').test(x.c)),
    x=>has(x.c,/margin\s*:[^;}]*auto/),
    x=>has(x.c,/box-shadow\s*:/),
    x=>has(x.c,/box-sizing\s*:/)],
 5:[x=>has(x.c,/display\s*:\s*flex/)&&has(x.c,/\bgap\s*:/),
    x=>{const n={};x.doc.body&&x.doc.body.querySelectorAll('[class]').forEach(e=>e.classList.forEach(k=>n[k]=(n[k]||0)+1));return Object.values(n).some(v=>v>=4)},
    x=>has(x.c,/flex-wrap\s*:\s*wrap|flex-flow\s*:[^;}]*wrap/)],
 6:[x=>has(x.c,/:hover/)&&has(x.c,/transition\s*:/)&&has(x.c,/transform\s*:/),
    x=>has(x.c,/@keyframes/),
    x=>has(x.c,/@media[^{]*max-width\s*:\s*768px/)],
 7:[x=>has(x.j,/prompt\s*\(/),
    x=>has(x.j,/(let|const|var)\s+\w+\s*=\s*prompt\s*\(/),
    x=>has(x.j,/\.textContent\s*=/)],
 8:[x=>has(x.j,/classList\.(toggle|add|remove)\(\s*["']dark["']/),
    x=>has(x.c,/\.dark\b[^{]*\{/),
    x=>has(x.j,/\.textContent\s*=/)&&has(x.j,/\?|\bif\s*\(/)],
 9:[x=>has(x.j,/<\s*1\b|>\s*100\b|<=\s*0\b|>=\s*101\b/),
    x=>has(x.j,/Більше/i)&&has(x.j,/Менше/i),
    x=>has(x.j,/вгадав|перемог|правильно/i)],
 10:[x=>has(x.j,/\.value/)&&has(x.j,/appendChild|\.append\(|insertAdjacentHTML|innerHTML\s*\+=/),
     x=>has(x.j,/\.remove\(\)|removeChild|splice/),
     x=>has(x.j,/\.trim\(\)/)&&has(x.j,/===?\s*["']["']|!\s*\w+\s*\)|\.length\s*===?\s*0|!\s*\w+\.trim\(\)/)],
 11:[x=>has(x.j,/\b10\b/)&&has(x.j,/setInterval|setTimeout/),
     x=>has(x.j,/if\s*\(\s*!?\s*\w*(running|playing|active|started|game|play|isOn)/i),
     x=>has(x.j,/clearInterval/)]
};
const stripC=s=>s.replace(/\/\*[\s\S]*?\*\//g,'');
const stripJ=s=>s.replace(/\/\*[\s\S]*?\*\//g,'').replace(/(^|[^:"'\\])\/\/[^\n]*/g,'$1');
const stripH=s=>s.replace(/<!--[\s\S]*?-->/g,'');

const isBonus=x=>/^\s*Бонус/i.test(String(x));
let chkAll=false,chkT=0;
const AUTO_ICON='<svg class="ai" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 3L5 13.5h6L10 21l8-10.5h-6z"/></svg>';
function checkCtx(){
 let h=getCode(cur,'h');const inl=(re)=>[...h.matchAll(re)].map(m=>m[1]).join('\n');
 const c=stripC(getCode(cur,'c')+'\n'+inl(/<style[^>]*>([\s\S]*?)<\/style>/gi)),j=stripJ(getCode(cur,'j')+'\n'+inl(/<script[^>]*>([\s\S]*?)<\/script>/gi));
 h=stripH(h);let doc;try{doc=new DOMParser().parseFromString(h,'text/html')}catch(e){doc=document.implementation.createHTMLDocument('')}
 return {h,c,j,doc};
}
function evalChecks(fromEdit){
 if(shared||!$('#lesson .chk'))return;
 flushSave();
 const l=LESSONS[cur],rules=AUTO[cur]||[],man=store.get('chk:'+cur,[]);let x=null,all=true;
 l.ok.forEach((o,i)=>{
  let a=false;if(rules[i]){x=x||checkCtx();try{a=!!rules[i](x)}catch(e){a=false}}
  const on=a||man.includes(i),el=$('#lesson .chk input[data-c="'+i+'"]');if(el)el.checked=on;
  if(!isBonus(o)&&!on)all=false;
 });
 if(fromEdit&&all&&!chkAll&&!done.includes(cur)){done=done.concat(cur);store.set('done',done);renderNav();
  const m=$('#mark');if(m){m.classList.add('done');m.setAttribute('aria-pressed','true');m.textContent='Виконано'}
  toast('Усі вимоги виконано — урок завершено!')}
 chkAll=all;
}
function renderLesson(){
 const l=LESSONS[cur],d=done.includes(cur),chk=store.get('chk:'+cur,[]);
 $('#lesson').innerHTML=
 '<div class="lp" id="p-th" role="tabpanel" aria-labelledby="t-th">'+
 '<div class="card"><h2 class="t">Урок '+(cur+1)+'. '+esc(l.t)+'</h2></div>'+
 '<div class="card"><h2>Теорія</h2>'+l.th+'</div>'+
 '<div class="card"><h2>Команди та теги</h2>'+l.cm.map(c=>'<div class="cmd"><code>'+esc(c[0])+'</code><span>'+esc(c[1])+'</span></div>').join('')+'</div>'+
 '<div class="card"><h2>Приклад коду</h2><pre><code>'+esc(l.ex)+'</code></pre></div>'+
 '<button class="btn pr tonext" id="toTask">До завдання →</button></div>'+
 '<div class="lp" id="p-tk" role="tabpanel" aria-labelledby="t-tk">'+
 '<div class="card task"><h2>Урок '+(cur+1)+'. Практичне завдання</h2><p><b>'+esc(l.task)+'</b></p><h3 class="sub">Вимоги</h3><ul class="chk">'+
  l.ok.map((x,i)=>'<li'+((AUTO[cur]||[])[i]?' title="Перевіряється автоматично"':'')+'><label><input type="checkbox" data-c="'+i+'"'+(chk.includes(i)?' checked':'')+'><span>'+esc(x)+((AUTO[cur]||[])[i]?AUTO_ICON:'')+'</span></label></li>').join('')+'</ul>'+
 (cur===0?'<button class="btn pr" id="cpbp">Копіювати HTML-структуру</button>':'')+'</div>'+(cur===11?'<div class="qs">'+QUESTS.map(q=>qcard(Object.assign({},q,{d:'Перевір себе: '+q.d}))).join('')+'</div>'+PROMO:'')+
 '<div class="nav"><button class="btn" id="prev"'+(cur?'':' disabled')+'>← Назад</button><span class="sp"></span>'+
 '<button class="btn'+(d?' done':'')+'" id="mark" aria-pressed="'+d+'">'+(d?'Виконано':'Завершити')+'</button>'+
 '<button class="btn pr" id="next">'+(cur===11?'На головну →':'Далі →')+'</button></div></div>';
 setTab(tabs[cur]||'th',true);
 $('#toTask').onclick=()=>setTab('tk');
 $('#prev').onclick=()=>go(cur-1);$('#next').onclick=()=>cur===11?showHome():go(cur+1);
 $('#mark').onclick=()=>{done=done.includes(cur)?done.filter(x=>x!==cur):done.concat(cur);store.set('done',done);renderNav();renderLesson();toast(done.includes(cur)?'Урок завершено':'Позначку знято')};
 $('#lesson .chk').onchange=e=>{const c=+e.target.dataset.c;let a=store.get('chk:'+cur,[]);a=e.target.checked?a.concat(c):a.filter(x=>x!==c);store.set('chk:'+cur,a);evalChecks(true)};
 chkAll=false;setTimeout(()=>evalChecks(false),0);
 if(cur===0)$('#cpbp').onclick=()=>copyText(BP).then(()=>toast('Структуру скопійовано'),()=>toast('Не вдалося скопіювати'));
}
function go(i){if(i<0||i>11)return;cur=i;store.set('cur',i);lang='h';renderNav();renderLesson();loadEditor();preview();closeMenu();window.scrollTo(0,0)}
$('#nav').onclick=e=>{const b=e.target.closest('.li');if(!b)return;if(b.dataset.home){closeMenu();showHome()}else go(+b.dataset.i)};

/* ---------- вкладки «Теорія | Завдання» ---------- */
const tabs=store.get('ltab',{}),tpos={};let ltab='th';
function setTab(t,fresh){
 const lw=$('#lw');
 if(!fresh)tpos[ltab]=lw.scrollTop;
 ltab=t;tabs[cur]=t;store.set('ltab',tabs);
 document.querySelectorAll('#ltabs .tab').forEach(b=>{const on=b.dataset.t===t;b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1;b.innerHTML=(b.dataset.t==='th'?'Теорія':'Завдання')+(b.dataset.t==='tk'&&done.includes(cur)?'<i aria-label="виконано"></i>':'')});
 document.querySelectorAll('#lesson .lp').forEach(p=>p.hidden=p.id!=='p-'+t);
 if(fresh){tpos.th=tpos.tk=0}
 if(matchMedia('(max-width:1100px)').matches){if(!fresh){const y=lw.getBoundingClientRect().top+scrollY-56;if(scrollY>y)scrollTo(0,y)}}
 else lw.scrollTop=tpos[t]||0;
}
$('#ltabs').onclick=e=>{const b=e.target.closest('.tab');if(b&&b.dataset.t!==ltab)setTab(b.dataset.t)};
$('#ltabs').onkeydown=e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();setTab(ltab==='th'?'tk':'th');$('#t-'+ltab).focus()}};

/* ---------- головна сторінка ---------- */
$('#promoHome').outerHTML=PROMO;
$('#qlist').innerHTML=QUESTS.map(qcard).join('');
function renderHome(){
 const started=done.length>0||cur>0;
 $('#startTx').textContent=started?'Продовжити: урок '+(cur+1):'Почати навчання';
 const p=Math.round(done.length/12*100);
 $('#hpr').hidden=!done.length;$('#hprTx').textContent='Пройдено '+done.length+' з 12 уроків';$('#hprBar').style.width=p+'%';
 $('#mods').innerHTML=MODS.map((m,k)=>{
  const ls=LESSONS.map((l,i)=>[l,i]).filter(x=>MOD_OF[x[1]]===k);
  const [t,s]=m.split(' — ');
  return '<div class="card mds"><span class="mn">Модуль '+(k+1)+' · '+ls.length+(ls.length>4?' уроків':' уроки')+'</span><h4>'+esc(t)+' — '+esc(s)+'</h4>'+
   ls.map(([l,i])=>'<button class="ml'+(done.includes(i)?' d':'')+'" data-i="'+i+'"><b>'+(done.includes(i)?CHECK:(i+1))+'</b><span>'+esc(l.t.split('.')[0])+'</span></button>').join('')+'</div>';
 }).join('');
}
const isCourse=()=>location.hash==='#course';
let homeSeen=false;
function route(){
 if(location.hash.startsWith('#s=')){openShared(location.hash.slice(3));return}
 if(shared){shared=null;document.body.classList.remove('sv');ta.readOnly=false;go(cur)}
 const c=isCourse();
 document.body.classList.toggle('home',!c);
 snowSync();
 if(!c){renderHome();if(!homeSeen){homeSeen=true;setTimeout(()=>$('.art').classList.add('done'),3800)}}
 window.scrollTo(0,0);
}
function openCourse(i){if(i!==undefined&&i!==cur)go(i);if(isCourse())route();else location.hash='course'}
function showHome(){if(isCourse()||shared)history.pushState(null,'',location.pathname+location.search);route()}
$('#start').onclick=()=>openCourse();
$('#mods').onclick=e=>{const b=e.target.closest('.ml');if(b)openCourse(+b.dataset.i)};
$('#toProg').onclick=e=>{e.preventDefault();$('#program').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})};
$('#logo').onclick=showHome;$('#homeBtn').onclick=showHome;$('#navHome').onclick=()=>{closeMenu();showHome()};
addEventListener('popstate',route);addEventListener('hashchange',route);
$('#bonus').innerHTML=bonusHtml();bonusGame();
function closeMenu(){$('#side').classList.remove('open');$('#menu').setAttribute('aria-expanded','false')}
const ui=store.get('ui',{});
function applyUI(){
 [['lw','lw'],['ed','p-ed'],['pv','p-pv']].forEach(([k,id])=>{
  $('#'+id).classList.remove('shut');
 });
 $('main').classList.toggle('nol',!!ui.lw);
 $('.app').classList.toggle('noside',!!ui.side);
}
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('.cv');if(!b)return;ui[b.dataset.k]=!ui[b.dataset.k];store.set('ui',ui);applyUI()});
$('#menu').onclick=()=>{
 if(matchMedia('(max-width:1100px)').matches){const o=$('#side').classList.toggle('open');$('#menu').setAttribute('aria-expanded',o)}
 else{ui.side=!ui.side;store.set('ui',ui);applyUI();$('#menu').setAttribute('aria-expanded',!ui.side)}
};
const modal=$('#modal');
function openInfo(){modal.hidden=false;$('#mclose').focus()}
function closeInfo(){modal.hidden=true;$('#info').focus()}
const rz=$('#rz'),mainEl=$('main');
function setLc(w){const m=mainEl.getBoundingClientRect().width-32-10-12-340;w=Math.max(280,Math.min(w,m));mainEl.style.setProperty('--lc',w+'px');ui.lc=w}
rz.onpointerdown=e=>{
 rz.setPointerCapture(e.pointerId);document.body.classList.add('drag');
 const mv=ev=>setLc(ev.clientX-mainEl.getBoundingClientRect().left-19);
 const up=()=>{rz.removeEventListener('pointermove',mv);rz.removeEventListener('pointerup',up);document.body.classList.remove('drag');store.set('ui',ui)};
 rz.addEventListener('pointermove',mv);rz.addEventListener('pointerup',up);
};
rz.onkeydown=e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();setLc($('#lw').getBoundingClientRect().width+(e.key==='ArrowRight'?24:-24));store.set('ui',ui)}};
rz.ondblclick=()=>{mainEl.style.removeProperty('--lc');delete ui.lc;store.set('ui',ui)};
/* ---------- прогрес: файл і шкільний режим ---------- */
$('#schB').hidden=!SCH;$('#schB').onclick=()=>openInfo();
$('#acT').checked=AC.on;$('#acT').onchange=e=>{AC.on=e.target.checked};
$('#schT').checked=SCH;
$('#schT').onchange=e=>{try{if(e.target.checked){localStorage.setItem(SKEY,'1');wipe(localStorage)}else localStorage.removeItem(SKEY)}catch(x){}location.reload()};
$('#pSave').onclick=()=>{
 const data={};keysOf(ST).forEach(k=>{data[k.slice(K.length)]=ST.getItem(k)});
 const d=new Date(),dt=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
 const b=new Blob([JSON.stringify({app:K,v:1,d:Date.now(),data})],{type:'application/json'});
 const l=document.createElement('a');l.href=URL.createObjectURL(b);l.download='learn-web-progres-'+dt+'.json';
 document.body.appendChild(l);l.click();l.remove();setTimeout(()=>URL.revokeObjectURL(l.href),1000);toast('Прогрес збережено у файл');
};
$('#pLoad').onclick=()=>$('#pFile').click();
$('#pFile').onchange=e=>{const f=e.target.files[0];e.target.value='';if(!f)return;
 f.text().then(t=>{const j=JSON.parse(t);if(!j||j.app!==K||typeof j.data!=='object')throw 0;
  wipe(ST);Object.keys(j.data).forEach(k=>{try{ST.setItem(K+k,String(j.data[k]))}catch(x){}});location.reload()})
 .catch(()=>toast('Це не файл прогресу цього курсу'));
};
$('#info').onclick=openInfo;$('#mclose').onclick=closeInfo;modal.onclick=e=>{if(e.target===modal)closeInfo()};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();if(!modal.hidden)closeInfo();if(!shm.hidden)closeShare()}});

/* ---------- здача роботи посиланням ---------- */
const b64u=u=>{let s='';for(let i=0;i<u.length;i+=8192)s+=String.fromCharCode.apply(null,u.subarray(i,i+8192));return btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')};
const ub64=s=>{s=s.replace(/-/g,'+').replace(/_/g,'/');const b=atob(s+'==='.slice((s.length+3)%4));const u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u};
const pipe=(u,t)=>new Response(new Blob([u]).stream().pipeThrough(t)).arrayBuffer().then(b=>new Uint8Array(b));
async function pack(o){
 const u=new TextEncoder().encode(JSON.stringify(o));
 if(window.CompressionStream){try{return '1'+b64u(await pipe(u,new CompressionStream('deflate-raw')))}catch(e){}}
 return '0'+b64u(u);
}
async function unpack(s){
 let u=ub64(decodeURIComponent(s.slice(1)));
 if(s[0]==='1'){if(!window.DecompressionStream)throw new Error('old');u=await pipe(u,new DecompressionStream('deflate-raw'))}
 return JSON.parse(new TextDecoder().decode(u));
}
const shm=$('#shm');
function openShare(){
 $('#shl').textContent='Урок '+(cur+1)+'. '+LESSONS[cur].t.split('.')[0];
 $('#shn').value=store.get('name','');$('#shres').hidden=true;shm.hidden=false;$('#shn').focus();
}
function closeShare(){shm.hidden=true;$('#share').focus()}
const mm=$('#mm'),moreB=$('#more');
function closeMore(){mm.hidden=true;moreB.setAttribute('aria-expanded','false')}
moreB.onclick=e=>{e.stopPropagation();mm.hidden=!mm.hidden;moreB.setAttribute('aria-expanded',!mm.hidden);if(!mm.hidden)mm.querySelector('.mi').focus()};
mm.addEventListener('click',()=>closeMore());
document.addEventListener('click',e=>{if(!mm.hidden&&!e.target.closest('.more'))closeMore()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mm.hidden){closeMore();moreB.focus()}});
$('#share').onclick=openShare;$('#shclose').onclick=closeShare;shm.onclick=e=>{if(e.target===shm)closeShare()};
$('#shn').oninput=()=>{$('#shres').hidden=true};
$('#shn').onkeydown=e=>{if(e.key==='Enter')$('#shgo').click()};
$('#shgo').onclick=async()=>{
 const n=$('#shn').value.trim().replace(/\s+/g,' ');
 if(n.length<3){toast('Введи прізвище та ім\'я');$('#shn').focus();return}
 store.set('name',n);
 const o={n,l:cur,d:Date.now(),h:getCode(cur,'h'),c:getCode(cur,'c'),j:getCode(cur,'j')};
 const url=location.origin+location.pathname+'#s='+await pack(o);
 $('#shu').value=url;$('#shres').hidden=false;$('#shu').select();
};
$('#shcp').onclick=()=>copyText($('#shu').value).then(()=>toast('Посилання скопійовано'),()=>{$('#shu').select();toast('Скопіюй вручну: Ctrl+C')});

async function openShared(s){
 let o;
 try{o=await unpack(s);if(!(Number.isInteger(o.l)&&o.l>=0&&o.l<=11))throw 0}
 catch(e){toast(e&&e.message==='old'?'Онови браузер, щоб відкрити роботу':'Посилання пошкоджене');history.replaceState(null,'',location.pathname+location.search);route();return}
 shared={n:String(o.n||'Без імені').slice(0,60),l:o.l,d:o.d,h:String(o.h||''),c:String(o.c||''),j:String(o.j||'')};
 document.body.classList.remove('home');document.body.classList.add('sv');snowSync();closeMenu();
 ta.readOnly=true;lang='h';renderShared();loadEditor();preview();window.scrollTo(0,0);
}
function renderShared(){
 const l=LESSONS[shared.l],dt=shared.d?new Date(shared.d).toLocaleString('uk-UA',{day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'}):'';
 $('#lesson').innerHTML='<div class="card svh"><span class="meta">Робота учня</span><div class="who">'+esc(shared.n)+'</div><div class="meta">Урок '+(shared.l+1)+'. '+esc(l.t.split('.')[0])+(dt?' · '+dt:'')+'</div>'+
 '<div class="acts"><button class="btn pr" id="svEd">Відкрити в редакторі</button><button class="btn" id="svX">Закрити перегляд</button></div></div>'+
 '<div class="card task"><h2>Практичне завдання</h2><p><b>'+esc(l.task)+'</b></p><ul>'+l.ok.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></div>';
 $('#lw').scrollTop=0;
 let armed=false;
 $('#svEd').onclick=e=>{
  if(!armed){armed=true;e.target.textContent='Замінити мій код уроку '+(shared.l+1)+'?';return}
  ['h','c','j'].forEach(k=>store.set(codeKey(shared.l,k),shared[k]));
  cur=shared.l;store.set('cur',cur);location.hash='course';
 };
 $('#svX').onclick=()=>{history.pushState(null,'',location.pathname+location.search);route()};
}
applyUI();if(ui.lc)setLc(ui.lc);go(cur);route();

/* ---------- Офлайн-режим (PWA) ---------- */
(()=>{
 if(!('serviceWorker' in navigator)||!/^https?:$/.test(location.protocol))return;
 const warm=reg=>{const w=reg&&(reg.active||reg.waiting||reg.installing);if(w&&navigator.onLine)w.postMessage({type:'warm'})};
 addEventListener('load',()=>{
  navigator.serviceWorker.register('sw.js',{updateViaCache:'none'})
   .then(()=>navigator.serviceWorker.ready).then(reg=>{
    warm(reg);
    addEventListener('online',()=>{reg.update().catch(()=>{});warm(reg)});
   }).catch(()=>{});
  try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist().catch(()=>{})}catch(e){}
 });
})();
/* ---------- Встановлення як застосунок ---------- */
(()=>{
 const ib=$('#instB'),go=$('#instGo'),sec=$('#instM'),insm=$('#insm');
 const ua=navigator.userAgent,
  ios=/iPhone|iPad|iPod/.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1),
  mac=!ios&&/Macintosh/.test(ua)&&/Safari/.test(ua)&&!/Chrome|Chromium|Edg|OPR|Firefox/.test(ua),
  ff=/Firefox|FxiOS/.test(ua),andr=/Android/.test(ua);
 const standalone=()=>matchMedia('(display-mode: standalone)').matches||matchMedia('(display-mode: window-controls-overlay)').matches||navigator.standalone===true;
 const ok=/^https?:$/.test(location.protocol);
 let dp=null;
 const ic=d=>'<span class="ki"><svg viewBox="0 0 24 24">'+d+'</svg></span>';
 const SH=ic('<path d="M12 3v12M8 7l4-4 4 4M6 11H5v10h14V11h-1"/>'),PL=ic('<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8 12h8"/>'),DOT=ic('<path d="M12 6h.01M12 12h.01M12 18h.01"/>');
 function help(){
  let h;
  if(ios)h='<p>У Safari на iPhone чи iPad:</p><ol><li>Натисни '+SH+' <b>Поділитися</b> внизу або вгорі екрана.</li><li>Обери '+PL+' <b>На екран «Додому»</b> (прогорни список донизу).</li><li>Натисни <b>Додати</b>.</li></ol>';
  else if(mac)h='<p>У Safari на Mac:</p><ol><li>Відкрий меню <b>Файл</b> або натисни '+SH+' <b>Поділитися</b>.</li><li>Обери <b>Додати в Dock</b>.</li></ol>';
  else if(ff&&!andr)h='<p>Firefox на комп\'ютері поки не вміє встановлювати сайти як застосунки. Відкрий курс у <b>Chrome</b> або <b>Edge</b> і натисни кнопку встановлення ще раз.</p>';
  else if(andr)h='<p>На Android:</p><ol><li>Відкрий меню браузера '+DOT+'.</li><li>Обери <b>Додати на головний екран</b> або <b>Встановити застосунок</b>.</li></ol>';
  else h='<p>У Chrome або Edge:</p><ol><li>Натисни значок встановлення праворуч в адресному рядку або відкрий меню '+DOT+'.</li><li>Обери <b>Встановити «Веб-програмування»</b> (в Edge: <b>Застосунки → Установити цей сайт як застосунок</b>).</li></ol>';
  $('#insBody').innerHTML=h;
 }
 function openHelp(){help();if(!modal.hidden)modal.hidden=true;insm.hidden=false;$('#insclose').focus()}
 function closeHelp(){insm.hidden=true;(ib.hidden?$('#info'):ib).focus()}
 function sync(){
  const inst=standalone();
  sec.hidden=inst||!ok;
  ib.hidden=inst||!ok||!(dp||ios);
 }
 async function install(){
  if(!dp){openHelp();return}
  const p=dp;dp=null;p.prompt();
  try{const r=await p.userChoice;if(r&&r.outcome==='accepted'){modal.hidden=true}}catch(e){}
  sync();
 }
 ib.onclick=install;go.onclick=install;
 $('#insclose').onclick=closeHelp;insm.onclick=e=>{if(e.target===insm)closeHelp()};
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!insm.hidden)closeHelp()});
 addEventListener('beforeinstallprompt',e=>{e.preventDefault();dp=e;sync()});
 addEventListener('appinstalled',()=>{dp=null;modal.hidden=true;insm.hidden=true;sync();toast('Застосунок встановлено')});
 matchMedia('(display-mode: standalone)').addEventListener?.('change',sync);
 sync();
})();
