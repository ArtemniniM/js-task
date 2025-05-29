// Вывести буквы строки в обратном порядке, но через пробел.
//  Строка: "abc"
//  Использовать: цикл for (обратный), конкатенация с пробелом
//  Результат: "c b a"

const str = "abc";
let reversedstr = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversedstr += str[i] + " ";
}

console.log(reversedstr);
