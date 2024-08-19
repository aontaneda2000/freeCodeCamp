/* SPREAD OPERATOR
  utilizado tambien para combinar arreglos o insertar todos los elementos de un arreglo en otro en cualquier indice
  
  */

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];

  return sentence;
}

console.log(spreadOut());
