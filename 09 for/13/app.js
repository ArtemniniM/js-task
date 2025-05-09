// Пользователь вводит строку и число n. Повторите строку n раз с помощью цикла for.
// Входные: "hello", 3 → Результат: "hellohellohello"
// Входные: "abc", 2 → Результат: "abcabc"
// Входные: "xyz", 5 → Результат: "xyzxyzxyzxyzxyz"
let str = prompt("enter");
let n = +prompt("enter");
let result = "";
for (i = 0; i < n; i++) {
  result += str;
}
console.log(result);
