// Дан массив строк. Найди первую строку, где первый символ — заглавная
//  латинская буква (A-Z). Если такой строки нет — выведи "Not found".
// ["no", "yes", "Apple"] → "Apple"
// ["test", "data"] → "Not found"

const arr = ["no", "yes", "Apple"];
let found = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] >= "A" && arr[i][0] <= "Z") {
    console.log(arr[i]);
    found = true;
  }
}
if (!found) {
  console.log("Not found");
}
