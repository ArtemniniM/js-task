// Создай метод format() в объекте formatter, который возвращает строку: <фамилия> <имя>.
// Применяй метод через call к объектам с полями firstName и lastName.
// 👇
// const formatter = {
//   format() {

//   }
// };
// const person1 = { firstName: "Никита", lastName: "Орлов" };
// const person2 = { firstName: "Лена", lastName: "Кравцова" };

const formatter = {
  format() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
const person1 = { firstName: "Никита", lastName: "Орлов" };
formatter.format.call(person1);
