function aleatorio(min, max){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Valor digitado não aceitavel, tem que ser string!');
        setTimeout(()=>{
            resolve(msg);
        }, tempo);
    });
  
}

esperaAi('Frase1', aleatorio(1, 3))
.then(resposta=>{
    console.log(resposta);
    return esperaAi('Frase2', aleatorio(1,3));
})

.then(resposta=>{
    console.log(resposta);
    return esperaAi('2222', aleatorio(1,3));

}).then(resposta=>{
    console.log(resposta);
    return esperaAi('SOu o ultimão mermao, podepah que é noixi na fita senpai');

}).then(resposta=>{
    console.log(resposta);
})

.catch(e=>{
    console.log('ERRO:', e);
})
