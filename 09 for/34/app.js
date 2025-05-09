// Дан массив строк. Выведи только те строки, длина которых 5 символов или больше.
// ["hi", "hello", "world", "yo"] → "hello", "world"
// ["abc", "abcd", "abcde"] → "abcde"
const arr = ["abc", "abcd", "abcde"];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length >= 5) {
    console.log(arr[i]);
  }
}
