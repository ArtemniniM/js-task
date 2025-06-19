// Даны два объекта. Создайте новый объект, включив в него только те свойства, которые есть в
// обоих исходных объектах. Используйте hasOwnProperty для проверки.

const obj = {
  id: 1,
  name1: "Artem",
};
const obj2 = {
  id: 2,
  age: 22,
  name2: "Artem",
};
const newObj = {};

for (key in obj) {
  if (obj2.hasOwnProperty(key)) {
    newObj[key] = obj[key];
  }
}
console.log(newObj);
