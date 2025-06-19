// Создай функцию doubleNumbers(arr), которая возвращает новый массив, где все элементы умножены на 2.

function doubleNumbers(arr) {
  return arr.map((el) => el ** 2);
}
console.log(doubleNumbers([1, 2, 3]));
