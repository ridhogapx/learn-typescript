/*
Declare a variable called person with a specific object type annotation
 */

 let student: {
 	name: string;
 	major:	string;
 	nis: number;
 	isMale: boolean;
 }

/*
Object properties data type must be match
 */
 student = {
 	name: 'Ridho Galih Pambudi',
 	major: 'Computer Networking',
 	nis: 12006,
 	isMale: true
 	// isMale: 'laki-laki' --> This will gave you error
 }
