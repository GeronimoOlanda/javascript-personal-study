class Pessoa{
    constructor(nome, sobrenome, idade){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.idade = idade
    }
}

class Estudante extends Pessoa{
    constructor(nome, sobrenome,idade,idEstudantil){
        super(nome,sobrenome,idade)
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.idade = idade,
        this.idEstudantil = idEstudantil
    }
    estudar(){
        console.log('Estou estudando meu bem');
    }
    falar(){
        console.log('Ola, meu nome é ' + this.nome);
    }
}

let estudante = new Estudante('Geronimo', 'José', 22, 'ABDE4320003');
for(let obj in estudante){
    console.log(`${obj} = ${estudante[obj]}`);
}
console.log('\n')
estudante.estudar();
estudante.falar();

//manipulado objeto
//convertendo para json
let converterJSON = JSON.stringify(estudante);
console.log(converterJSON);

//convertendo para objeto
let convertObj = JSON.parse(converterJSON);
console.log(convertObj);