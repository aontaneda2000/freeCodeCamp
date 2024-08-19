/* 
[^0-9]  --->"\D" Atajo busca caracteres que no sean numericos

*/
/* INSTRUCCION
 Usa la clase de caracteres abreviada \D para contar cuántos caracteres que no sean dígitos hay en los títulos de las películas. */

let movieName = "2001: A Space Odyssey";

let noNumRegex = /\D/g;

let result = movieName.match(noNumRegex);

console.log(result);
