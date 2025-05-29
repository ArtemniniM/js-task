// Дан массив слов ["солнце", "луна", "звезда", "небо"]. Найдите длину самого длинного слова.

const arr = ["солнце", "луна", "звезда", "небо"];
let maxlenght = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > maxlenght) {
    maxlenght = arr[i].length;
  }
}
console.log(maxlenght);
