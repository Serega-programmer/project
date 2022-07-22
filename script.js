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

// п.24 ФУНКЦИИ, СТРЕЛОЧНЫЕ ФУНКЦИИ (ES6)

let num = 20;
function showFirstMessage(text) {
    console.log(text);
    // let num = 10;
    console.log(num);
}
showFirstMessage("Hello world!");
console.log(num);

console.log(calc(4,3));
console.log(calc(5,6));
console.log(calc(10,6));

function calc(a,b) {
return(a+b);
}

const logger = function () {
    console.log("Hello");
};
logger();
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
if (hamburger===3 && cola===2 || fries===3 && nuggets) {
    console.log(`Все довольны`);
} else {
    console.log(`Мы уходим`);
}
console.log(hamburger===3 && cola===2 || fries===3 && nuggets);

console.log(hamburger===3 && cola===2 || fries===3 && nuggets);

// п.31 Callback-функции

function first() {
    // Do something
    setTimeout(function() {
        console.log (1);
    }, 500);
}

function second () {
    console.log(2);
}
first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
function done () {
    console.log(`Я прошел это урок`);
}
learnJS(`Javascript`, done);
