// На входе массив значений. Необходимо его обработать. Если в массиве есть хотя бы 1
// строка, бросить исключение

const arr = ["qwe", 2, 3];

function checkArray(arr) {
  try {
    const stringSerf = arr.some((el) => typeof el === "string");

    if (stringSerf) {
      throw new Error("Массив содержит строку");
    }
    console.log("Массив корректен");
  } catch (error) {
    console.log("Ошибка:", error.message);
  }
}
checkArray(arr);
