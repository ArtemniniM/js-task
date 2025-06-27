// На входе значение. Необходимо его обработать. Если это число и оно не является четным,
// бросить исключение

let n = +prompt();
function checkNum() {
  try {
    if (n % 2 !== 0) throw new Error("ne chetnoe");
    if (!isNaN(n) && n % 2 === 0) console.log(n);
  } catch (error) {
    console.log(error);
  }
}
checkNum();
