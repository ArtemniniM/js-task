// 7. Создай класс NameChecker, в котором:
// - isValid(name) — возвращает true, если длина имени от 3 до 10 символов
// - main() — получает имя через prompt(), вызывает isValid(), и выводит: "Имя принято" или "Имя слишком короткое/длинное"

class NameChecker {
  isValid(name) {
    return name.length >= 3 && name.length < 10;
  }
  main() {
    const name = prompt();
    if (this.isValid(name)) {
      console.log("Имя принято");
    } else {
      console.log("Имя слишком короткое/длинное");
    }
  }
}
const nameCheck = new NameChecker();
nameCheck.main();
