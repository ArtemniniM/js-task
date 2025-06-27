// Реализуйте функцию, которая находит наименьшее общее кратное (НОК) двух чисел.
// Добавить проверку на ввод (вводимые значения должны быть целыми числами).
// Пример:
// НОК(6, 8) -> 24

const num1 = +prompt();
const num2 = +prompt();

function HOK(num1, num2) {
  try {
    if (isNaN(num1) && isNaN(num2)) throw new Error("letters");
    if (num1 < 0 && num2 < 0) throw new Error("nums < 0");
    for (let i = 0; i < num1 * num2; i++) {
      if (i % num1 === 0 && i % num2 === 0) console.log(i);
    }
  } catch (error) {
    console.log(error.message);
  }
}
HOK(num1, num2);
