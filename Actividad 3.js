//ACTIVIDAD 3.1

//Discoteca

let nombre = prompt("Introduce tu nombre");
let edad = prompt("Introduce tu edad");

if (edad >= 18){
    console.log("Puedes entrar a la discoteca");

    switch(nombre){
        case "Mario":
            console.log("Puedes entrar al area VIP");

        case "Carlos":
            console.log("Puedes entrar al area VIP");
    }
} 

else{
    console.log("No puedes entrar a la discoteca")
}

//ACTIVIDAD 3.2

//Juego de Piedra, papel o Tijera

var namePlayer1 = prompt("Name Player 1");
var namePlayer2 = prompt("Name Player 2");

var electionPlayer1 = prompt(namePlayer1 + ' ' + "make a choice");
var electionPlayer2 = prompt(namePlayer2 + ' ' + "make a choice");

if(electionPlayer1 == "Rock")
    switch(electionPlayer2){
        case "Rock":
            alert("Draw");
        break;

        case "Paper":
            alert(namePlayer2 + ' ' + 'wins');
        break;

        case "Scissors":
            alert(namePlayer1 + ' ' + 'wins')

} else if(electionPlayer1 == "Paper")
    switch(electionPlayer2){
        case "Paper":
            alert("Draw");
        break;

        case "Rock":
            alert(namePlayer1 + ' ' + 'wins');
        break;

        case "Scissors":
            alert(namePlayer2 + ' ' + 'wins')

} else if(electionPlayer1 == "Scissors")
    switch(electionPlayer2){
        case "Scissors":
            alert("Draw");
        break;

        case "Rock":
            alert(namePlayer2 + ' ' + 'wins');
        break;

        case "Paper":
            alert(namePlayer1 + ' ' + 'wins')
            
}


//ACTIVIDAD 3.3

var election = prompt("Ingresa un número");

if(election / 2 === 0){
    alert("Tu número es divisible entre 2")
} else{
    alert("Tu número no es divisible entre 2")
}


//ACTIVIDAD 3.5

var election = prompt ("Ingresa un numero")

if (election == "1000"){
    alert("Ganaste un premio")
}else{
    alert ("Lo sentimos, sigue participando")
}

// ACTIVIDAD 3.6 

var election1 = prompt("Ingresa un número")
var election2 = prompt("Ingresa un segundo número")

if (election1 < election2){
    alert(election1 + " " + "es un número menor")
} else if (election2 < election1){
    alert(election2 + " " + "es un número menor")
} else{
    alert("Ambos números son iguales")
}

//ACTIVIDAD 3.7

var election1 = prompt("Ingresa un número")
var election2 = prompt("Ingresa un segundo número")
var election3 = prompt ("Ingresa un tercer número")

if(election1 > election2 && election1 > election3){
    alert(election1 + ' ' + 'es un número mayor')
} else if(election2 > election1 && election2 > election3 ){
    alert(election2 + ' ' + 'es un número mayor')
} else if (election3 > election1 && election3 > election2){
    alert (election3 + ' ' + 'es un número mayor')
} else if(election1 == election2 && election1 == election3 && election2 == election3){
    alert("Todos los números son iguales")
} else if(election1 > election2 && election1 == election3){
    alert("El número 1" + ' ' + 'y' + ' ' + "el número 3" + ' ' + 'son números mayores e iguales')
} else if (election1 > election3 && election1 == election2){
    alert("El número 1" + ' ' + 'y' + ' ' + "el número 2" + ' ' + 'son números mayores e iguales')
} else if (election2 > election1 && election2 == election3){
    alert("El número 2" + ' ' + 'y' + ' ' + "el número 3" + ' ' + 'son números mayores e iguales')
}
