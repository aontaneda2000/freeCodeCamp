/* 
"\d" Atajo utilizado para buscar patrones de digitos del [0-9]


INSTRUCCION:
Usa la clase de caracteres abreviada \d para contar cuántos dígitos hay en los títulos de las películas. Los números escritos ("seis" en lugar de 6) no cuentan.
*/

let movieName = "2001: A space";
let numRegex = /\d/g;

let result = movieName.match(numRegex);

let result2 = movieName.match(numRegex).length;
console.log(result);
