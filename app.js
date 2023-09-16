const inputFocusBorder = document.querySelector(".input-element");
// console.log(inputFocusBorder);

inputFocusBorder.addEventListener("focus" , focus);

function focus(e){
  console.log(e.type);
  inputFocusBorder.style.border = "none";
}