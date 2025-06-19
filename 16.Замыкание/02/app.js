// Создай функцию greet(greeting)(name), которая выводит строку вида: "Привет,
// Аня".

function greet(greeting) {
  return function name(name) {
    console.log(`${greeting},${name}`);
  };
}
greet("Привет")("Аня");
