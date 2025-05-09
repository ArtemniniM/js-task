// На входе число n – кол-во случайных элементов. Выведите n случайных целых чисел от 0 до 100,
// используя Math.random().
const n = 9;
for (i = 0; i < n; i++) {
  const rand = Math.floor(Math.random() * 100);
  console.log(rand);
}
