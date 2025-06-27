// На вход подается строка в виде числа. Необходимо написать регулярное
// выражение. Если строка состоит только из чисел, то вывести булевое true, в
// противном случае бросить исключение и обработать

let str = prompt("enter num");
const template = /^[0-9]+$/;

function check(string) {
  return template.test(string);
}
console.log(check(str));
