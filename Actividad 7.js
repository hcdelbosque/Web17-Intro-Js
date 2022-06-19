
//ACTIVIDAD 7.1.1

let oracion = prompt('Inserta una oracion');
let word = prompt ('Inserta una palabra');

function analizar (oracion, word){
    arrayOracion = oracion.split(' ');

        for(i = 0; i < arrayOracion.length; i++){
            if(arrayOracion[i] == word){
                connsole.log(true);
            } else{
                console.log(false);
            }
        }
}

console.log(analizar(oracion, word));



// ACTIVIDAD 7.1.2

const numbers = [1, 2, 3, 4, 10, 11];

function sumar(x){
    let sum = 0;
    for(i = 0; i < x.length; i++){
        sum+= x[i];
}
    return sum
}
 console.log(sumar(numbers))


 // ACTIVIDAD 7.1.3

let wrdd = prompt("Inserta una palabra");

function isPalindrome2(word){
    let wrdArray = word.split('');
    let wrdReverse = wrdArray.reverse().join('');

    if(word == wrdReverse){
        return true
    } else{
        return false
    }
}

console.log(isPalindrome2(wrdd))


 // PART2 
 let wrd = prompt("Inserta una palabra");

 function isPalindrome(wrd){

    let wrdLeft = wrd.slice(0, Math.trunc(wrd.length/2));
    let wrdRight = (wrd.length % 2 == 0) ? (wrd.slice((wrd.length/2), wrd.length)) : (wrd.slice((wrd.length/2)+1, wrd.length))

    let wrdRightReverse = wrdRight.split('').reverse().join('');

    if(wrdLeft == wrdRightReverse){
        return true
    } else{
        return false 
    }
 }

console.log(isPalindrome(wrd))


//ACTIVIDAD 7.1.4


let escala = prompt("Escribe si conoces Fahrenheit o Celsius");
let temperatura = prompt("Inserta la temperatura que conoces para conversion");


function conversion(escala, temperatura){

    if(escala == "Celsius"){
        fahrenheit = (temperatura*1.8)+32;
        return fahrenheit + " grados Fahrenheit";
    }

    if(escala == "Fahrenheit"){
        celsius = (temperatura-32)/1.8;
        return celsius + " grados Celsius";
    } 
}

console.log(conversion(escala, temperatura));


