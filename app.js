const inputFocusBorder = document.querySelector(".input-element");
// console.log(inputFocusBorder);

inputFocusBorder.addEventListener("focus" , focus);

function focus(e){
  console.log(e.type);
  inputFocusBorder.style.border = "none";
}

const heartRadioButton = document.querySelector(".heart-icon-container-div").children[0];
const heartRadioButtonActive = document.querySelector(".heart-icon-container-div").children[1];
console.log(heartRadioButtonActive);
// console.log(heartRadioButton);
heartRadioButton.addEventListener("click" , displayHeartToUI);
heartRadioButtonActive.addEventListener("click" , removeHeartFromUI);

function displayHeartToUI(){
  heartRadioButtonActive.style.display = "block";
}

function removeHeartFromUI(){
  heartRadioButtonActive.style.display = "none";
}