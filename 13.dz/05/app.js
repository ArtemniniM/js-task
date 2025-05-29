// Проверить, все ли элементы массива положительные, используя every.
// Тест-кейсы:
// [1, 2, 3] → true
// [0, 2, -3] → false
// [] → true (всегда true для пустого массива)

const arr = [0, 2, -3];

const res = arr.every((el) => el > 0);
console.log(res);
