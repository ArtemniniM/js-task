// Дан массив ["м", "и", "р"]. Соедините его элементы в одну строку без пробелов.

const arr = ["м", "и", "р"];
result = "";
for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}
console.log(result);
