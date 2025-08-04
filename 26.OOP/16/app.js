// Реализуйте класс Validator. У него будет метод isEmail параметром принимает строку и проверяет,
// является ли она корректным емейлом или нет. Если является - возвращает true, если не является -
// то false.

class Validator {
  isEmail() {
    const str = prompt();
    const template = /^[a-zA-z0-9]+\@[a-z]+\.[a-z]{1,5}/;
    if (template.test(str)) return true;
    else return false;
  }
}
const validator = new Validator();
console.log(validator.isEmail());
