// Создать строку из массива чисел, каждый элемент с точкой и пробелом.
//  Массив: [1, 2, 3]
//  Использовать: map, join
//  Результат: "1. 2. 3."

const arr = [1, 2, 3];
// const res = arr.join(". ") + ".";
// console.log(res);

const res = arr.map((el) => el + ".").join(" ");
console.log(res);
