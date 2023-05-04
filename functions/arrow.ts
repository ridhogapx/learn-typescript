const greeting = (person: string): string => {
	 return `Konnichiwa, ${person}`;
	
}

const myNum = (a: number, b?: number): number => {
	if(b) {
		return a + b;
	} else {
		return a;
	}
}

// Void is a function that return nothing;
const noReturn = (param: string):void => {
	console.log(param);
}

const example = (element: object): void => {
	// Return nothing
}

// Example callback
const tryCallback = (callback: () => void):void => {

}

// Declare function, but not define it
let sayHello: (name: string) => void;
sayHello = (name) => {
	console.log(`Hello, ${name}`);

}

console.log(greeting('Galih'));
console.log(myNum(20,5))
sayHello("Risu");

