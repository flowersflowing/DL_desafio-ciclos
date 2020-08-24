var opcion = prompt('Hola, elige un número entre el 1 y el 6');

//Si ingresa 1

if (opcion == 1) {
    opcion1();
};

//Si ingresa 2

if (opcion == 2) {
    opcion2();
};

//Si ingresa 3

if (opcion == 3) {
    opcion3();
};

//Si ingresa 4

if (opcion == 4) {
    opcion4();
};

//Si ingresa 5

if (opcion == 5) {
    opcion5();
};

//Si ingresa 6

if (opcion == 6) {
    document.write('Hola, ingresaste el 6 y no había instrucción para este caso.');
};


//FUNCIONES

//Función para pedir un número del 1 al 100 y que devuelva en consola todos los números del 1 al seleccionado

function opcion1 () {
    let number = prompt('Por favor ingresa un número entre el 1 y el 100');
    // let patron = /[1-100]/;
    
    if (number <= 100) {
        for (let i = 1; i <= number; i++) {
            console.log(i);
        }
    }
    
    else {
        opcion1();
    }
};

//Función que pregunte por el color del caballo, si responde blanco termina, si no continua haciéndole la pregunta

function opcion2 () {
    let horseColor = prompt('¿De qué color es el caballo blanco de Napoleón?');
    
    if (horseColor != 'blanco') {
        opcion2();
    }

    else (horseColor == 'blanco')
        console.log('OK');
};

//Función que pide notas y devuelde el promedio redondeado en un alert

function opcion3 () {
    let promMath = parseInt(prompt('Ingresa tu promedio de Matemáticas'));
    let promPhys = parseInt(prompt('Ingresa tu promedio de Física'));
    let promSci = parseInt(prompt('Ingresa tu promedio de Ciencias'));

    let promedio = (promMath + promPhys + promSci) / 3;
    //Redondear
    alert('Tu promedio de notas es: ' + promedio);
};

//4.- Pedir el nombre de tres frutas, c/u de manera individual. Una vez ingresadas todas deben imprimirse todas por consola, a excepción de manzana.

function opcion4 () {
    let roja = prompt('Ingresa el nombre de una fruta roja');
    let verde = prompt('Ingresa el nombre de la fruta verde');
    let amarilla = prompt('Ingresa el nombre de una fruta amarilla');
    
    const patron = /manzana/gim;
    let arrFrutas = [roja, verde, amarilla];

    for (const fruta of arrFrutas) {
        console.log(fruta);        
    }

    /* let arrFrutas = {
        fruta1: roja, 
        fruta2: verde, 
        fruta3: amarilla,    
    };
    console.log(arrFrutas.fruta1, arrFrutas.fruta2, arrFrutas.fruta3);*/
};

//5.- Pedir nombre, determinar la cantidad de vocales y consonantes y mostrar la cantidad de cada uno en pantalla con alert.

function opcion5 () {
    let name = prompt('Hola, por favor ingresa tu nombre:');
    
    let vowels = name.match(/[aeiouáéíóú]/gim);
    let consons = name.match(/[^aeiouáéíóú]/gim);
    
    alert('Tu nombre tiene ' + vowels.length + ' (' + vowels + ') vocales y tiene ' + consons.length + ' (' + consons + ') consonantes.');
};