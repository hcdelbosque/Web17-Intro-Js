//ACTIVIDAD 4.2
//Error de entendimiento
var number = prompt("Inserta hasta que número que deseas multiplicar")
let i = 1;

while(i <=number){
    console.log('5 x ' + i + " = " + (5*i));
    i++;
}

        //ACTIVIDAD 4.2.2
        //Actividad segun instrucciones 
        var number = prompt("Inserta el número multiplo al que deseas conocer")
        let c = 1;

        while(c <= number){
            if(c % 5 == 0){
                console.log(c);
            }
            c++
        }




//ACTIVIDAD 4.3
//Error de entendimiento 
var number = prompt("Inserta hasta que número que deseas multiplicar")
let a = 1;

do{
    console.log('5 x ' + a + " = " + (5*a));
    a++; 
} while( a <= number);



        //ACTIVIDAD 4.3.2
        //Actividad segun instrucciones 
        var number = prompt("Inserta el número multiplo que deseas conocer")
        let d = 1;

        do{
            if(d % 5 == 0){
                console.log(d);
            }
            d++
        } while( d <= number)




//ACTIVIDAD 4.4
//Primer intento 

var contador = 0;
for (var b = 1; b<= 50; b++){
    if(b / 2 !== 0) //Uso ausente del simbolo "%" y la negacion de resultado como "!="
        console.log(b + " es un número impar") 
        contador = contador + 1 
    }
console.log( "Existen " + contador + " números impares dentro de 50")


        //ACTIVIDAD 4.4.2 
        //Segundo intento (apoyo)
        var contador = 0;
        for(var b = 1; b <= 50; b++){
            if(b % 2 != 0){
                console.log(b + ' es un numero impar')
                contador = contador + 1
            }
        }
        console.log("Existen " + contador + " números impares dentro de 50")