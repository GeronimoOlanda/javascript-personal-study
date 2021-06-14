function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
   //primeiro o objeto no nosso caso é o this, depois a propriedade, e por ultimo a descrição
    Object.defineProperty(this, 'estoque', {
        enumerable:true,
        configurable:true,
        get: function() {
            return estoquePrivado; //trabalho do getter é pegar o valor que esta ali no momento e exibir
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                //mandar uma msg 
                throw new TypeError('Erro, digite um valor numerico');
                return;
            }
            estoquePrivado = valor;
        }
    });
}
function criaProduto (nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('Salve','Selokoooo');//substituindo o valor salve
            nome = valor;
        }
    };
}
/*
const p1 = new Produto('Shirt', 28.44, 1000);
//console.log(p1);
p1.estoque = 41414122;
console.log(p1.estoque);*/

const p2 = new criaProduto('Camiseta');
console.log(p2)
p2.nome = 'Salve, funfou a parada mermao, seloko catiorro';
console.log(p2.nome);