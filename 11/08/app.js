// Создайте новый массив, заполненный только числами из исходного массива смешанных
// элементов.
// Методы: Используйте цикл for.
// Входные: ["apple", 3, "orange", 2] → Результат: [3, 2]

const array = []
const arr = ["apple", 3, "orange", 2];

for (let i = 0;i<arr.length;i++){
    if(typeof arr[i]=== 'number'){
        array.push(arr[i])
    }
}console.log(array);
