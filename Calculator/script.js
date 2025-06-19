const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector(".Clear");

let expression = ""

buttons.forEach(button =>{
  button.addEventListener("click", () => {
    const value = button.textContent;
    
    if (value === "=") return;
    expression += value;
    
    screen.textContent = expression;
  });
});

clear.addEventListener("click", () => {
  expression = "";
  
  screen.textContent = "";
});

document.getElementById("eq").addEventListener("click", () => {
  try { 
    const result = eval(expression); 
    screen.textContent = result;
    expression = result.toString();
  } catch{ 
    screen.textContent = "ERREUR";
    expression = "";
   };
});


