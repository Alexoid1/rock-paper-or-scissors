let userScore=0;
let compScore=0;
const userScore_span= document.getElementById("userscore");
const computerScore_span= document.getElementById("computerscore");
const scoreBoard_div= document.querySelector(".score");
const result_div= document.querySelector(".resultados>p");
const roca_div= document.getElementById("roca");
const papel_div= document.getElementById("papel");
const tijeras_div= document.getElementById("tijeras");

function eleccionDePc(){
    const elec=["roca", "papel" , "tijeras"];
    const azar=(Math.floor(Math.random()*3));
    return elec[azar];
}
function win(eleccionUsuario , computerChoice){
    userScore++;
    userScore_span.innerHTML= userScore;
    
    result_div.innerHTML = eleccionUsuario+ ' le gana a ' + computerChoice+ ' tu ganas'; 
    document.getElementById(eleccionUsuario).classList.add('greenglow');
    setTimeout(function(){document.getElementById(eleccionUsuario).classList.remove('greenglow')
},300);


}
function lose(eleccionUsuario , computerChoice){
    compScore++;
    computerScore_span.innerHTML = compScore;
    result_div.innerHTML = eleccionUsuario+ ' pierde ante ' + computerChoice+ ' tu pierdes';
    document.getElementById(eleccionUsuario).classList.add('redglow');
    setTimeout(function(){document.getElementById(eleccionUsuario).classList.remove('redglow')
},300);


}
function draw(eleccionUsuario , computerChoice){
    result_div.innerHTML = eleccionUsuario+ ' es igual a ' + computerChoice+ ' hay un empate';
    

}




function game(eleccionUsuario){
    const computerChoice = eleccionDePc();
    switch(eleccionUsuario + computerChoice){
        case "rocatijeras":
        case "tijeraspapel":
        case "papelroca":
            win(eleccionUsuario , computerChoice);
            break;
        case "rocapapel" :
        case "papeltijeras" :
        case "tijerasroca":
            lose(eleccionUsuario , computerChoice);
            break;
        case "rocaroca":
        case "papelpapel":
        case "tijerastijeras":
            draw(eleccionUsuario , computerChoice);
            break;               


    }
    
}

function main() {
    roca_div.addEventListener('click', function(){
    game("roca");
})
papel_div.addEventListener('click', function(){
    game("papel");
})
tijeras_div.addEventListener('click', function(){
    game("tijeras");
})
}
 main();