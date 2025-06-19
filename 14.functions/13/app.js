// На входе строка. Необходимо создать функцию, возвращающую true, если это слово анаграмма и
// false в противном случае

const a = prompt();
const b = prompt();

const checkAnn = (a, b) => {
  let res = a.split("").sort().join("") === b.split("").sort().join("");
  return res;
};
console.log(checkAnn("artem", "merta"));
