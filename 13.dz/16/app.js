// Проверить, содержит ли объект свойство с именем "status", используя for...in.
// Тестовые данные:
// const user = { name: "Anna", status: "online" };
// const user2 = { name: "Mark" };
// Результат:
// Для user → true
// Для user2 → false

const user2 = { name: "Mark" };
let status = false;
for (key in user2) {
  if (key === "status") {
    status = true;
    break;
  }
}
console.log(status);
