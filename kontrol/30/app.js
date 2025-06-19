// Переберите объект { name: "Анна", age: 25, city: "Москва" }
// с помощью цикла for...in и выведите в консоль каждый ключ и его значение.

const obj = { name: "Анна", age: 25, city: "Москва" };

for (let key in obj) {
  console.log(key, obj[key]);
}
