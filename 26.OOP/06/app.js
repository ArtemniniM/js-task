// 6. Создай класс AgeChecker, в котором:
// - метод isValid(age) возвращает true, если возраст больше или равен 18.
// - метод main() спрашивает возраст через prompt(), вызывает isValid(), и выводит в консоль: "Доступ разрешен" — если возраст валидный

class AgeChecker {
  isValid(age) {
    if (age >= 18) return true;
  }
  main() {
    const age = +prompt();
    if (this.isValid(age)) console.log("Доступ разрешен");
  }
}
const ageCheck = new AgeChecker();
ageCheck.main();
