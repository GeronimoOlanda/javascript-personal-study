const pessoas = [
    {id:3, nome: 'Geronimo'},
    {id:2, nome: 'Thalia'},
    {id:1, nome: 'Alice'}
];

/* const novasPessoas = {};
for(const pessoa of pessoas){
    
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};

} */
//utilizar o map para mapear objetos que esta em forma descendente ou ascendente.
const novasPessoas = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});//setando valores
}
console.log(novasPessoas.get(2));//exibir o atributo e o valor desejado get()
console.log('\n\n')
for(const pessoa of novasPessoas){//poemos usar keys(), values(), entre outros
    console.log(pessoa);
}