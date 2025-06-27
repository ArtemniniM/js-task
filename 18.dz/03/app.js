// Валидация HEX-цвета (#fff или #ffffff)

let str = prompt("enter num");
const template = /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/gm;
function check(string) {
  return template.test(string);
}
console.log(check(str));
