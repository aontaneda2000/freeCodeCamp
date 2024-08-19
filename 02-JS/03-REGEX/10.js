/* Usar el guion de caracteres no esta limitado solo a letras si no tambien se puede utilizar con numeros  

rango de letras desde la h hasta la s 
rango de numeros desde el 2 hasta el 6
*/

let quoteSample = "Blue";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);
console.log(result);
