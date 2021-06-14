function rand(min, max){
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string'){
            reject('Estamos no ERRO');
            return;//faz parar aqui a execução do codigo
        }

        setTimeout(()=>{
            resolve(msg.toUpperCase() + ' Passei na primise');
            return;
        }, tempo)
    });
}



const promises = [
    //'Primeiro valor',
    esperaAi('Promise I', rand(1, 5)),
    esperaAi('Promise  II', rand(1, 5)),
    esperaAi('Promise III', rand(1, 5)),
    //esperaAi(1000, 1000),
    //'Outro Valor Aleatoriamente aleatorio menor'
];

//# Promisse.all - passando os valores dentro de um arrays de promessas(que resolve todas)

Promise.all(promises)
.then((valor)=>{
    console.log(valor);
})

.catch((erro)=>{
    console.log(erro);
})


//# Promise.race devolve a primeira resolvida(como uma corrida, o primeiro que chegar é exibido)


Promise.race(promises)
.then((valor)=>{
    console.log(valor);
})

.catch((erro)=>{
    console.log(erro);
})

//Promise.resolve - como nome já diz, ele resolve a promisse aceita

function baixaPagina(){
    const emCache = false; //altere livremente
    if(emCache){
        return Promise.resolve('Pagina em Cache')
    }else{
        return esperaAi('Baixei a pagina', 3000);
    }
} 

baixaPagina()
.then((dadoPagina)=>{
    console.log(dadoPagina)
})
.catch((erro)=>{
    console.log(erro);
})


//Promise.reject - ele retorna uma promessa rejeitada.
function baixaPagina(){
    const emCache = true;
    if(emCache){
        return Promise.reject('Pagina em Cache')
    }else{
        return esperaAi('Baixei a pagina', 3000);
    }
} 

baixaPagina()
.then((dadoPagina)=>{
    console.log(dadoPagina)
})
.catch((erro)=>{
    console.log('Erro mermao', erro);
})