function Produto(nome, preco, estoque, sobrenome = ' ', idade = 0){
    this.nome = nome;
    this.preco = preco;
   
    // Object.defineProperty
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //chama a variavel estoque
        value: estoque, //passa o valor para o objeto
        writable: true, //permite ou não se o valor pode ser alterado utilizando as booleanas true e false
        configurable:false//se pode pode editar, reconfigurar, apagar a chave utilizando a booleanas true e false
    });
    
    //  Object.defineProperties
    Object.defineProperties(this, {
        sobrenome: {
            enumerable: true, //chama a variavel estoque
            value: sobrenome, //passa o valor para o objeto
            writable: true, //permite ou não se o valor pode ser alterado utilizando as booleanas true e false
            configurable:true//se pode pode editar, reconfigurar, apagar a chave utilizando a booleanas true e false
        },
        idade:{
            enumerable: true, //chama a variavel estoque
            value: idade, //passa o valor para o objeto
            writable: true, //permite ou não se o valor pode ser alterado utilizando as booleanas true e false
            configurable:true//se pode pode editar, reconfigurar, apagar a chave utilizando a booleanas true e false
        },
    })
}

const p1 = new Produto('Shirt',28.44,1000);
p1.estoque = 30000;//valor de exemplo
//delete p1.estoque;

console.log(p1);

for(let chaves in p1){
    console.log(chaves);

}