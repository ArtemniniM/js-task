// 1. Создай класс UserCollection с массивом пользователей {name, age, city} и методами:
// - filterByCity(city) — массив пользователей из указанного города
// - averageAge() — средний возраст пользователей
// - getNames() — массив имён пользователей
// Создай класс AdvancedUserCollection, который наследует UserCollection и добавляет метод:
// - groupByCity() — объект с ключами — городами, значениями — массивы пользователей из этих городов

class UserCollection {
  array = [
    { name: "Артём", age: 28, city: "Гомель" },
    { name: "Ольга", age: 32, city: "Минск" },
    { name: "Иван", age: 25, city: "Гомель" },
    { name: "Мария", age: 40, city: "Брест" },
  ];

  filterByCity(city) {
    return this.array.filter((el) => el.city === city);
  }
  averageAge() {
    return this.array.reduce((sum, el) => sum + el.age, 0) / this.array.length;
  }
  getNames() {
    return this.array.map((el) => el.name);
  }
}
class AdvancedUserCollection extends UserCollection {
  groupByCity() {
    return this.array.reduce((acc, user) => {
      (acc[user.city] ||= []).push(user);
      return acc;
    }, {});
  }
}
const users = new UserCollection();
const adUsers = new AdvancedUserCollection();
console.log(users.filterByCity("Минск"));
console.log(users.averageAge());
console.log(users.getNames());
console.log(adUsers.groupByCity());
