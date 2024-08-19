/* 
"$" Utilizado para buscar patrones al final de las cadenas
*/

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
let result = storyRegex.test(theEnding);

console.log(result);
