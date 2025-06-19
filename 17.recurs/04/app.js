// Отобразите четные числа от 5 до 0 по убываю используя рекурсию
// Входные: 5 → Результат: 4 2 0

let n = 5;
let str = "";

function doRes() {
  if (n < 0) return;
  if (n % 2 == 0) {
    str += `${n} `;
  }
  n--;
  doRes();
}
doRes();
console.log(str);
