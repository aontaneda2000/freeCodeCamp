/* Los arreglos son mutables es decir se pueden modificar  los elementos por lo cual existen Metodos de arreglos para almacenar o eliiminar mas elementos*/

function mixedNumber(arr) {
  arr.push("VII", 8);
  arr.unshift(1, 2, 3);
  return arr;
}

console.log(mixedNumber(["IV", 5, "six"]));
