/* splice() 
  3. Recibe los parametros que se van a insertar despues del indice especificado

*/

let numbers = [10, 11, 12, 12, 15];

const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);

console.log(numbers);
