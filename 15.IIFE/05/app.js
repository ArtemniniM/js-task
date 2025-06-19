// Напишите IIFE-функцию, принимающую массив строк и число. Внутри выведите
// строки длиной больше указанного числа.
// ["cat", "dinosaur", "elephant", "dog"], 3 // Ожидаемый вывод: [dinosaur, elephant]

const arr = ["cat", "dinosaur", "elephant", "dog"];
const num = 3;

// (() => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > num) {
//       newArr.push(arr[i]);
//     }
//   }
//   console.log(newArr);
// })();

// (() => {
//   let newArr = [];
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i].length > num) {
//       newArr.push(arr[i]);
//     }
//     i++;
//   }
//   console.log(newArr);
// })();

// (() => {
//   let i = 0;
//   let newArr = [];
//   do {
//     arr[i].length > num ? newArr.push(arr[i]) : null;
//     i++;
//   } while (i < arr.length);
//   console.log(newArr);
// })();

// (() => {
//   let newArr = [];
//   for (let el of arr) {
//     el.length > num ? newArr.push(el) : null;
//   }
//   console.log(newArr);
// })();

// (() => {
//   let newArr = [];
//   arr.forEach((el) => (el.length > num ? newArr.push(el) : null));
//   console.log(newArr);
// })();

// (() => {
//   let newArr = [];
//   const res = arr.filter((el) => (el.length > num ? newArr.push(el) : null));
//   console.log(res);
// })();
