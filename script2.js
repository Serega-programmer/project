"use strict";

const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);

const str = "TEST";
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("it"));

const logg = "Hello world";
console.log(logg.substr(6,5));

const test = "12.2px";
console.log(parseFloat(test));

const answer = 10;
console.log(typeof(answer));


   const arr = [1,3,4,56,7,8];
   console.log (arr.length);

function sayHello(name) {
    return "Привет, ${name}";
}
sayHello ("Alex");

