/* 
clases de caracteres abreviados:
Existen atajos para buscar letras del alfabeto o numeros con [A-Za-z0-9_]  y este atajo lo remplaza '/\w/'

*/
/* INSTRUCCION

Utiliza la clase de caracteres abreviada \w para contar el número de caracteres alfanuméricos en varias citas y cadenas.
*/

let quoteSample = "The five boxing wizards jump";
let alphabetRegexV2 = /\w/g;

let result = quoteSample.match(alphabetRegexV2).length;

console.log(result);
