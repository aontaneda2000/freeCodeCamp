/* 
splice() Este metodo permite eliminar elementos de cualquier parte del arreglo

splice recibe 3 parametros representados por los indice del arreglo que empiezan en 0
  1. representa el índice del arreglo a partir del cual se empiezan a eliminar los elementos
  2.  indica el número de elementos a eliminar

*/

let array = ["today", "was", "not", "so", "great"];

array.splice(2, 2);

let array2 = ["I", "am", "feeling", "really"];

let newArray = array2.splice(3, 2);
console.log(newArray);

/* instruccion

Hemos inicializado un arreglo arr. Usa splice() para eliminar elementos de arr, de forma que sólo contenga elementos que sumen el valor de 10.

*/

const arr = [2, 4, 5, 1, 7, 5, 2, 1];

arr.splice(1, 4);
console.log(arr);
