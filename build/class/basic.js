"use strict";
/*
Example of classes
 */
class Person {
    constructor(id, name, gender) {
        this.id = id;
        this.name = name;
        this.gender = gender;
    }
    greeting() {
        return `My name is ${this.name} and i'm a ${this.gender ? 'boy' : 'girl'}`;
    }
}
class Designer extends Person {
    constructor(id, name, gender, skills) {
        super(id, name, gender);
        this.skills = skills;
    }
}
let a = new Person(25, 'Ridho', true);
console.log(a.greeting());
