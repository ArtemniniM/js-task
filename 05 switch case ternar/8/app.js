const num = +prompt("enter");
if (!isNaN(num)) {
  switch (num) {
    case 1:
      console.log("winter");
      break;
    case 2:
      console.log("spring");
      break;
    case 3:
      console.log("summer");
      break;
    case 4:
      console.log("autumn");
      break;
    default:
      console.log("error");
  }
} else {
  console.log("error");
}
