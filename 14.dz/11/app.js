// Создай функцию count_vowels(s), которая возвращает количество гласных в строке s.

function count_vowels(s) {
  let count = 0;
  const vowels = "aeiou";

  for (let char of s.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(count_vowels("artem"));
