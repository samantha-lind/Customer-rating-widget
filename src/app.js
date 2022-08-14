//update thankyou screen//
function thankYou() {
  let ratingScreen = document.querySelector(".rating-screen");
  ratingScreen.innerHTML = `<img src="./images/illustration-thank-you.svg" id="thankyou">
 <div class="thanks">You selected ${yourRating} out of 5</div> <span id= "your-rating"><h1>Thank you!</h1><p> We appreciate you taking the time to give a rating. If
  you ever need more support, don’t hesitate to get in touch!</p></span>`;
}

//record submission//
let submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", thankYou);

let yourRating = "";

//record rating click//
let one = document.querySelector("#one");
one.addEventListener("click", function rateOne() {
  yourRating = "1";
  one.style.backgroundColor = "#fb7413";
  one.style.color = "white";
});

let two = document.querySelector("#two");
two.addEventListener("click", function rateTwo() {
  yourRating = "2";
  two.style.backgroundColor = "#fb7413";
  two.style.color = "white";
});

let three = document.querySelector("#three");
three.addEventListener("click", function rateThree() {
  yourRating = "3";
  three.style.backgroundColor = "#fb7413";
  three.style.color = "white";
});

let four = document.querySelector("#four");
four.addEventListener("click", function rateFour() {
  yourRating = "4";
  four.style.backgroundColor = "#fb7413";
  four.style.color = "white";
});

let five = document.querySelector("#five");
five.addEventListener("click", function rateFive() {
  yourRating = "5";
  five.style.backgroundColor = "#fb7413";
  five.style.color = "white";
});
