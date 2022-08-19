"use strict";

const btnContinue = document.querySelector(".btn-continue");
const btnSubmit = document.getElementById("submit");
const appFormComplate = document.querySelector(".app-form-complate");
const appForm = document.querySelector(".app-form");
const fullname = document.getElementById("fullname");
const cardNumber = document.getElementById("cardnumber");
const cvcNumber = document.getElementById("CVC");
const YYexp = document.getElementById("YY");
const MMexp = document.getElementById("MM");
const buttonNotallowed = document.querySelector(".button-notallowed");
const cvcRemover = document.querySelectorAll(".cvc-remover");
const confirmCheckbox = document.getElementById("confirmCheckbox");

const initapp = function () {
  fullname.value = "";
  cardNumber.value = "";
  YYexp.value = "";
  MMexp.value = "";
  cvcNumber.value = "";
  confirmCheckbox.checked = false;
  btnSubmit.setAttribute("disabled", "");
};

initapp();

const validation = function () {
  const fullnameReg = new RegExp(
    "^[A-Z][a-z]{2,}\\s[A-Z][a-z]{2,}((\\s|-)[A-Z][a-z]{2,})?$"
  );
  const cardnumberReg = new RegExp("^[0-9]{16}$");
  const MMexpReg = new RegExp("^(0|1)[0-9]$");
  const YYexpReg = new RegExp("^[0-9]{2}$");
  const cvcNumberReg = new RegExp("^[0-9]{3}$");

  if (
    fullnameReg.test(fullname.value) &&
    cardnumberReg.test(cardNumber.value) &&
    MMexpReg.test(MMexp.value) &&
    YYexpReg.test(YYexp.value) &&
    cvcNumberReg.test(cvcNumber.value)
  ) {
    return true;
  }
};

confirmCheckbox.addEventListener("click", function () {
  if (validation()) {
    btnSubmit.removeAttribute("disabled");
  }
});

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (validation()) {
    appForm.classList.add("form-submit");
    appFormComplate.classList.remove("form-submit");
    initapp();
  }
});

btnContinue.addEventListener("click", function (e) {
  e.preventDefault();
  appFormComplate.classList.add("form-submit");
  appForm.classList.remove("form-submit");
  // console.log("btncontinue clicked");
});

cvcRemover.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("cvc-remover clicked");
    cvcNumber.value = "";
    btnSubmit.setAttribute("disabled", "");
  });
});
