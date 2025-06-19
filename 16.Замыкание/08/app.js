// Реализуй функцию inRange(min)(max)(value), которая выводит true, если значение
// попадает в диапазон

function inRange(min) {
  return function name(max) {
    return function name2(value) {
      if (value > min && value < max) {
        console.log(true);
      } else {
        console.log(false);
      }
    };
  };
}
inRange(10)(20)(23);
