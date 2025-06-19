// Функция принимает два параметра: name и count. А возвращает строку, где
//  name повторяется count раз через пробел.
// console.log(repeatName("Анна", 3)); // "Анна Анна Анна"
// console.log(repeatName("Олег", 1)); // "Олег"

const repeatName = (name, count) => {
  let result = "";
  for (let i = 0; i < count; i++) {
    if (i === 0) {
      result += name;
    } else {
      result += " " + name;
    }
  }
  return result;
};
console.log(repeatName("Олег", 4));
