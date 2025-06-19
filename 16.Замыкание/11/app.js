// Создай
// функцию createCounter(), которая возвращает новую функцию. Каждый вызов
// увеличивает значение счётчика на 1.

function createCounter() {
  let count = 0;
  return function (params) {
    count++;
    console.log(count);
  };
}
const couter = createCounter();
couter();
