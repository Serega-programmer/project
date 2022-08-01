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
debugger;

if (4==4) {
    console.log(`OK!`);
    } else {
        console.log(`Error`);
    }

//     let num  = 50;
//     if(num < 49) {
//         console.log(`Не верно`);
//     } else if(num > 100) {
//        console.log(`Много`);
//     } else if (num = 50) {
// console.log(`В точку`);
//     } else {
//         console.log(`Не в этот раз`);

//     }

    const num = 50;
    switch (num) {
        case 49:
            console.log(`Не верно`);
            break;
            case 100:
                console.log(`Не верно`);
                break;
                case 51:
                    console.log(`Еще разок`);
                    default:
                        console.log(`Не в этот раз`);
    }