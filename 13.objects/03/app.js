// На входе объект. Необходимо вывести все значения, которые являются числами
// Входные: {"a": 1, "b": "2", "c": 3}→ Результат: [1, 2, 3]

const obj = { a: 1, b: "2", c: 3 };
const arr = [];

for (let key in obj) {
  if (typeof obj[key] === "number") {
    arr.push(obj[key]);
  }
}
console.log(arr);
