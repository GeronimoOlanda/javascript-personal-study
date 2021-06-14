// teste1 - somando valores e devolvendo apos um determinado periodo
function resolverDepoisDe2Segundos(x){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(x);
        }, 0000)
    });
}

async function adicionar1(a, b){
      a = resolverDepoisDe2Segundos(a);
      b = resolverDepoisDe2Segundos(b);
    return await a + await b;
}

adicionar1(10, 20)

.then(v=>{
    console.log(v);
});


//teste2 
function func1(number){
    return new Promise(resolve =>{
        setTimeout(()=>{

            resolve(number);
        }, 1000);
    });
}

function func2(number){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(number)
        }, 2000);
    });
}

function func3(number){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(number);
        }, 3000)
    })
}

/* func1()
.then(number =>{
    console.log('Hello');
    return func2(number);
})
.then(number =>{
    console.log('Jesus');
    return func3(number);
})
.then(number=>{
    console.log('I love you so much, i need you')
    return number;
})
.then(()=>{
    console.log('AMÉM!');
})
 */
async function executar(){
    const msg1 = await func1('Hello');
    console.log(msg1);

    const msg2 = await func1('Jesus');
    console.log(msg2);

    const msg3 = await func1('I love you!');
    console.log(msg3);
}
executar();