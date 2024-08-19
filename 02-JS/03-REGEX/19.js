/* "\W" Utilizado para encontrar caracteres no alfanumericos como:
  &/%$
 */

let shortHand = /\W/;

let number = "22$";
let result = number.match(shortHand);
console.log(result);
