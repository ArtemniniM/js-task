// Проверка, что строка содержит только трехзначные цифры

let str = prompt("enter num");
const template = /^(?:\d{3})(?:\s\d{3})*$/gm;
function check(string) {
  return template.test(string);
}
console.log(check(str));
