// o yield executa passo a passo, ou seja, executa uma coisa, para e depois executa denovo caso seja necessario
function* geradora1(){
    yield 'Valor1';
    yield 'Valor2';

    yield 'Valor3';
}
const g1 = geradora1();

if(g1.next.done != true){
    console.log(g1.next().value);//next().value pega o valor da funcao
    console.log(g1.next().value);//next().value pega o valor da funcao
    console.log(g1.next().value);//next().value pega o valor da funcao 
    console.log(g1.next().done);//next().done verifica se a função geradora terminou   
}else{
    console.log('A função é falsa');
}

//Iterando sobre a funcao geradora
for(let chave of g1){
    console.log(chave);
}