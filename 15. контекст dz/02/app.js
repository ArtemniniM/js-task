// Создай функцию introduce, которая принимает два параметра: возраст и город.
// Внутри она выводит: <имя> - <возраст> лет, живёт в <город>.
// Вызови функцию через apply, передав объект с name и массив из возраста и города.

function introduce(age, city) {
  console.log(`${this.name}-${age} лет, живёт в ${city}`);
}
const person = { name: "Artem" };
introduce.apply(person, [22, "Gomel"]);
