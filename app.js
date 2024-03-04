let border = document.querySelector(".searchbox");
let inp = document.querySelector("#longest");
function bor() {
  border.classList.add("feesBorder");
}
function bore() {
  border.classList.remove("feesBorder");
}
inp.addEventListener("focus", bor);
inp.addEventListener("blur", bore);
