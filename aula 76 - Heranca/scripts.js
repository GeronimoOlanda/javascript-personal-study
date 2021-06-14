function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.diminui = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);//criando o objeto camisa e setando os atributos de Produto
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);//setando os metodos de Produto.prototype(aumento e diminui) no Objeto Camisa
Camiseta.prototype.constructor = Camiseta;//setando novamento o constructor de Camisa

const produto = new Produto('Regatao',2323.2);
const camiseta = new Camiseta('Regata', 64.4,'preta');

camiseta.aumento(10);

console.log(produto);
console.log(camiseta);