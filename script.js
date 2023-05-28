"use strict";

//// Clonlash - Nusxa olish

// let x = 10;
// let y = x;
// y = y + 5;
// console.log(x);
// console.log(y);

////------------------------------------------------------

// let isMarried = false;
// let isArray = isMarried;
// isArray = true;
// console.log(isMarried);
// console.log(isArray);

////------------------------------------------------------

// const number = {
//   x: 10,
//   y: 5,
// };
// const newNumber = number; // reference (havola)
// newNumber.x = 15;
// console.log(number);
// console.log(newNumber); // {x: 15, y: 5} {x: 15, y: 5}

////------------------------------------------------------

// function nusxaObj(obj) {
//   let objNusxa = {};
//   for (let key in obj) {
//     objNusxa[key] = obj[key];
//   }
//   return objNusxa;
// }
// const numbers = {
//   x: 20,
//   y: 8,
// };
// const newNumbers = nusxaObj(numbers);
// newNumbers.x = 30;
// console.log(newNumbers);
// console.log(numbers); // {x: 30, y: 8} {x: 20, y: 8}

////------------------------------------------------------

// function nusxaObj(obj) {
//   let objNusxa = {};
//   for (let key in obj) {
//     objNusxa[key] = obj[key];
//   }
//   return objNusxa;
// }
// const numbers = {
//   x: 20,
//   y: 8,
//   z: {
//     a: 1,
//     b: 2,
//   },
// };
// const newNumbers = nusxaObj(numbers);
// newNumbers.x = 30;
// newNumbers.z.a = 100;
// console.log(newNumbers); // {x: 30, y: 8, z: {…}}x: 30y: 8z: {a: 100, b: 2}[[Prototype]]: Object
// console.log(numbers); // {x: 20, y: 8, z: {…}}

////------------------------------------------------------

// const numbers = {
//   x: 20,
//   y: 8,
//   z: {
//     a: 1,
//     b: 2,
//   },
// };
// const newNumbers = Object.assign({}, numbers);
// newNumbers.x = 18;
// console.log(newNumbers); // {x: 18, y: 8, z: {…}}
// console.log(numbers); // {x: 20, y: 8, z: {…}}

////------------------------------------------------------

// const numbers = {
//   x: 10,
//   y: 5,
// };
// const addNumbers = {
//   z: 16,
// };
// const allNumbers = Object.assign(numbers, addNumbers);
// console.log(allNumbers); // {x: 10, y: 5, z: 16} birga ko'rishimiz mumkin

////------------------------------------------------------

// const arr = [1, 2, 3];
// const numbers = arr.slice();
// numbers[1] = "Sunnatillo";
// console.log(arr); // [1, 2, 3]
// console.log(numbers); // [1, 'Sunnatillo', 3]

////------------------------------------------------------
//// Spread operator - O'zimizzi massivimizi yangisiga o'zgartirib beradi
////------------------------------------------------------

// const liverpool = ["Salah", "Mane"];
// const manCity = ["Mahrez"];
// const mixPlayer = [...liverpool, ...manCity];
// console.log(mixPlayer); // bitta arrayga ikkita massivni joylashtirdik

////------------------------------------------------------

// function logger(x, y, z) {
//   console.log(x + y + z);
// }
// logger(1, 2, 3); // 6

// const calc = [1, 2, 3];
// function logger(x, y, z) {
//   console.log(x + y + z);
// }
// logger(...calc);
// const arr = ["x", "y"];
// const newArr = [...arr];

// const numbers = {
//   x: 50,
//   y: 20,
// };
// const newNumbers = { ...numbers };
// console.log(numbers); // {x: 50, y: 20}
// console.log(newNumbers); // {x: 50, y: 20}
