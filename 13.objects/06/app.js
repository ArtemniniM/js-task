// На входе объект. Необходимо удвоить все значения, которые являются числами.
// Входные: {"x": 5, "y": 10, "z": "abc"} → Результат: {"x": 10, "y": 20, "z": "abc"}

const obj = { x: 5, y: 10, z: "abc" };

for (const key in obj) {
  if (typeof obj[key] === "number") {
    obj[key] *= 2;
  }
}
console.log(obj);
