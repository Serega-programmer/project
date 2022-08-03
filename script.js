"use strict";
// "use strict"; - надо всегда прописывать для работы с новым форматом!

// SECTION:2 ОСНОВЫ JAVASCRIPT

let number = 5;
const leftBorderWidth = 1;
number = 10;
console.log(number);
// Это правила и типы названия переменных (п.10)
// console.log (name);
// var name = "Ivan"; - устаревший тип перемнной (это команда работает), но  нет логики, т.к. console.log (name) вверху

// snake-case
// UPPER_SNAKE_CASE - обозначение константы, например: const COLOR_RED= "#F00";
// kebab_case
// PascalCase

// Числа let number = 4.6 - использовать только точку
//  console.log(4/0); - результат infiniti (хотя на 0 делить нельзя)
//  console.log("string" * 9); - результат NaN

// Запись строки const persone = "Alex"
// const persone = "Alex" - вместо букв могут быть цифры

// console.log(something);-результат null, т.к. something нигде не встречается в коде

//  let und;
// console.log(und); - результат underfind, т.к. в "коробке"und ничего не задано
const obj = {
    name: "John",
    age: 25,
    ismarried: false
};
console.log(obj.name);
// 0               1           2
// let arr = ["plum.png", "orange.jpg", 6];
// console.log(arr[1]); - вывод массива в результат (задаем цифру 1, т.к. нумерация начинается с нуля).Ответ: orange.jpg

const answers = [];
answers[0] = prompt("Как ваше имя?", "");
answers[1] = prompt("Как ваша фамилия?", "");
answers[2] = prompt("Сколько вам лет?", "");
// console.log(answers);
document.write(answers);

// п.15 Операторы в JS: сложение, вычитание, умножение, деление
console.log("arr" + "-object");
console.log(4 + "5");

let incr = 10,
    decr = 10;
// ++incr;
// --decr;
console.log(incr++);
console.log(decr--);

// console.log(2*4 === `8`); - результат false
// console.log(2*4 === 8); - результат true (8 без кавычек)

// & - и
// || - или
// const isChecked = true,
//       isClose = true;
//       console.log(isChecked && isClose); - результат true

//   const isChecked = true,
//   isClose = false;
//   console.log(isChecked && isClose); - результат false

const isChecked = false,
    isClose = false;
console.log(isChecked || !isClose);

//    ! - оператор отрицания (обращает true в false)
// != - знак неравенства
// при строгом сравнении == результат будет true
// при одном =, т.е. 6=6 - результат false (что строка, что нет)
console.log(2 + 2 * 2 != `6`);

// п.14 Интерполяция (ES6)

// const category = "toys";
// console.log("https://someurl.com/" +category); - при использовании двойных и одинарных кавычек
const category = "toys";
console.log(`https://someurl.com/${category}/5`);

//  Пример: в браузере - результат Привет, Serega. Т.о. можно подставлять значения из любой БД.
const user = "Serega";
alert(`Привет, ${user}`);

// Задание 1
const number0Films = prompt("Сколько фильмов вы уже посмотрели?", "");
// Задание 2
const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// Задание 3
const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его", ""),
    c = prompt("Один из последних просмотренных фильмов?", ""),
    d = prompt("На сколько оцените его", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

//   п.20 УСЛОВИЯ
if (4 == 9) {
    console.log("Ok!");
} else {
    console.log("Error");
}
// const num =50;
// if(num<49){
//     console.log(`Error`);
// } else if(num>100) {
//     console.log(`Много`);
// } else {
//     console.log(`Ok`);
// }
//  const num = 50
// Есть другой синтаксис записи условий: внедряем тернарный оператор(т.е. в его работе используются 3 аргумента)
//  1 аргумент   2 аргумент           3 аргумент
// num===50 ? console.log(`Ok!`) : console.log(`Error`);
//  const num = 50;
// (num===50) ? console.log(`Ok!`) : console.log(`Error`);

// Если модификаций if очень много, то их упрощаем  с помощью switch
const num = 50;
switch (num) {
    case 49:
        console.log(`Неверно`);
        // break - всегда идет после console.log!!!
        break;
    case 100:
        console.log(`Неверно`);
        break;
    case 50:
        console.log(`В точку!`);
        break;
    // Может case не выполнятся (если одно из условий не подошло), тогда используем default
    default:
        console.log(`Не в этот раз`);
}
// п.21 ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
// const hamburger = true;
// const fries = true;
// if (hamburger && fries) {
// console.log(`Я сыт`);
// }
// console.log((hamburger && fries));

// const hamburger = 2;
// const fries = 1;
// if (hamburger ===3 && fries) {
// console.log (`Все сыты`);
// } else {
//     console.log(`Мы уходим`);
// } -результат: Мы уходим

// const hamburger = 3;
// const fries = 1;
// const cola = 0;
// console.log(hamburger===3 && cola && fries);
// Результат 0, т.к. на cola все остановилось(а у const cola = 0), то и результат будет 0

// Это пример:
//  console.log(2 && 8);
// console.log(null && 25);
// console.log(23 && `hchd`);
// console.log( 0 && 10);
// Результат: 8, null, `hchd`, 0

// if (hamburger===3 && cola===1 && fries) {
//     console.log(`Все сыты`);
// } else {
//     console.log(`Мы уходим`);
// }console.log(hamburger===3 && cola===1 && fries);

// Оператор "или"
// const hamburger = 3;
// const fries = 0;
// const cola =0;
// if (hamburger || cola || fries) {
//     console.log(`Все довольны`);
// } else {
//     console.log(`Мы уходим`);
// }
// Результат : Все довольны. Т.е. оператор "или" перестает работать, 
// когда находит первое правдивое значение (остальная часть кода не читается)
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log(`Все довольны`);
} else {
    console.log(`Мы уходим`);
}
console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// п.31 Callback-функции

