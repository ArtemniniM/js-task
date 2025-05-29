// Подсчитать, сколько элементов больше среднего.
// [10, 20, 30, 40, 50] — 2 (только 40 и 50 > среднего 30).
//  Первый цикл - на динамическое формирование массива.
// Второй цикл на нахождение среднего значения.
// Третий цикл - на поиск элементов больше среднего в массиве

const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(+prompt("enter"));
}
let middle = 0;
for (let j = 0; j < arr.length; j++) {
  middle += arr[j] / arr.length;
}
console.log(middle);
let result = 0;
for (let f = 0; f < arr.length; f++) {
  if (arr[f] > middle) {
    result++;
  }
}
console.log(result);
