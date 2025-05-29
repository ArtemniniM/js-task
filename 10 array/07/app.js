// Найдите сумму всех положительных элементов массива [-1, 2, 3, -4, 5].

const array = [-1, 2, 3, -4, 5];
let result = 0;
for (let i = 0; i < array.length; i++) {
  if (!isNaN(array[i]) && array[i] > 0) {
    result += array[i];
  }
}
console.log(result);
