const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

/* Esto imprime cada sub-elemento dentro de arr uno a la vez. Ten en cuenta que para el bucle interior, estamos comprobando el .length de arr[i], ya que arr[i] es en sí mismo es un arreglo.
 */
