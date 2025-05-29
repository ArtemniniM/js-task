// Вывести только строковые значения из объекта, используя for...in.
// Тестовые данные:
// const info = { name: "Bob", age: 30, status: "active" };
// Ожидаемый вывод:
// Bob
// active

const info = { name: "Bob", age: 30, status: "active" };

for (key in info) {
  if (typeof info[key] === "string") {
    console.log(info[key]);
  }
}
