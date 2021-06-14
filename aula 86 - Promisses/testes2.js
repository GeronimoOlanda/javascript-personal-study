function exibirAno(){
    return new Promise((resolve, reject)=>{
        const data = new Date();
        data.getFullYear();
        
        if(data !== 'string') reject('Rejeitado');
        resolve(data);
    })
}

exibirAno()
.then(data =>{
    console.log(data);
})
.catch((e)=>{
    console.log(e)
})