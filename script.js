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
    age:25 ,
    ismarried: false
};
console.log(obj.name);
            // 0               1           2
// let arr = ["plum.png", "orange.jpg", 6];
// console.log(arr[1]); - вывод массива в результат (задаем цифру 1, т.к. нумерация начинается с нуля).Ответ: orange.jpg

const answers = [];
answers [0] = prompt("Как ваше имя?", "");
answers [1] = prompt("Как ваша фамилия?", "");
answers [2] = prompt("Сколько вам лет?", "");
// console.log(answers);
document.write(answers);

// п.15 Операторы в JS: сложение, вычитание, умножение, деление
console.log("arr"+ "-object");
console.log(4+ "5");

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
        console.log(2+2*2 !=`6`);

        // п.14 Интерполяция (ES6)

        // const category = "toys";
        // console.log("https://someurl.com/" +category); - при использовании двойных и одинарных кавычек
        const category = "toys";
         console.log(`https://someurl.com/${category}/5`);

        //  Пример: в браузере - результат Привет, Serega. Т.о. можно подставлять значения из любой БД.
        const user = "Serega";
        alert(`Привет, ${user}`);

<<<<<<< HEAD
        // п.20 УСЛОВИЯ
         if(4==4) {
            console.log(`Ok!`);
         }
         if(4==5) {
            console.log(`OK`);
         } else {
            console.log(`Error`);
         }
        
        //  Создадим переменную num=50
        // const num=50
        // if(num<49){
        // console.log(`Error`);
        // } else if(num>100) {
        //     console.log(`Много`);
        // } else {
        //     console.log(`Ok`);
        // }
        //     (num===50) ? console.log(`Ok`) : console.log(`Error`);

            const num = 50;
         switch (num) {
            case 49:
                console.log(`Неверно`);
                break;
                case 100:
                    console.log(`Неверно`);
                    break;
                    case 56:
                    console.log(`В точку!`);
                    break;
                    default:
                        console.log(`Не в этот раз`);
                    }
=======
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
      c = prompt("Один из последних просмотренных фильмов?", "" ),
      d = prompt("На сколько оцените его", "");
      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);

    //   п.20 УСЛОВИЯ
    if (4 == 4) {
        console.log("Ok!");
    }
>>>>>>> 2b289a0b2ed5d180871aed361c9d61bb79c3c8ed
