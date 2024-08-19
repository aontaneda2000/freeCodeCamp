/* Haz coincidir..

#Clases de caracteres permiten definir grupo de caracteres en un grupo de corchetes 

/b[aiu]g/
es decir...
  bag 
  big
  bug 
*/

let quoteSample = "Beware of bugs in the above code ";
let vowelRegex = /[aiou]/gi;

let result = quoteSample.match(vowelRegex);
console.log(result);
