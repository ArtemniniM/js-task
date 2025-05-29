// На входе объект. Необходимо вывести все ключи, которые являются числами.
// Входные: {"1": "a", "2": "b", "name": "c"}→ Результат: ["1", "2"]

const obj = { 1: "a", 2: "b", name: "c" };
const arr = [];

for (const key of Object.keys(obj)) {
  if (!isNaN(key)) {
    arr.push(key);
  }
}
console.log(arr);
