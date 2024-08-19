/* Ejercicio Encuentra uno o más criminales en una cacería

Va a encontrar coincidencias de letras que se repiten:
"z"
"zzzzzz"
"ABCzzzz"

"/ z+ / "
  */
let str = "zzzzzz";

let reCriminals = /z+/;
let result = str.match(reCriminals);
console.log(result);
