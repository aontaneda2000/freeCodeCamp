/* + Permite buscar los caracteres que coinciden en una cadena al menoz una vez y pueden repetirse.

/a+/ -> aab : ['aa']
/a+/ -> aaba : ['aa'], ['a']

*/

let difficultSpelling = "Missingpisi";
let myRegex = /s+/gi;

let result = difficultSpelling.match(myRegex);
console.log(result);
