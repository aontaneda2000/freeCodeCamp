/* /\s/ busca espacios en blanco,  también con los caracteres de retorno de carro, tabulaciones, alimentación de formulario y saltos de línea.s   */

let whiteSpace = "Whitespace ds ";
let spaceRegex = /\s/g;

let result = whiteSpace.match(spaceRegex);
console.log(result);
