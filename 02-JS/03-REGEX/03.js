/* Coincide una cadena literal con diferentes posibilidades..

El operador OR o alternation busca dentro de la cadena si hay una palabra que coincida con la regex

*/

let petString = "James has a pet fish";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
console.log(result);
