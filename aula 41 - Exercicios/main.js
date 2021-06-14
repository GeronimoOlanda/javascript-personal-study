//funcao para descobrir o valor maior

let maior = (a , b) => {
    return (a > b) ? `O valor ${a} é maior do que ${b}` : `O valor ${b} é maior que ${a}`;
}
console.log(maior(30, 20));


//funcao que receba a altura e a largura
let ePaisagem = (largura, altura) => {
    return (largura > altura) ? true: false;
}

console.log(ePaisagem(1920, 1080));


//exercicio FizzBuzz

let fizzbuzz = (numero)=>{
    if(numero % 3 == 0 && numero % 5 == 0) return 'FizzBuzz';
    if(numero % 3 == 0)return 'Fizz';
    if(numero % 5 == 0)return 'Buzz';
    return numero;
    
}

for(let i = 0; i<=100;i++){
    console.log(i, fizzbuzz(i));
}