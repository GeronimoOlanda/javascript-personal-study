function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('camiseta', 50);

const p2 = {
    nome: 'Copo',
    preco: 233
};

Object.setPrototypeOf(p2, Produto.prototype);//primeiro seta a variavel e depois o prototype
p2.aumento(10);
const p3 = Object.create(Produto.prototype);//Object.create(Object.prototype) - > cria um objeto vazio
p3.preco = 200;//setando o valor 
p3.aumento(100);//efetuando o aumento
console.log(p3);