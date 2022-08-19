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

const initapp = function () {
  fullname.value = "";
  cardNumber.value = "";
  YYexp.value = "";
  MMexp.value = "";
  cvcNumber.value = "";
  btnSubmit.setAttribute("disabled", "");
};

initapp();

const validation = function () {
  const cardNumberArr = cardNumber.value.split("");
  const cvcNumberArr = cvcNumber.value.split("");
  const MMexpArr = MMexp.value.split("");
  const YYexpArr = YYexp.value.split("");
  const fullnameArr = fullname.value.split("");
  // console.log(
  //   `cardarr:${cardNumberArr.length}, cvcarr:${cvcNumberArr.length} fullnamearr: ${fullnameArr.length}`
  // );
  if (
    fullname.value !== "" &&
    cardNumberArr.length === 16 &&
    cvcNumberArr.length >= 2 &&
    // tu jest błąd bo powinno być cvc === 3 ale z powodu że stan jest sprawdzany na moment klikniecia ostatniego przysiku na input cvc to stan wtedy wynosi 2 a nie 3, a z drugiej strony przy powtorej walidacji przy wcisakniu przycisku submit stan jest już aktualny i nie przechodzi walidacji. Moznaby to rozwiązać np checkboxem "czy potwierdzasz poprawność wprowadzonych danych?" i w momencie kliknięcia w niego aktualizować dane i wtedy puszczać walidacje.
    MMexpArr.length === 2 &&
    YYexpArr.length === 2
  ) {
    return true;
  }
};

cvcNumber.addEventListener("keydown", function () {
  // console.log("keydown cvc");

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
