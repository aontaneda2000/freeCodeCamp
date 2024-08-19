/* slice() utilizado para extraer elementos a un nuevo arreglo dejando intacto el arreglo al que se llama
  1. índice en el que se inicia la extracción, 
  2 el segundo es el índice en el que se detiene la extracción (la extracción se producirá hasta el índice, pero sin incluir el elemento en este índice).

*/
let weatherConditions = ["rain", "snow", "sleet"];

let todaysWeather = weatherConditions.slice(1, 3);

console.log(todaysWeather);
