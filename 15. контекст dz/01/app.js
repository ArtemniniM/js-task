// Создай функцию sayHello, которая выводит: Привет, <имя>.
// Сделай объект с полем name. Вызови функцию sayHello с помощью call, передав ей этот объект как this.

function sayHello() {
  console.log(` Привет,${this.name}`);
}
const person = { name: "Artem" };
sayHello.call(person);
