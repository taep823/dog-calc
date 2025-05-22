let input = document.querySelector(".input");
let clearButton = document.querySelector(".clear");
let equalsButton = document.querySelector(".equals");
let result = document.querySelector(".result");
 result.style.margin= "20px";
 result.style.color="white";
 result.style.textShadow="2px 2px black ";



const calculateDoggieAge = (humanAge) => {
console.log("run")

  
  let doggieAge=(humanAge*7);
console.log(doggieAge)
 result.innerHTML= `Your doggie is ${doggieAge} years old in human years!`;
 result.style.fontFamily= 'Poppins', sans-serif;

}



equalsButton.addEventListener("click" , ()  => {

  
  console.log("click");
  
let x=input.value

console.log(x)

calculateDoggieAge(x)


})



// DO NOT TOUCH THIS CODE
clearButton.onclick = function() {
  input.value = "";
  result.innerHTML = "";

}
