// Дан динамический массив. Найдите максимальное число с помощью for.

const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(+prompt("Введите число:"));
}

let max = arr[0];
for (let j = 1; j < arr.length; j++) {
  if (arr[j] > max) {
    max = arr[j];
  }
}
console.log(max);
