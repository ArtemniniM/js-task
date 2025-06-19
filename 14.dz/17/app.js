// Создай функцию joinWords(words),
// которая собирает все строки массива в одну строку через пробел, используя forEach.

function joinWords(words) { 
    let result = ""; 
    words.forEach(word => result += word + " "); 
    return result.trim(); 
  }
console.log(joinWords(["artem", "minin"]));
