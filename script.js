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
    opción3();
};

//Si ingresa 4

// if (opcion == 4) {
//     4.- Pedir el nombre de tres frutas, c/u de manera individual. Una vez ingresadas todas deben imprimirse todas por consola, a excepción de manzana.
// };

//Si ingresa 5

// if (opcion == 5) {
//     5.- Pedir nombre, determinar la cantidad de vocales y consonantes y mostrarlos en pantalla con alert.
// };

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
    // let white = /['blanco']/
    
    if (horseColor != 'blanco') {
        opcion2();
    }

    else (horseColor == 'blanco')
        console.log('OK');
};

//3.- pedir promedio de notas de Matemáticas, Física y Ciencias. Indicar en pantalla el promedio de notas (alert). El promedio de notas debe estar redondeado a un número entero.

function opción3 (prom1, prom2, prom3) {
    let promMath = prompt('Ingresa tu promedio de Matemáticas');
    let promPhys = prompt('Ingresa tu promedio de Física');
    let promSci = prompt('Ingresa tu promedio de Ciencias');
};