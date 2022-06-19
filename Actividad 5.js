//ACTIVIDAD 5.1

let numeros = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0 ];

for( let i = 0; i < numeros.length; i++){
    if(numeros[i] > 3){
        console.log('El número ' + numeros[i] + ' es mayor a 3')
    } 
}

//ACTIVIDAD 5.2

var i = 0;
let numbers =[];

while(i <= 5 ){
    let nums = prompt('Ingresa un número');
    numbers.push(nums);
    i++
}
console.log(numbers)


//ACTIVIDAD 5.3

for(let i =  0; i < numbers.length; i++){
    numbers.sort()
}