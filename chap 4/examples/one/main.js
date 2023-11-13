// // let day1 = {
// //     squirrel : false,
// //     evemts: [ 'work', 'touched tree', 'pizza', 'running']
// // }
// // // console.log(day1.squirrel);
// // // console.log(day1.wolf);
// // // day1.wolf = false;
// // // console.log(day1.wolf);
// // // delete day1.squirrel;
// // // console.log(day1.squirrel);
// // // console.log(Object.keys({x : 0, y : 0, z : 2}));
// // console.log(Object.keys(day1));

// let objectA = {a : 1, b: 2}
// // Object.assign(objectA, {b: 3, c: 4})
// // console.log(objectA);
// // Object.values(objectA);
// Object.entries(objectA)
// console.log(objectA);
// let num = 23;
// console.log(typeof num);

// function favourite (question) {
//     console.log(`Hi dear, do you like ${question} programming language?`);
// }
// favourite('JavaScript');

// const countriesVisited = [ 'Nigeria', 'Japan', 'Austalia'];
// console.log(countriesVisited);
const studentNames = {
    student1: 'Sakina',
    student2: 'Brooks',
}
Object.defineProperty(studentNames, 'student3', {
    value: 'Glory',
})

Object.defineProperty(studentNames, 'student2', {value: 'Jason'},)

delete studentNames(student2)
console.log(studentNames);