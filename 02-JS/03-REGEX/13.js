/* 
El caracter * sirve para  coincidir caracteres que aparecen cero o más veces.

*/
let chewieQuote = "Aaa12a";
let chewieRegex = /Aa*/;

let result = chewieQuote.match(chewieRegex);

console.log(result);
