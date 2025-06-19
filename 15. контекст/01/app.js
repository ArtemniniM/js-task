// Создайте объект с полями name и функцией
// greet, которая выводит: "Привет, я <name>".

const person = {
  name: "Artem",
  greet() {
    console.log(`Привет, я ${this.name}`);
  },
};
person.greet();
