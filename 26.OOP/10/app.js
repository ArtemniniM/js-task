// 2. Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел, разность,
// произведение, частное. 2 числа передаются в класс, далее вызываеются соответствующие
// функции. Добавить проверки на ввод

class Calculator {
  a = +prompt();
  b = +prompt();

  result1() {
    return this.a + this.b;
  }
  result2() {
    return this.a - this.b;
  }
  result3() {
    return this.a * this.b;
  }
  result4() {
    return this.a % this.b;
  }
}
const calc = new Calculator();
calc.result1();
calc.result2();
calc.result3();
calc.result4();
