const numeros = [1,2,3,4,5,6,7,8,9];


const [um, dois, ...resto] = numeros;


console.log(um, dois);
console.log(resto);

let soma = 100;
let par = (soma %2 ==0) ? 'A soma do valor é Par' : 'A soma dos valores é impar';

console.log(par);
console.log('\n\n');

const letras = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff'];

const [a, b, c] = letras;

console.log(a, b, c);