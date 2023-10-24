"use strict";
// ECMASCRIPT 6
// Declarar variable en js
// var variale global
// let variable 
// const constate
// let y const nacen porque son variables con alcances o scope

// let nombre = prompt ('dame tu nombre');
// console.log ('mi nombre es ' + nombre);
// document.write(nombre); 

// let edad = prompt ('dame tu edad');
// // let edadmenos = edad-5;
// console.log (edad + 5);

//  let texto = 'Mi nombre es Lorenzo "otro texto"';
// //  console.log (texto);

//  let numero = 4;
//  String(numero);
//  Number(numero);

//  let suma = true;
//  let menor = (10<5);
//  console.log (menor);

// let fecha = new Date();
// // operadores aritmeticos
// let suma = 1+2;
// let resta =1 -2;
// let multiplicacion = 1*2;
// let division =1/2;
// let mod = 10%5; // residuo 

// let uno = 1;
// uno++; //incremento en uno
// console.log(uno);

// let dos = 2;
// dos--;
// console.log(dos);

// let mayorque = 5>3;
// let menorque = 3<5;
// let mayorigualque = 3>=2;
// let menorigualque = 6<=7;
// let igual = 10=='10';
// let exactamenteigual = 10===10;
// let diferente = 10 != 30; 


// Tipos de datos especiales o compuesto

// Arrays- vectores conjunto de datos y pueden ser diferentes  tipo de datos, inician en 0
// let frutas = ['pera', 'manzana', 'platano', null ];
// let numeros = ['cinco', 6, 23, 'veinte']; //diferentes tipos de datos

// Objetos

// let persona= {nombre: 'chantal', edad: 38, correo: 'ramirezchantal@gmail.com'}

//  objeto JSON (javascript object notation)
// formato de intercambio de datos ligero y descriptivo

// let personas = [
//     {nombre: 'chantal',edad: 38, corre: 'ramirezchantal@gmail.com'},
//     {nombre: 'luis',edad: 38, corre: 'pepe@gmail.com'},
//     {nombre: 'pepe',edad: 38, corre: 'luis@gmail.com'},
//     persona,
// ]
// operadores logicos o boolean (ture or false) 
let numero1 = 10;
let numero2 = 20; 

// AND O Y 
let AND  = (numero1 > 10 && numero2 > 10);
// para que un AND tenga resultado true, todas las condiciones
// se deben cumplir o ser verdaderas, SI UNA ES FALSA el resultado es false

// OR O O

let or =(numero1 > 10 || numero2 > 10);
// para que un OR tenga resultado true, SE DEBE DE CUMPLIR UNA SOLA CONDICION,
// si todas son falsas entonces es false.

// NOT O NEGACION convertir a lo contrario
let NEGACION = !(numero1 > 10); true