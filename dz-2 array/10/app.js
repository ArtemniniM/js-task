// Дан массив строк ["кот", "дом", "окно", "лист"].
//  Создайте новый массив c теми строками, длина которых больше 3.

const arr = ["кот", "дом", "окно", "лист"];
const newarr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > 3) {
    newarr.push(arr[i]);
  }
}
console.log(newarr);
