// Подсчитать количество гласных в строке.
//  Строка: "JavaScript"
//  Использовать: цикл for, проверка символа в "aeiouAEIOU"
//  Результат: 3

const str = "JavaScript";
const prov = "aeiouAEIOU";
let result = 0;
for (let i = 0; i < str.length; i++) {
  if (prov.includes(str[i])) {
    result++;
  }
}
console.log(result);
