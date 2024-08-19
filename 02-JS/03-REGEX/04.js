/* Capitalizacion sirve para que en mi regex no diferencia entre mayus  o minis por lo cual se utiliza la bandera "i"

holA, hOla, HOLA, ETC..

*/
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);

console.log(result);
