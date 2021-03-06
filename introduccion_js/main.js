/* - uso de todos los tipos de variables que js soporta y hacer console.log de ellos
- operadores matemáticos
- negaciones y falsys
- operadores and y or (tabla de la verdad y tabla de la verdad disyuntiva)
- comparadores (==, ===, >=, >, .. etc) */

/* Tipos de Variables en js */

var numberVar = 1;
console.log(numberVar)

var stringVar = 'hola';
console.log(stringVar)

var booleanVar = true;
console.log(booleanVar)

var arrayVar = ['uno', 'dos', 'tres'];
console.log(arrayVar)

var objVar = { nombre: 'Juanito', apellido: 'Pérez', edad: 30 };
console.log(objVar)

let x = 5;
console.log(x)


let y = 8;
console.log(y)

const dog = { nombre: 'Michael Scott', raza: 'quiltro', edad: '2 años', crias: 0 };

/* Operadores matemáticos */

var number01 = 10;
var number02 = 5;

console.log(number01+number02)
console.log(number01-number02)
console.log(number01*number02)
console.log(number01/number02)
console.log(number01%number02)
console.log(number01**number02)

/* Negaciones y Falsys */

var falsy01 = null;
var falsy02 = 0;
var falsy03 = false;
var falsy04 = "";

console.log(falsy01)
console.log(falsy02)
console.log(falsy03)
console.log(falsy04)

/* operadores and y or (tabla de la verdad y tabla de la verdad disyuntiva) */

const var1 = true;
const var2 = false;

const and01 = var1 && var1
const and02 = var1 && var2
const and03 = var2 && var1
const and04 = var2 && var2

console.log(and01, and02, and03, and04)

const or01 = var1 || var1
const or02 = var1 || var2
const or03 = var2 || var1
const or04 = var2 || var2

console.log(or01, or02, or03, or04)

/* comparadores (==, ===, >=, >, .. etc) */

var comp1 = 1;
var comp2 = 2;
var comp3 = 1;
var comp4 = '1';

console.log(comp1==comp2)
console.log(comp1==comp3)
console.log(comp1==comp4)

console.log(comp1===comp2)
console.log(comp1===comp3)
console.log(comp1===comp4)

console.log(comp1!=comp2)
console.log(comp1!=comp3)
console.log(comp1!=comp4)

console.log(comp1!==comp2)
console.log(comp1!==comp3)
console.log(comp1!==comp4)

console.log(comp1>=comp2)
console.log(comp1<=comp3)
console.log(comp1<comp4)
console.log(comp1>comp4)
console.log(comp1>=comp4)
console.log(comp1<=comp4)