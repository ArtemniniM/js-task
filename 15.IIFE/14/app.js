// Функция принимает строку и выводит все символы, которые встречаются в ней
// только один раз.
// "programming" // Вывод: p, o, a, i, n

const doSym = () => {
  const str = "programming";
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str[i])) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  const res = [];
  for (let key in obj) {
    if (obj[key] === 1) {
      res.push(key);
    }
  }
  return res.join(" ,");
};
console.log(doSym());
