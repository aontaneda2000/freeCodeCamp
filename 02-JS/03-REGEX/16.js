/* 
"^" Utilizado para buscar una palabra al princio de la cadena


*/

let firstString = "Ricky is first and can be found";
let firstRegex = /^Ricky/;

firstRegex.test(firstRegex);

let notFirst = "You cant find Ricky now";
let result = firstRegex.test(notFirst);
console.log(result);
