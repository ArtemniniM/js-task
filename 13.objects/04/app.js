// На входе объект. Необходимо вывести все значения, которые являются четными числами.
// Входные: {"a": 1, "b": 2, "c": 4}→ Результат: [2, 4]

const obj = { a: 1, b: 2, c: 4 };
const arr = [];

for (const key in obj) {
  if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
    arr.push(obj[key]);
  }
}
console.log(arr);
