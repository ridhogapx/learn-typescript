interface Profession {
	name: string;
	age: number;
	isMale: boolean;
}

function profile(person: Profession):void {
	console.log(`His name is ${person.name}. He's ${person.age}`);

}

profile({
	name: 'Ridho',
	age: 17,
	isMale: true
})

