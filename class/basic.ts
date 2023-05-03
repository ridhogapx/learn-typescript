/*
Example of classes
 */

class Person {
	id: number;
	name: string;
	isMale: boolean;

	constructor(i: number, n: string, gender: boolean) {
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