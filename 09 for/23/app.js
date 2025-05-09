// Дан статичный массив целых чисел. Напишите программу, которая с помощью цикла for и
// операторов if проверяет, сколько в массиве четных и нечетных чисел.
// Входные: [1, 2, 3, 4, 5]
// Результат: Четные: 2, Нечетные: 3
// Входные: [2, 4, 6, 8, 10]
// Результат: Четные: 5, Нечетные: 0

let arr = [1, 2, 3, 4, 5];
let resultchet = 0;
let resultnechet = 0;
for (let i = 0; i < arr.length; i++) {
  if (!isNaN(arr[i]) && arr[i] % 2 == 0) {
    resultchet += 1;
  } else {
    resultnechet += 1;
  }
}
console.log(resultchet, resultnechet);
