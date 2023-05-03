/*
When defining signature of an object, you can use an interface.
This is useful if we need to check that multiple objects have the same
specific properties and value types.
It's like 'inheritance' in OOP Javascript
 */

 interface Student {
 	name: string;
 	major:	string;
 	nis: number;
 	isProgrammer: boolean;
 }

let student_a: Student = {
	name: 'Nurrohman Marduki',
	major: 'Informatics / Computer Science',
	nis: 123456,
	isProgrammer: true,
}

let student_b: Student = {
	name: 'Gions Freekley',
	major: 'Computer Networking',
	nis: 696969,
	isProgrammer: false,
}

