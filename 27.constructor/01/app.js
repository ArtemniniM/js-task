// Создайте класс User, содержащий свойства name и age. Задайте эти значения через конструктор.

class User {
  name = null;
  age = null;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const user = new User("Artem", 22);
