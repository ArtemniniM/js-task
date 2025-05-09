const a = prompt("enter");

if (a.includes("http://") || a.includes("https://")) {
  console.log(true);
} else {
  console.log(false);
}
