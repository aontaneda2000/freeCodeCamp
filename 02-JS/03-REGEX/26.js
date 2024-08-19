/* para hacer coincidir solo con la cadena hah cuando la letra a aparezca al menos 3 veces,

let A2 = "haaaah";
la expresión regular sería /ha{3,}h/
*/

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multiple = /ha{3,}h/;

multiple.test(A4);
multiple.test(A2);
let result = multiple.test(A100);
console.log(result);
