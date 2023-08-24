"use script"

// У нас є об'єкт' user:

// const user1 = {
//   name: "John",
//   years: 30
// };

// Напишіть деструктуруюче присвоєння, яке:

// властивість name присвоїть в змінну ім'я
// властивість years присвоїть в змінну вік
// властивість isAdmin присвоює в змінну isAdmin false, якщо такої властивості немає в об'єкті
// Виведіть змінні на екран.

const user1 = {
  name: "John",
  years: 30,
};

let uName = user1.name;
let age = user1.years;

function user(user1, isAdmin) {
if (isAdmin ?? user1) {
    return true;
} else {
    return false;
};
};

console.log(uName);
console.log(age);
console.log(user());