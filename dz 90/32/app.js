// Удалить все пробелы из строки.
// Строка: "h e l l o"
// Использовать: for, continue
// Результат: "hello"

const str = "h e l l o";
let newStr = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") continue; 
  newStr += str[i];
}

console.log(newStr);