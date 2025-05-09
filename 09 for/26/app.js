// Дана строка. Напишите программу, которая с помощью цикла for подсчитывает количество
// гласных букв в строке. Гласные: a, e, i, o, u.
// Входные: "Hello!"
// Результат: Количество гласных: 2
// Входные: "Sky"
// Результат: Количество гласных: 0

const pr = prompt("enter");
let result = 0;
const arr = ["a", "e", "i", "o", "u"];
for (let i = 0; i < pr.length; i++) {
  if (arr.includes(pr[i].toLowerCase())) {
    result += 1;
  }
}
console.log("Количество гласных:" + result);
