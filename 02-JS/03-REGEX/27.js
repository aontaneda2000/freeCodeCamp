/* Para especificar un cierto número de patrones, simplemente pon ese número entre corchetes.

{4}

INSTRUCCION
Modifica la expresión regular timRegex para hacer coincidir con la palabra Timber solo cuando esta tiene cuatro letras m
*/

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
