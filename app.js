// let productsSection = document.querySelector(".products-part-section-div");

// let firstProduct = productsSection.children[0].children[0];
// let secondProduct = productsSection.children[1];
// let thridProduct = productsSection.children[2];
// let fourthProduct = productsSection.children[3];
// let fifthProduct = productsSection.children[4];
// let sixthProduct = productsSection.children[5];
// let seventhProduct = productsSection.children[6];
// let eightProduct = productsSection.children[7];

let productHeart = document.querySelectorAll(".bi-heart");
let productHeartFill = document.querySelectorAll(".bi-heart-fill");

productHeart.forEach(function(product){
  product.addEventListener("click" , changeHeartColor);
});

function changeHeartColor() {
  console.log(productHeartFill.style);
}

// product.addEventListener("click" , changeHeartColor);

// firstProduct.children[0].addEventListener("click", changeHeartColor);
// firstProduct.children[1].addEventListener("click", removeHeartColor);

// // .children[0].children[1]


// function removeHeartColor() {

// }