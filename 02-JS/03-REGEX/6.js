/* bandera g:  extrae mas de un patron a la vez de las coincidencias encontradas */
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let result = twinkleStar.match(starRegex);
console.log(result);
