// Создайте класс DigitSummer с методом sumDigits(num), который возвращает сумму цифр числа.
// 123 -> 6
// 241 -> 7

class DigitSummer {
  sumDigits(num) {
    const spl = num.toString().split("");
    const res = spl.reduce((sum, el) => {
      return sum + Number(el);
    }, 0);
    return res;
  }
}
const digit = new DigitSummer();
console.log(digit.sumDigits(123));
