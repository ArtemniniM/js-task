// Функция принимает массив строк, возвращает одну строку, где имена идут в обратном порядке, через запятую.
// console.log(reverseNames(["Анна", "Иван", "Олег"])); // "Олег, Иван, Анна"

const reverseNames = (array) => {
  const res = array.reverse().join(",");
  return res;
};

console.log(reverseNames(["Анна", "Иван", "Олег"]));
