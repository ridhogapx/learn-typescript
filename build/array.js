"use strict";
/*
You can specfied what data types in element array by simply adding ':'
Also, don't forget adding square bracket '[]' after declaring variable data type
*/
let names = ['Ridho', 'Galih', 'Pambudi']; //It can only contain strings
let noTogel = [5, 10, 23, 40]; // It can only contain numbers
let conditional = [true, false, false, true]; // it can only contain booleans
let books = [
    {
        title: 'Konosuba',
        type: 'Manga'
    },
    {
        title: 'Mahoutsukai no Yome',
        type: 'Light Novel'
    },
    {
        title: 'Yuru Yuri',
        type: 'Manga'
    },
    {
        title: 'Kimetsu no Yaiba',
        type: 'Manga'
    }
]; // It can only contain objects
/*
If you want array contains any data type, then you can  add any[] after declaring variable
This is simply turn back into plain / vanilla Javascript
*/
let something = ['Foo', true, 23];