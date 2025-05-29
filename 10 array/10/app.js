//  Повторите заданное предложение prompt указанное количество раз n - prompt. Используйте цикл
// for.
// Входные: "Привет", 3 → Результат: "Привет Привет Привет "
// Входные: "Мир", 2 → Результат: "Мир Мир "

const pr = prompt("enter");
const n = prompt("enter");
let result = "";
for (let i = 0; i < n; i++) {
  result += pr + " ";
}
console.log(result);
