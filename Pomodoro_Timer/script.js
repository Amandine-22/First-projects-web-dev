// Selecting the button to be able to start the timer

const Timer1 = document.getElementById("timer1");
const buttons = document.querySelectorAll(".button");

let temps = 0;
let intervalId = null;

buttons.forEach(button =>{
    button.addEventListener("click", () =>{
        clearInterval(intervalId)
        let DepartMinutes = 0; 
        switch(button.id){
            case "btn_10":
                DepartMinutes = 10;
                break;
            case "btn_25":
                DepartMinutes = 25;
                break;
            case "btn_5":
                DepartMinutes = 5; 
                break;
            case "btn_45":
                DepartMinutes = 45;
                break;
            case "btn_15":
                DepartMinutes = 15;
                break;
        } 
        temps = DepartMinutes*60; 
        intervalId = setInterval(DiminuerTemps, 1000);
    
    })
})

function DiminuerTemps(){
    let minutes = parseInt(temps/60, 10);
    let secondes = parseInt(temps%60, 10);
    
    // Ameliorer l'affichage 
    minutes = minutes < 10 ? "0"+minutes : minutes ;
    secondes = secondes < 10 ? "0" + secondes : secondes ;

    // Afficher le temps restant 
    Timer1.innerText = `${minutes}:${secondes}`;
    temps = temps <=0 ? 0 : temps-1
    
    if (temps === 0){
        clearInterval(intervalId)

    }
}

