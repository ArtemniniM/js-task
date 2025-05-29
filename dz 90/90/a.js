// Удалить из массива все null и undefined.
//  Массив: [1, null, 2, undefined, 3]
//  Использовать: filter, проверка !== null && !== undefined
//  Результат: [1, 2, 3]

const arr = [1, null, 2, undefined, 3];

const res = arr.filter((el) => el !== null && el !== undefined);
console.log(res);
