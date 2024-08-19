/* Haz coincidir las letras del alfabeto..

"-" Permite definir un rango de caracteres en corchete en la regex

Buscara coincidencias desde la letra a hasta la e
[a-e]
*/
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;

let result = catStr.match(bgRegex);
let result2 = batStr.match(bgRegex);
let result3 = matStr.match(bgRegex);
