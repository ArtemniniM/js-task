// На входе строка s. Проверьте, является ли строка палиндромом (читается одинаково в обе
//   стороны), используя рекурсию.
//   Входные: "madam" → Результат: True
//   Входные: "hello" → Результат: False
//   Входные: "racecar" → Результат: True

let str = "madam";
let res = true;
let i = 0;

function checkStr() {
  if (i >= str.length / 2) return;
  if (str[i] !== str[str.length - 1 - i]) {
    res = false;
    return;
  }
  i++;
  checkStr();
}
checkStr();
console.log(res);
