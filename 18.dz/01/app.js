// Проверка номера телефона (формат: +375(29)123-45-67)

let str = prompt("enter num");
const template = /^\+375\(\d{2}\)\d{3}-\d{2}-\d{2}$/gm;
function check(string) {
  return template.test(string);
}
console.log(check(str));
