/* SPREAD OPERATOR
Operador propagacion utilizado para copiar elementos de un arreglo a otro.
"..."
*/

let thisArray = [true, true, undefined, false];

let thatArray = [...thisArray];

console.log(thatArray);

/* INSTRUCCCION

Hemos definido una función, copyMachine que toma arr (un arreglo) y num (un número) como argumentos. Se supone que la función devuelve un nuevo arreglo compuesto por num copias de arr. Hemos hecho la mayor parte del trabajo por ti, pero aún no funciona del todo bien. Modifica la función usando sintaxis de propagación para que funcione correctamente (
*/

function copyMachine(arr, num) {
  let newArr = [];

  while (num >= 1) {
    newArr.push([...arr]);

    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
