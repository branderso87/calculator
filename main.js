const numbers = document.querySelectorAll(".numbers")
let input = [];

for(i = 0; i < numbers.length; i++){
  numbers[i].addEventListener("click", addNumbers());

  function addNumbers(){
    input.push(numbers[i].id); console.log(input)
  }

// rewrite index.html so that all input keys have class = keys so we can consistently loop through keys.length.
// 
}
