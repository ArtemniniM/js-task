// Функция greetUser(name) должна возвращать функцию, которая приветствует
// пользователя по имени.

function greetUser(name) {
  return function (message) {
    console.log(`${message}, ${name}!`);
  };
}
const greetArtem = greetUser("Artem");
greetArtem("Hello");
