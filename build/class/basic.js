"use strict";
/*
Example of classes
 */
class Person {
    constructor(i, n, gender) {
        this.id = i;
        this.name = n;
        this.isMale = gender;
    }
    greeting() {
        return `My name is ${this.name} and i'm a ${this.isMale ? 'boy' : 'girl'}`;
    }
}
let a = new Person(25, 'Ridho', true);
console.log(a.greeting());
