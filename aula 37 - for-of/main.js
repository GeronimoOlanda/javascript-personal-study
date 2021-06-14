const trindade = {
    pai: 'Deus Pai',
    filho: 'Jesus Cristo',
    espirito: 'Espirito Santo'
}


const pessoa = {
    nome: 'Geronimo',
    sobrenome: 'José'
}



for(let i in pessoa){
    console.log(pessoa[i]);
}


/* const trindade = ['Deus Pai', 'Filho Jesus Cristo', 'Espirito Santo'];

//iterando com o for classico;
for(let i = 0; i < trindade.length; i++){
    console.log(trindade[i]);
}
console.log('---------------------');
//iterando com o for-in
for(let i in trindade){
   console.log(trindade[i]);
}

//iterando utilizando for-of
console.log('---------------------');
for(let valor of trindade){
    console.log(valor);
}

console.log('-------');
trindade.forEach((valor,indice)=>{
    console.log(valor);
}) */