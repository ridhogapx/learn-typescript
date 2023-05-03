"use strict";
const greeting = (person) => {
    return `Konnichiwa, ${person}`;
};
const myNum = (a, b) => {
    if (b) {
        return a + b;
    }
    else {
        return a;
    }
};
const noReturn = (param) => {
    console.log(param);
};
const example = (element) => {
    // Return nothing
};
// Declare function, but not define it
let sayHello;
sayHello = (name) => {
    console.log(`Hello, ${name}`);
};
console.log(greeting('Galih'));
console.log(myNum(20, 5));
sayHello("Risu");
