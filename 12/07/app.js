// Выведите все числа, кратные 3, из массива [2, 5, 9, 15, 0, 4].
// Методы: Используйте цикл for...of.
// Входные: [2, 5, 9, 15, 0, 4] → Результат: [9, 15, 0]

const arr = [2, 5, 9, 15, 0, 4];
const newarr = [];

for (let num of arr) {
  if (num % 2 == 0) {
    newarr.push(num);
  }
}
console.log(newarr);
