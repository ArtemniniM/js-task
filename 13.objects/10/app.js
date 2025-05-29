// На входе объект с ключами name, age, birthday, значения которых – пустые строки. Необходимо
// считать данные с клавиатуры и заполнить объект соответствующими данными, добавив проверки
// на ввод.

const obj = {
  name: "",
  age: "",
  birthday: "",
};

for (let key in obj) {
  if (key === "name") {
    obj.name = prompt();
  } else if (key === "age") {
    obj.age = +prompt();
  } else if (key === "birthday") {
    obj.birthday = prompt();
  }
}
console.log(obj);
