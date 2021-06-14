/* 
                                ########Metodos uteis para manuesar objetos#############

const produto = {nome: 'Caneca', preco: 1.78};
const outraCoisa = {...produto}//podemos utilizar o spread para espalhar os dadosde um objeto dentro de outro objeto
const caneca =  Object.assign({}, produto); //copia o objeto produto para dentro das chaves{} que esta vazia

outraCoisa.nome = 'Outra Coisa';
outraCoisa.preco = 2.5;

console.log(produto);
console.log(outraCoisa);
console.log(caneca); 

# console.log(Object.keys(produto));//mostra as chaves dos produtos
# console.log(Object.values(produto));// pegando os valores
# console.log(Object.freeze(produto));//não deixa que o objeto seja alterado
# console.log(Object.assign(produto));//adiciona um array dentro de outro
# console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))//exibe a descrição da propriedade nome
# spread Operator para espalhar os dados em um array
# console.log(Object.entries(produto)); //utilizado para manueio de chaves e valores ao mesmo tempo

//pode utilizar para alterar as propriedades dos objetos.
Object.defineProperty(produto, 'nome',{
    writable: false, // nao pode alterar esta propriedade
    configurable: false
})
*/
const produto = {nome: 'Produto', preco: 1.8};
const caneca = {nome: produto.nome, preco: produto.preco};

