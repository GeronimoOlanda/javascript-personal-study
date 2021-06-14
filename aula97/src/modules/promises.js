const { Promise } = require("core-js");

function p(){
    return new Promise((resolve, reject)=>[
        setTimeout(()=>{
            console.log('Ola');
            resolve();
        }, 2000)
    ])
}

export default async function(){
    await p();
    console.log('Terminou');
}