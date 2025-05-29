// Вывести в консоль все ключи объекта, используя for...in.
// Тестовые данные:
// const user = { name: "Alice", age: 25, city: "Minsk" };
// Ожидаемый вывод:
// name
// age
// city

const user = { name: "Alice", age: 25, city: "Minsk" };

for (key in user) {
  console.log(key);
}
