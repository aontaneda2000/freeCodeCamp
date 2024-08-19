/* indexOf() utilizado para buscar elementos en un arreglo

1. Devuelve el indice en el que se encuentra ese elemento.
2. Devuelve -1 si no encuentra ese elemento
3. Si existen mas elementos, Devuelve el primer indice donde se encuentra.
*/

/* INSTRUCCION

indexOf() puede ser increíblemente útil para verificar rápidamente la presencia de un elemento en un arreglo. Hemos definido una función, quickCheck, que toma un arreglo y un elemento como argumentos. Modifica la función usando indexOf() para que devuelva true si el elemento pasado existe en el arreglo, y false si no existe.

*/

function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}

let saveQuick = quickCheck(["squash", "onions"], "onions");

console.log(saveQuick);

/* SOLUCION
Si indexOf Encuentra ese elemento en el indice 0 o en otro indice mayor a 0 devolvera true osea que si existe ese elemento en el arreglo
y si no encuentra ese elemento en el arreglo devolvera false o "-1"

*/
