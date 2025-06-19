// Создай функцию sayHi, которая выводит: Привет, <имя>.
// Создай объект с полем name.
// Создай новую функцию sayHiFromUser, используя bind, чтобы сохранить this.

function sayHi() {
  console.log(`Привет, ${this.name}`);
}
const person = { name: "Artem" };

const sayHiFromUser = sayHi.bind(person);
sayHiFromUser();
