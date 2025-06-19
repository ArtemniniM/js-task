// На входе целое число n. Найдите сумму цифр числа с использованием рекурсии.
// Входные: 123 → Результат: 6
// Входные: 456 → Результат: 15
// Входные: 987 → Результат: 24

let n = "123";
let sum = 0;
let spl = n.split("");
let i = 0;

function doSum() {
  if (i >= spl.length) return;
  sum += +spl[i];
  i++;
  doSum();
}
doSum();
console.log(sum);
