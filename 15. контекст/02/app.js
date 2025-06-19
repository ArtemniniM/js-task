// . Создайте объект с firstName, lastName и методом
// fullName, который выводит полное имя.

const person = {
  firstName: "artem",
  lastName: "minin",
  fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
person.fullName();
