const nome = 'Geronimo';
const sobrenome = 'Olanda';
const idade  = 22;


let listaNomes = (nome = '')=>{
    let nomes = [];
    nomes.push(nome);
    return nomes;
}

//funcao soma inicializada
let soma = (x = 0, y = 0)=>{
    return x + y;
}

//exportando arquivos
export{
    nome,
    sobrenome,
    idade,
    listaNomes,
    soma
}