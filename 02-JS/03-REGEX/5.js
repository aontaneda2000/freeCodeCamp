/* match() permite extraer las cadenas que coinciden con la regex 
  F. recibe la regex
*/
let extractStr = 'Extract the word "coding" from this string ';

let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
console.log(result);
