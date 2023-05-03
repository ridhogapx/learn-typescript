/*
Example of classes
 */

class Person {
	constructor(readonly id: number, public name: string, readonly gender: boolean) {}

	greeting() {
		return `My name is ${this.name} and i'm a ${this.gender ? 'boy' : 'girl'}`;
	}
}

class Designer extends Person{
	private skills: string[];

	constructor(id: number, name: string, gender: boolean, skills: string[]) {
		super(id, name, gender );
		this.skills = skills;
	}
}

let a = new Person(25, 'Ridho', true);
console.log(a.greeting());