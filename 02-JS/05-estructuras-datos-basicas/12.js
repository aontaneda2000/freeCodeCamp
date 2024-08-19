/* 
Objetos colecciones de clave - valor 

 son piezas de datos (valores) asignados a identificadores únicos llamados propiedades (claves)


 Dos maneras de agregar inf al objeto

 1. notacion del punto
 2. notacion del corchete: utilizado cuando existe espacios en la propiedad o cuando se quiere utilizar el nombre de una variable para nombrar la propiedad
*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

foods.origin = "bananas";
foods["arroz con guatitta"] = 21;

let arroz = "arroz con huevo";

foods[arroz] = 12.2;
console.log(foods);
