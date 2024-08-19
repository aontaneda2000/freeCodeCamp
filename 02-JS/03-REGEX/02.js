/* Haz coincidir cadenas literales..

En esta regex cualquier otra coincidencia como wAlDo , WALDO devolvera false.
*/
let waldoIsHiding = "Somewgere Waldo is hiding is this text";
let myRegex = /Waldo/;
let result = myRegex.test(waldoIsHiding);
