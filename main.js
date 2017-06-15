const keys = document.querySelectorAll(".keys")
const theDisplay = document.querySelector(".display")
var input = []
let answer = ''

for(i = 0; i < keys.length; i++){
  keys[i].addEventListener('click', function () {
    switch(i){
      case 0: // clear
        console.log([0]);
            let input = []
            theDisplay.innerHTML = ''
            break
      case 12:// equals
          let answer = eval(input.join)
          theDisplay.textContent = answer
          break
      case 13: case 15: case 16:
          input.push(keys[i].innerHTML)
          break
      case 14:// multiply
          input.push("*")
          break
      default:// all other numbers
          input.push(keys[i].textContent)
          theDisplay.insertAdjacentHTML('beforeend', keys[i].textContent)
}
  });
}
