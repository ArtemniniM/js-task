// Сделай две функции:
// isValidName(name) — возвращает true, если имя не пустое
// sayHello(name) — использует isValidName и возвращает:
// "Привет, <name>!", если имя корректное
// "Некорректное имя" — если нет

const isValidName = (name) => {
  return typeof name === "string" && name.length > 0;
};

const sayHello = (name) => {
  return isValidName(name) === true ? `Привет,${name}!` : "Некорректное имя";
};
console.log(sayHello(""));
