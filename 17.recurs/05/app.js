// На входе число n = 2, step = 5. Возведите n в степень step используя рекурсию
// Входные: 2, 5 → Результат: 32
// Входные: 3, 4 → Результат: 81

let n = 2;
let step = 5;
let res = 1;

function doRes() {
  if (step == 0) return;
  res *= n;
  step--;
  doRes();
}
doRes();
console.log(res);