function first() {
    // Do something
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}
first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
function done() {
    console.log(`Я прошел это урок`);
}
learnJS(`Javascript`, done);

// п.32 ОБЪЕКТЫ, ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ (ES6)

const options = {
    name: `test`,
    width: 1024,
    heigth: 1024,
    colors: {
        border: `black`,
        bg: `red`
    },
    makeTest: function () {
        console.log("Test");
    }
};
options.makeTest();

const { border, bg } = options.colors;
console.log(border);


console.log(Object.keys(options));
// // console.log(options.name);

// // delete options.name;
// console.log(options);

// let counter = 0;

// for (let key in options) {
//     // if (typeof(options [key]) === `object`) {
//     //     for(let i in options[key]) {
//     //         console.log(`Свойство ${i} имеет значение ${options[key] [i]}`);
//             counter++;
//     //     }
//     //     } else {
//     //         counter++;
//     //         console.log(`Свойство ${key} имеет значение ${options[key]}`); 

// }
// // }
// console.log(counter++);

// п.33 МАССИВЫ И ПСЕВДОМАССИВЫ

const arr = [0, 1, 2, 3, 6, 8, 12, 14];
// arr.pop(); - удаляет последнее число в массиве
// arr.push(10);

// for (let i = 0; i< arr.length; i++) {
//     console.log(arr[i]); - 1 вариант перебора массива при добавлении/удалении чисел в нем
// }

// for (let value of arr) {
//     console.log(value); - 2 вариант перебора массива
// }

// arr.forEach (function (item, i, arr) {
//     console.log (`${i}: ${item} внутри массива ${arr} `);

// }); - 3 вариант переборки массива с помощью forEach

// 3-й метод массива: str.split(s)

const str = prompt("", "");
const products = str.split(",");
console.log(products);

// п.35  ПЕРЕДАЧА ДАННЫХ ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ, SPREAD

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};
// console.log(Object.assign(numbers, add));
// Cделаем копию
const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);

// Создание поверхностной копии в массиве

const oldArray = [`a`, `b`, `c`];
const newArray = oldArray.slice();

newArray[1] = `ФРАЗА`;

console.log(newArray);
console.log(oldArray);

// Оператор разворота: spread

const video = [`youtube`, `rutube`, `vimeo`],
    blogs = [`wordpress`, `mail`, `livejournal`],
    internet = [...video, ...blogs, `vk`, `facebook`];
console.log(internet);



const q = {
    one: 1,
    two: 2
};
const newObj = { ...q };

//   п.36 ОСНОВЫ ООП, ПРОТОТИПНО-ОРИЕНТИРОВАННОЕ ПРОГРАММИРОВАНИЕ

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello");
    }
};
const John = Object.create(soldier);
John.sayHello();

// п.38 ОТЛАВЛИВАЕМ ОШИБКИ В СВОЕМ КОДЕ ПРИ ПОМОЩИ КОНСОЛИ РАЗРАБОТЧИКА
// П. 39. ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ В JS
// 1-ый вариант:

console.log(String(null));
console.log(typeof(String(4)));

// 2-й вариант
// Конкатинация
let answ = +prompt("Hello world", "");

// 3-й вариант динамической типизации
// буллиновое значение

// 0, "", null, undefined, NaN - false

let switcher = null;
