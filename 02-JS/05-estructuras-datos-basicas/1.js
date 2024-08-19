/*
1 Arreglos unidimensionales: Arreglo de un solo nivel o que no tiene arreglos anidados dentro de el
2 Arreglos multidimensionales: Es un arreglo que contiene arreglos anidados 

Todos los arreglos contienen la propiedad Array.length
*/

/* 1   */
let simpleArray = ["one", 2, "three", true, false, undefined, null];

console.log(simpleArray.length);

/* 2 */

let complexArray = [
  [
    {
      one: 1,
      two: 2,
    },
  ],
  [
    {
      three: 3,
      four: 4,
    },
  ],
  [
    {
      a: "a",
      b: "b",
    },
  ],
];
