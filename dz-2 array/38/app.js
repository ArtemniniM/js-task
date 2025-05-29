// Пользователь вводит строку. Посчитайте, сколько в ней гласных букв.
// 💥 Подсказка: используйте toLowerCase() и проверку includes().
// "ПрогрАммирОванИе" -> Гласных: 6
let pr = prompt("Введите строку:").toLowerCase();
let result = 0;
const vowels = "aeiouаеёиоуыэюя";

for (let char of pr) {
  if (vowels.includes(char)) {
    result++;
  }
}
console.log(`Гласных букв: ${result}`);
