// Напишите функцию, которая принимает строку в маленьком регистре и возаращает строку, где
// каждое слово начинается с большого регистра
// hschool company -> Hschool Company

function firstSym(str) {
  return str
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(" ");
}

console.log(firstSym("hschool company"));
