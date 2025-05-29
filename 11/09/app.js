// Выведите все числа, кратные 5 или 3, из массива [2, 5, 9, 15, 0, 4].
// Методы: Используйте цикл while.
// Входные: [2, 5, 9, 15, 0, 4] → Результат: [5, 9 15, 0]

const arr = [2, 5, 9, 15, 0, 4];
 const newarr= []
let i = 0;
while(i<arr.length){
if(arr[i]%5===0||arr[i]%3===0){
    newarr.push(arr[i])
}

    i++
}console.log(newarr);
