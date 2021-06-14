let funcao = (x, y) =>{
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw('X e y precisam ser números.'); //utilizando throw para lançar um erro.
    }
    return x + y;
}

try{
    console.log(funcao(10,'2'));
}catch(error){
    console.log(error)
}