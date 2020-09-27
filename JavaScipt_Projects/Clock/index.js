

function digiclock() {
let hour = document.getElementById("hour");


let clock = new Date();
let h = clock.getHours();
let m = clock.getMinutes();
let s = clock.getSeconds();

let statment = "AM";

if (h > 12) {
   statment = "PM";
  
}else{statment ="AM"}

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

const time = h + ":" + m + ":" + s +":"+ statment ;
document.getElementById("hour").innerText = time;

setTimeout(digiclock, 1000);
}


digiclock()






