let a = prompt("enter");
if ((a.includes("@") && a.endsWith(".com")) || a.endsWith(".ru")) {
  console.log(true);
} else {
  console.log(false);
}
