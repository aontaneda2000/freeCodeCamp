function factorialize(num) {
  let resultado = 1;

  for (let i = 1; i <= num; i++) {
    /* console.log(5*i);
    console.log( i); */
    console.log(resultado);
    console.log(i);
    resultado = resultado * i;
    console.log(resultado);
  }

  console.log(resultado);

  return resultado;
}

factorialize(5);
