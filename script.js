"use strict";

const btnContinue = document.querySelector(".btn-continue");
const btnSubmit = document.getElementById("submit");
const appFormComplate = document.querySelector(".app-form-complate");
const appForm = document.querySelector(".app-form");
const fullname = document.getElementById("fullname");
const cardNumber = document.getElementById("cardnumber");
const cvcNumber = document.getElementById("CVC");
const buttonNotallowed = document.querySelector(".button-notallowed");

btnContinue.addEventListener("click", function () {
  appFormComplate.classList.add("form-submit");
  appForm.classList.remove("form-submit");
  console.log("btncontinue clicked");
});

// btnSubmit.addEventListener("mouseenter", function () {
//   const cardNumberArr = cardNumber.value.split("");
//   const cvcNumberArr = cvcNumber.value.split("");
//   if (cardNumberArr.length === 4 && cvcNumberArr.length === 3) {
//     // btnSubmit.removeAttribute("disabled");
//     console.log(`${cardNumberArr}, ${cvcNumberArr}`);

//     btnSubmit.addEventListener("click", function () {
//       appForm.classList.add("form-submit");
//       appFormComplate.classList.remove("form-submit");
//     });
//   }
// });

btnSubmit.addEventListener("mouseover", function () {
  console.log("mouse over submit btn");
  const cardNumberArr = cardNumber.value.split("");
  const cvcNumberArr = cvcNumber.value.split("");
  console.log(`${cardNumberArr}, ${cvcNumberArr}`);
  btnSubmit.removeAttribute("disabled");
});

// btnSubmit.addEventListener("click", function () {
//   appForm.classList.add("form-submit");
//   appFormComplate.classList.remove("form-submit");
// });
