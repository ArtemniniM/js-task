// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Вывести произведение всех элементов массива. Добавить проверку на ввод только чисел.
// Использовать методы forEach или reduce.
// Входные: [2, 3, 4, 5] → Результат: 120
// Входные: [1, 5, 10] → Результат: 50
// Входные: [7, 8, 2] → Результат: 112

const n = +prompt("enter");
const arr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt("enter"));
}

// let res = 1;

// arr.forEach(function (elem) {
//   if (!isNaN(elem)) {
//     res *= elem;
//   }
// });
// console.log(res);

const product = arr.reduce(function (res, elem) {
  return res * elem;
}, 1);

console.log(product);
