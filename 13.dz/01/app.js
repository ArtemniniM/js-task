// Найти сумму всех чисел в массиве, используя forEach.
// Тест-кейсы:
// [1, 2, 3, 4] → 10
// [0, -1, 5] → 4
// [] → 0

const arr = [0, -1, 5];
let sum = 0;
arr.forEach((el) => (sum += el));
console.log(sum);
