class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;

    }
        
    //sendo inserido automaticamente
    comer(){
        console.log(`Hey ${this.nome} Estou comendo`);
    }

}

//setando no prototype de pessoas
Pessoa.prototype.falar = ()=>{
    console.log('Estou falando');
}

let p2 = new Pessoa('Thalia', 'Olanda');
p2 = new Pessoa('Geronimo', 'Olanda');
console.log(p2);

