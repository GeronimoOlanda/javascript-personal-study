function Pessoas (nome, idade, sexo){
 this.nome = nome;
 this.idade = idade;
 this.sexo = sexo

Object.defineProperty(this,'nome',{
    
        writable:false,
        configurable:false
})

}
//setando um prototype
Pessoas.prototype.falar = function(){
    return('Ola, Estou falando com vc mesmo!');
}
const p1 = new Pessoas('Geronimo',21,'Masculinity');
p1 = new Pessoas('Thalia',22,'Feminino')
console.log(p1)
