// Напишите функцию, которая принимает статичный массив строк. Необходимо отфильтровать
// значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

const filterFunc = () => {
  const arr = ["by", "belarus", "de", "ru", "germany"];
  const newArr = [];
  const res = arr.filter((el) => (el.length <= 2 ? newArr.push(el) : null));
  return res;
};
console.log(filterFunc());
