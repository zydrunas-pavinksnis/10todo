"use strict";

/*
TODO darba aprasancio objekto savybes:
- description
- created_on
- deadline
- status: todo, in-progress, done
*/

let todo_list = [
    {
        description: 'Pasigaminti kavos',
        created_on: '2020-05-05 15:01',
        deadline: '2020-05-06 12:55',
        status: 'todo'
    },
    {
        description: 'Pravesti paskaita',
        created_on: '2020-05-05 15:02',
        deadline: '2020-05-06 13:00',
        status: 'todo'
    },
    {
        description: 'Pradeti generuoti paskaitos irasus',
        created_on: '2020-05-05 15:03',
        deadline: '2020-05-06 17:00',
        status: 'todo'
    }
];

for ( let i=0; i<todo_list.length; i++ ) {
    const todo = todo_list[i];
    const sentence = `Darbas kuri reikia padaryti yra "${todo.description}" ir ji reikia atlikti iki ${todo.deadline} siuo metu yra busenoje "${todo.status}".`;
    console.log( sentence );