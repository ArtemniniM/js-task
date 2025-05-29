// Повторите заданное предложение prompt указанное количество раз n - prompt.
// Метод: Используйте цикл for.
// Входные: ("Привет", 3) → Результат: "Привет Привет Привет "
// Входные: ("Мир", 2) → Результат: "Мир Мир "
// Входные: ("JavaScript", 1) → Результат: "JavaScript "

const text = prompt("enter");
const n = +prompt("enter");
let string = "";
for (let i = 0; i < n; i++) {
  string += text + " ";
}
console.log(string);
