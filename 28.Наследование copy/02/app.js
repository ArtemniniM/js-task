// Добавьте метод greet() в класс User первого задания, который выводит строку: "Привет, меня зовут
// {name}".

class User {
  name = null;

  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Привет, меня зовут ${this.name}`);
  }
}
const user = new User("Artem");
user.greet();
