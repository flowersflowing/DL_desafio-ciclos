var opcion = prompt('Hola, elige un número entre el 1 y el 6');

//Si ingresa 1

if (opcion == 1) {
    opcion1();
};

//Si ingresa 2

if (opcion == 2) {
    opcion2();
};

// if (opcion == 3) {
//     3.- pedir promedio de notas de Matemáticas, Física y Ciencias. Indicar en pantalla el promedio de notas (alert). El promedio de notas debe estar redondeado a un número entero.
// };

// if (opcion == 4) {
//     4.- Pedir el nombre de tres frutas, c/u de manera individual. Una vez ingresadas todas deben imprimirse todas por consola, a excepción de manzana.
// };

// if (opcion == 5) {
//     5.- Pedir nombre, determinar la cantidad de vocales y consonantes y mostrarlos en pantalla con alert.
// };

//Función para pedir un número del 1 al 100 y que devuelva en consola todos los números del 1 al seleccionado

function opcion1 (num) {
    let number = prompt('Por favor ingresa un número entre el 1 y el 100');
    // let patron = /[1-100]/;
    if (number <= 100) {
        for (let i = 1; i <= number; i++) {
            console.log(i);
        }
    }

    else {
        prompt('Ingresa un número del 1 al 100');
    }
};

//     2.- preguntar al usuario ¿De qué color es el caballo blanco de Napoleón?. Si responde algo distinto de blanco, debe volver a hacer la misma pregunta. Si responde blanco está ok.

function opcion2 (num) {
    prompt('¿De qué color es el caballo blanco de Napoleón?');
    
    if 
}

