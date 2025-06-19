// Замыкание. Напиши функцию, которая возвращает функцию-счётчик.
//  При каждом вызове увеличивает и выводит число.

function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const counter = createCounter();
counter();
counter();
counter();
