function rand(min = 0, max = 3){
    min = min * 1000;
    max = max * 1000;

    return Math.floor(Math.random()  * (max - min) + min);
}

let esperaAi = (msg, tempo)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof msg !== 'string'){
                reject('ERROR: Pikachu caiu na lagoa com o bubasauro');
                return;
            }

            resolve(msg.toLowerCase() + ' - Passamo na Promise Senpai!');
            return;
        }, tempo);
    });
}

/* 
esperaAi('Fase 1', rand(0))
.then((valor)=>{
    console.log(valor);

    return esperaAi('Fase 2', rand(0))
})

.then((fase)=>{
    console.log(fase);
    return esperaAi('Fase 3', rand());
})

.then((fase)=>{
    console.log(fase);
    return fase;
})

.then((fase)=>{
    console.log('Terminamos na fase', fase);
})

.catch((erro)=>{
    console.log('ERRO: ', erro);
}) 

*/
async function executa(){ //async é necessario para executar o await, o await  espera uma promise ser finalizada para exibi-la
    try{
    const fase1 = await esperaAi('Fase 1', rand());
    console.log(fase1);

    const fase2 = await esperaAi('Fase 2', rand());
    console.log(fase2);

    const fase3 = await esperaAi('Fase 3', rand());
    console.log(fase3);

    console.log('Terminamos na fase', fase3);
    
    }catch(erro){
        console.log(erro);
    }
}
executa();