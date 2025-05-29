// Дан массив [1, "привет", true, "мир", 42]. Выведите только строки.

const arr = [1, "привет", true, "мир", 42];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == "string") {
    console.log(arr[i]);
  }
}
