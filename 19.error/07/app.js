// На вход подается строка. Необходимо удалить все гласные из строки. Добавить проверки на
// ввод строки (ввод должен быть строкой).
// "hello" -> "hll",
// "world" -> "wrld"

const str = "hello";

function deleteVowels() {
  try {
    if (!isNaN(str)) throw Error("str is a number");
    let vowels = ["a", "e", "y", "u", "o", "i"];
    let res = "";
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) res += str[i];
    }
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
}
deleteVowels();
