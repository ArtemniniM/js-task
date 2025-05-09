// Дан массив слов. Выводи слова по порядку, пока не встретишь
//  "stop" (в любом регистре). После этого — остановись.
// ["go", "keep", "STOP", "wait"] → go, keep
// ["run", "jump"] → run, jump
const arr = ["go", "keep", "STOP", "wait"];

for (let i = 0; i < arr.length; i++) {
  if (!arr[i].toLowerCase().includes("stop")) {
    console.log(arr[i]);
  } else {
    break;
  }
}
