// Функция принимает параметр name, если аргумент в этот параметр при вызове не
// передан — используется "Гость". Возвращается строка: Привет, <name>!

const doString = (name) => {
  if (name === undefined) {
    return "Привет,Гость";
  } else {
    return `Привет, ${name}`;
  }
};
console.log(doString("artem"));
