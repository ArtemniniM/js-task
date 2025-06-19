// Заменить каждый символ строки на "*".
//  Строка: "abc"
//  Использовать: split(''), map (заменить на "*"), join('')
//  Результат: "***"

const str = "abc";
const spl = str.split("");

const replace = spl.map((el) => el.replaceAll(el, "*"));

const res = replace.join("");
console.log(res);
