/** @format */

const select = document.querySelectorAll("select");
const input = document.querySelectorAll("input");
const API_URL =
  "https://api.exchangeratesapi.io/v1/latest?access_key=78042e0e362e37597e15fa6118512848";
let html = " ";

async function currency() {
  const res = await fetch(API_URL);
  const data = await res.json();
  const arrkeys = Object.keys(data.rates);
  const rates = data.rates;
  console.log(rates);
  arrkeys.map((item) => {
    // console.log(item);
    return (html += `<option value=${item}>${item}</option>`);
  });
  // console.log(html);
  for (let i = 0; i < select.length; i++) {
    select[i].innerHTML = html;
  }
  //   console.log(html);
  // console.log(rates[select[1].value]);
  // input[0].addEventListener("keyup", function () {
  //   input[1].value =
  //     (input[0].value * rates[select[1].value]) / rates[select[0].value];
  // });
  // input[1].addEventListener("keyup", function () {
  //   input[0].value =
  //     (input[1].value * rates[select[0].value]) / rates[select[1].value];
  // });

  // select[0].addEventListener("change", function () {
  //   input[1].value =
  //     (input[0].value * rates[select[1].value]) / rates[select[0].value];
  // });
  // select[1].addEventListener("change", function () {
  //   input[0].value =
  //     (input[1].value * rates[select[0].value]) / rates[select[1].value];
  // });

  function converter(i, j) {
    input[i].value =
      (input[j].value * rates[select[i].value]) / rates[select[j].value];
  }

  console.log(rates[select[1].value]);
  input[0].addEventListener("keyup", () => converter(1, 0));
  input[1].addEventListener("keyup", () => converter(0, 1));
  select[0].addEventListener("change", () => converter(1, 0));
  select[1].addEventListener("change", () => converter(0, 1));
}

currency();
