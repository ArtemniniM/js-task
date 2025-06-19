// Напишите функцию, которая принимает строку состоящую из нескольких слов. Каждое нечетное
// слово строки функция должна преобразовать в нижний регистр, все четные слова, соответственно,
// в верхний
// happy new year -> happy NEW year
  
// Map,forEach,for,for of , while , do while

const str = "happy new year ";
const spl = str.split(" ");

function doReg() {
  let res = [];
  for (let i = 0; i < spl.length; i++) {
    if ((i + 1) % 2 == 0) {
      res.push(spl[i].toUpperCase());
    } else {
      res.push(spl[i].toLowerCase());
    }
  }
  console.log(res.join(" "));
}
doReg();

function doReg2() {
  const res1 = spl.map((el, i) => ((i + 1) % 2 === 0 ? el.toUpperCase() : el.toLowerCase()));
  console.log(res1.join(" "));
}
doReg2();

function doReg3() {
  let res2 = "";
  spl.forEach((el, i) => ((i + 1) % 2 === 0 ? (res2 += el.toUpperCase()) : (res2 += el.toLowerCase())));
  console.log(res2);
}
doReg3();

function doReg4() {
  let res3 = [];
  for (let i = 0; i < spl.length; i++) {
    if ((i + 1) % 2 == 0) {
      res3.push(spl[i].toUpperCase());
    } else {
      res3.push(spl[i].toLowerCase());
    }
  }
  console.log(res3.join(" "));
}
doReg4();

function doReg5() {
  let res4 = [];
  let i = 0;
  while (i < spl.length) {
    if ((i + 1) % 2 == 0) {
      res4.push(spl[i].toUpperCase());
    } else {
      res4.push(spl[i].toLowerCase());
    }
    i++;
  }
  console.log(res4.join(" "));
}
doReg5();

function doReg6() {
  const res5 = [];
  let i = 0;
  do {
    if ((i + 1) % 2 == 0) {
      res5.push(spl[i].toUpperCase());
    } else {
      res5.push(spl[i].toLowerCase());
    }
    i++;
  } while (i < spl.length);
  console.log(res5.join(" "));
}
doReg6();
