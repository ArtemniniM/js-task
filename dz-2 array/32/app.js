// Сгенерируйте случайное число от 1 до 100 с помощью Math.random.
//  Найдите его квадратный корень с помощью Math.sqrt.
//   Проверьте, является ли корень целым числом с помощью Number.isInteger, и выведите соответствующее сообщение.
// 💥Подсказка: Генерация рандомного числа от 1 до 100: const r = Math.round(Math.random() * 100)

const r = Math.round(Math.random() * 100);
const k = Math.sqrt(r);
if (Number.isInteger(k)) {
  console.log(k);
} else {
  console.log("корень не целый");
}
