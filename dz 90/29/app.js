// Вывести все индексы элементов, равных нулю.
//  Массив: [0, 1, 0, 2, 0]
//  Использовать: цикл for, проверка === 0, push в новый массив
//  Результат: [0, 2, 4]

const arr = [0, 1, 0, 2, 0];
const newarr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    newarr.push(i);
  }
}
console.log(newarr);
