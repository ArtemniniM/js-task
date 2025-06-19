// Написать функцию, принимающую в параметрах строку текста в маленьком регистре. Разбить
// строку на массив. Функция должна вернуть строку, где каждый элемент массива в чередование
// регистров toLowerCase, toUpperCase
// hschool -> HsChOoL

const n = prompt().toLowerCase().split("");

function doRes() {
  let res = "";
  for (let i = 0; i < n.length; i++) {
    if (i % 2 === 0) {
      res += n[i].toUpperCase();
    } else {
      res += n[i].toLowerCase();
    }
  }
  return res;
}
console.log(doRes(n));
