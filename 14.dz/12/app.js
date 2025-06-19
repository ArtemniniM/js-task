// Создай функцию reverse_string(s), которая возвращает строку s, записанную в обратном порядке.

function reverse_string(s) {
  let spl = s.split("");
  return spl.reverse().join("");
}
console.log(reverse_string("fasre"));
