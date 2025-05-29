// Преобразовать массив чисел в массив строк.
//  Массив: [1, 2, 3]
//  Использовать: map, String
//  Результат: ["1", "2", "3"]

const arr = [1, 2, 3];

const res = arr.map((el) => el.toString());
console.log(res);
