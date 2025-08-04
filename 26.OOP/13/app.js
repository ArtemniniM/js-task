// Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем замены букв
//     исходного слова или фразы). Создать функцию для вывода ряда true, если слова являются
//     анаграммами. Добавить проверки на ввод

class Anagram {
  str1 = prompt();
  str2 = prompt();

  sort() {
    const arr1 = this.str1.split("");
    const arr2 = this.str2.split("");
    if (arr1.sort().join("") === arr2.sort().join("")) return true;
    else {
      return false;
    }
    // for (let i = 0; i < this.str1; i++) {
    //   return this.arr1.push(this.str1[i]);
    // }
  }
}
const anagram = new Anagram();
console.log(anagram.sort());
