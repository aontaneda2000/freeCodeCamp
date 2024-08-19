/* {} Especificadores de cantidad utilizado para buscar letras que coincidan un rango determinado de veces especificado en las llaves*/

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);
console.log(result);
