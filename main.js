// create onClick event for all number keys so that all numbers are displayed.
let input = document.querySelector(".display");
let number = document.querySelectorAll(".numbers")
let current = "0";
let memory = "0";


function mainDisplay(number){

  // if(current === 0){
  //   current = number;
  // }else{
  //   current = current + number;
  // }
  // input.innerHTML("current");
  input.innerHTML(number);
}
