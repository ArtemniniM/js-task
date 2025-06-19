// Создайте функцию, которая принимает массив строк и выводит, сколько слов
// имеют длину 3 или 4 и т.д.
// ["cat", "lion", "dog", "elephant", "bat", "fox", "wolf", "bee"]); // Вывод: 7

const arr = ["cat", "lion", "dog", "elephant", "bat", "fox", "wolf", "bee"];

const isValid = () => {
  let res = 0;
  const fil = arr.filter((el) => (el.length >= 3 ? res++ : null));
  console.log(res);
};
isValid();
