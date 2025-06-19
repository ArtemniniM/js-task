// Создай функцию sumAll(arr), которая возвращает сумму всех чисел в массиве, используя reduce.

function sumAll(arr) {
  return arr.reduce((sum, el) => sum + el, 0);
}
console.log(sumAll([1, 3]));
