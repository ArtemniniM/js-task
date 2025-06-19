// Создай функцию secretMessage(msg), которая возвращает другую функцию. При
// вызове она выводит msg.

function secretMessage(msg) {
  return function name() {
    console.log(msg);
  };
}
const res = secretMessage("world");
res();
