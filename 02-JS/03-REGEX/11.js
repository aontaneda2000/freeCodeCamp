/* ^ El conjunto de caracteres negados solo es utilizado en caracteres numericos y letras  */

let quoteSample = "3 blind mice";
let myRegex = /[^aeiou0-9]/gi;

let result = quoteSample.match(myRegex);
