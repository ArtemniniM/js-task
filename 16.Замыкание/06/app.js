// Создай функцию checkEven(label)(number), которая выводит label: true/false в
// зависимости от чётности числа.

function checkEven(label) {
  return function name(number) {
    let label = true;
    if (`${number}` % 2 === 0) {
      console.log(`${label}`);
    } else {
      console.log(`${label}` === false);
    }
  };
}
checkEven(true)(433);
