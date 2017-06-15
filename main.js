const keys = document.querySelectorAll(".keys")
const theDisplay = document.querySelector(".display")
var input = []
let answer = ''

for(i = 0; i < keys.length; i++){
  keys[i].addEventListener('click', function (event) {
    const elementClicked = event.target;
    const elementID = elementClicked.id;

    switch(elementID){
      case "clear": // clear
        input = []
        theDisplay.innerHTML = ''
        break
      case "equals":// equals
        let answer = eval(input.join)
        theDisplay.textContent = answer
        break
      case "/": case "-": case "+":
        input.push(elementID)
        break
      case "*":// multiply
        input.push("*")
        break
      default:// all other numbers
        input.push(parseInt(elementID) )
        theDisplay.insertAdjacentHTML('beforeend', elementID)
}
  });
}
