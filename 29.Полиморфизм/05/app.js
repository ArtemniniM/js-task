// Создайте родительский класс Number, который будет хранить число. Затем создайте дочерний
// класс PalindromeChecker, который будет проверять, является ли это число палиндромом.
// Входные: new PalindromeChecker(-121) → Результат: false
// Входные: new PalindromeChecker(10) → Результат: false
// Входные: new PalindromeChecker(12321) → Результат: true

class Number {
  num = null;
  constructor(num) {
    this.num = num;
  }
}
class PalindromeChecker extends Number {
  constructor(num) {
    super(num);
  }
  palindromeCheck() {
    let string = this.num.toString();
    if (string === string.split("").reverse().join("")) {
      return true;
    } else {
      return false;
    }
  }
}

const check = new PalindromeChecker(10);
console.log(check.palindromeCheck());
