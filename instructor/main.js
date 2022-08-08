// REST PARAMETER (...)
// const sumUnlimitParams = (...numbers) => {
//   console.log(numbers);
//   console.log(numbers[0]);
//   return numbers.reduce((acc, item) => acc + item, 0);
// };
// sumUnlimitParams(2, 5, 7, 8); // numbers => [2, 5, 7, 8]

// const students = ['Bas', 'Dream', 'Wave', 'Ohm'];
// const newStudents = students.slice(0);
// newStudents.splice(2, 0, 'Tawan', 'Game');
// const genPerson = (firstName, lastName, ...hobbies) => {};

// genPerson('John', 'Doe', 'Sport', 'Music'); // firstName => 'John', lastName => 'Doe'
// hobbies => ['Sport', 'Music']

// A rest parameter must be last in a parameter list
// const genPerson1 = ( firstName,...hobbies, lastName ) => {}; // Error

// Lab 1
// function multiply(...nums) {
//   let result = 1;
//   for (let num of nums) {
//     result *= num;
//   }
//   return result;
// }

// const multiply = (...nums) => nums.reduce((acc, item) => acc * item, 1);
// console.log(multiply(4));

// Lab 2
// const filterOutOdds = (...nums) => nums.filter((cur) => cur % 2 == 0);
// console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 11, 22, 33, 22, 1213, 4, 5));

// const filterOutOdds = (...numbers) => {
//   return numbers.reduce(function (acc, item) {
//     if (item % 2 == 0) {
//       acc.push(item);
//     }
//     return acc;
//   }, []);
// };
// console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 22));

// Lab 3
// const mergeObjects = (...objs) => {
//   let reObj = objs.reverse();
//   let newObj = {};

//   newObj = reObj.reduce((acc, item) => {
//     Object.assign(acc, item);
//     return acc;
//   }, {});

//   return newObj; //?
// };

// const obj1 = { num1: 1 };
// const obj2 = {
//   num2: 2,
//   num3: 3,
//   num1: 4
// };
// mergeObjects(obj1, obj2);

// SPREAD OPERATOR (...)
// const arr = [3, 7, 2];
// ...arr => 3, 7, 2
// Math.max(...arr); // Math.max(3, 7, 2)
// const newArr = [...arr]; // [3, 7, 2]

// const firstName = 'John';
// ...firstName => 'J', 'o', 'h', 'n'
// const fNameArr = [...firstName];
// console.log(fNameArr);

// const set = new Set([5, 7, 7, 5, 6]); // {5, 7, 6} , ...set => 5, 7, 6
// console.log(set);
// console.log([...set]);

// CLONE ARRAY
// const arr = [3, 7, 2];
// const clone = [...arr];
// // CONCAT ARRAY
// const a = [4, 5]; // ...a => 4, 5
// const b = [2, 7]; // ...b => 2, 7
// // const c = a.concat(b); // [4, 5, 2, 7]
// const c = [...a, ...b];
// const d = [...a, 0, ...b];

// OBJECT SPREAD
// CLONE OBJECT
// const product = { name: 'Pepsi', price: 20 };
// // ...product => name: 'Pepsi', price: 20
// const clone = { ...product }; // { name: 'Pepsi', price: 20  }
// console.log(clone);

// MERGE OBJECT
// const product = { name: 'Pepsi', price: 20 };
// const description = { description: 'Pepsi is the best', price: 30 };
// Object.assign(product, description);
// // { name: 'Pepsi', price: 30, description: 'Pepsi is the best' };
// Object.assign(description, product);
// // { name: 'Pepsi', price: 20, description: 'Pepsi is the best' };
// const mergeObj = { ...product, ...description };
// // { name: 'Pepsi', price: 30, description: 'Pepsi is the best' }
