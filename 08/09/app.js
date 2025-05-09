const a = prompt("enter");
const word = a.split(" ");
if (word.length == 2) {
  console.log(word[0][0].toLowerCase() + word[0].slice(1) + " " + word[1][0].toLowerCase() + word[1].slice(1));
} else if (word.length == 3) {
  console.log(
    word[0][0].toLowerCase() +
      word[0].slice(1) +
      " " +
      word[1][0].toLowerCase() +
      word[1].slice(1) +
      " " +
      word[2][0].toLowerCase() +
      word[2].slice(1)
  );
} else {
  console.log(word[0][0].toLowerCase() + word[0].slice(1));
}
