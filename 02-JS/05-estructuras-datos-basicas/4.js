/* 
Existen otros metodos como:
pop: elimina un elemento del final del array
shift: elimina un elemento al principio del array

*/

let greetings = ["whats up?", "hello", "see ya"];

greetings.pop();
greetings.shift();

let popped = greetings.pop();

console.log(popped);
console.log(greetings);

/* INSTRUCCION:
Hemos definido una función, popShift, el cual toma un arreglo como argumento y devuelve un nuevo arreglo. Modifica la función, usando pop() y shift(), para eliminar el primer y el último elemento del arreglo, y asignar los elementos eliminados a sus correspondientes variables, de modo que el arreglo que se devuelva contenga sus valores.
*/

function popShift(arr) {
  let popepd = arr.pop();
  let shifted = arr.shift();

  return [shifted, popepd];
}

console.log(popShift(["challengue", "is", "not", "complete"]));
