// Подсчитать количество строк длиной больше 3, используя forEach.
// Тест-кейсы:
// ["hi", "hello", "ok", "world"] → 2
// ["a", "ab", "abc", "abcd"] → 1
// [] → 0

const arr = ["a", "ab", "abc", "abcd"];
let res = 0;
arr.forEach((el) => (el.length > 3 ? res++ : null));
console.log(res);
