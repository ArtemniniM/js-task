// Проверить, есть ли в массиве число больше 100, используя some.
// Тест-кейсы:
// [10, 50, 101] → true
// [99, 100] → false
// [] → false

const arr = [99, 100];

const res = arr.some((el) => el == 100);
console.log(res);
