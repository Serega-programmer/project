"use strict";



const obj = {
    name: `John`,
    age: 25,
    isMarried: false
};
console.log(obj);

const arr = [1, 2, {}, []];
console.log(arr[2]);

const storeName = `Belka`;
const storeDescription = {
    budget: 10000,
    employes: [`Alex`, `Adam`, `Nik`],
    progucts: {
        "butter": 100,
        "bread": 50
    },
    open: true
};
console.log(storeDescription);
console.log(storeName);

const result = confirm(`Are you here?`);
console.log(result);

const answer = +prompt(`Вам есть 18?`, `18`);
console.log(answer + 5);