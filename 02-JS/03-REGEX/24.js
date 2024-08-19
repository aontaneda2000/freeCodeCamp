/*
" \S" Utilizado para buscar caracteres que no sean espacios en blanco, es decir letras, numericos, retorno de carro, tabulaciones, alimentación de formulario y saltos de línea.
 */
let sample = "Whitespace is important";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);
console.log(result);
