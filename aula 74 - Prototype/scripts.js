function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'ORIGINAL ' + this.nome + ' ' + this.sobrenome;

}

Pessoa.prototype.estouAqui = 'Sou o Batman';
Pessoa.prototype.NomeCompleto = function(){
    return 'NORMAL' + this.nome +''+this.sobrenome;
}

//instanciando da função construtora
const pessoa1 = new Pessoa('Geronimo', 'Olanda'); //funcao construtora
const pessoa2 = new Pessoa('Thalia', 'Aparecida'); // funcao construtora
const data = new Date();

//exibindo
console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);