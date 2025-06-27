// На входе str — строка. Реализуйте 2 функции: reverseStr() — возвращает
// перевёрнутую строку, printReversed() — выводит перевёрнутую строку.

const str = "artem";
const reverseStr = (str) => {
  str.split("").reverse().join("");
  return str;
};
const printReversed = (str) => {
  console.log(reverseStr(str));
};
printReversed(str);
