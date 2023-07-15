const form = document.querySelector("form");
const input = document.getElementById("input");
const bir = document.getElementById("bir");
const ikki = document.getElementById("ikki");
const uch = document.getElementById("uch");
const tort = document.getElementById("tort");
const besh = document.getElementById("besh");
const olti = document.getElementById("olti");
const yetti = document.getElementById("yetti");
const sakkiz = document.getElementById("sakkiz");
const toqqiz = document.getElementById("toqqiz");
const nol = document.getElementById("nol");
const dot = document.getElementById("dot");
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const kop = document.getElementById("kop")
const bol = document.getElementById("bol")
const teng = document.getElementById("equal")
const ac = document.getElementById("ac")
const del = document.getElementById("del")
const foiz = document.getElementById("foiz")
const sqrt = document.getElementById("sqrt")


ac.addEventListener("click", (e) => {
  input.value = "" ;
});

del.addEventListener("click", (e) => {
  input.value = "";
});

foiz.addEventListener("click", (e) => {
  input.value += "%";
});

sqrt.addEventListener("click", (e) => {
  input.value += "^";
});




plus.addEventListener("click", (e) => {
  input.value += "+";
});

minus.addEventListener("click", (e) => {
  input.value += "-";
});

kop.addEventListener("click", (e) => {
  input.value += "x";
});

bol.addEventListener("click", (e) => {
  input.value += "÷";
});




bir.addEventListener("click", (e) => {
  input.value += "1";
});

ikki.addEventListener("click", (e) => {
  input.value += "2";
});

uch.addEventListener("click", (e) => {
  input.value += "3";
});

tort.addEventListener("click", (e) => {
  input.value += "4";
});

besh.addEventListener("click", (e) => {
  input.value += "5";
});

olti.addEventListener("click", (e) => {
  input.value += "6";
});

yetti.addEventListener("click", (e) => {
  input.value += "7";
});

sakkiz.addEventListener("click", (e) => {
  input.value += "8";
});

toqqiz.addEventListener("click", (e) => {
  input.value += "9";
});

nol.addEventListener("click", (e) => {
  input.value += "0";
});

dot.addEventListener("click", (e) => {
  input.value += ".";
});

equal.addEventListener("click", (e) => {
 let value = input.value
 input.value = calculate(value)
});


input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Buni qo'shib bo'lmaydi, agar ko'rishni istasangiz olib tashlang
    let value = input.value;
    input.value = calculate(value);
  }
});


function calculate(nums) {
    let result;
    const regex = /(\d+)\s*([\+\-\x\÷\%\^])\s*(\d+)/;
    const matches = nums.match(regex);
  
    if (matches) {
      const num1 = parseFloat(matches[1]);
      const operator = matches[2];
      const num2 = parseFloat(matches[3]);
  
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case 'x':
          result = num1 * num2;
          break;
        case '÷':
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            result = 'Error: Division by zero';
          }
          break;
        case '%':
          result = num1 % num2;
          break;
        case '^':
          result = Math.pow(num1, num2);
          break;
        default:
          result = "Noto'g'ri amal";
          break;
      }
    } else {
      result = 'xato kirtildi';
    }
  
    return result;
}