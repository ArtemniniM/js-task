let a = prompt("enter").trim();
if (!isNaN(a)) {
  console.log("error");
} else {
  console.log(a[0].toUpperCase() + a.slice(1));
}
