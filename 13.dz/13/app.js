// Найти сумму всех числовых значений в объекте, используя for...in.
// Тестовые данные:
// const scores = { math: 90, english: 85, biology: 78 };
// Результат: 253

const scores = { math: 90, english: 85, biology: 78 };
let sum = 0;

for(key in scores){
  sum+=scores[key]
}
console.log(sum);
