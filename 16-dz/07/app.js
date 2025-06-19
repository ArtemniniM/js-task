// Каррирование. Напиши три вложенные функции, которые принимают имя,
//  возраст и город, и выводят всё одной строкой.

function str(name) {
  return (age) => {
    return (city) => {
      console.log(`${name} ${age} ${city}`);
    };
  };
}
str("artem")(22)("gomel");
