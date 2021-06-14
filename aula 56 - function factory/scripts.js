function criarPessoa(nome, sobrenome){
    return{
        nome, 
        sobrenome,
        fala:function(assunto){
            return `${nome} esta ${assunto}`;
        }
    };
}
const p1 = criarPessoa('Jesus', 'Cristo');
console.log(p1.fala('Falando sobre a Paz de Cristo')); 



///testes extras que estou fazendo fora do curso

let pessoas = ['Geronimo','Thalia'];

let novasPessoas = [...pessoas];
novasPessoas.push('Geronimoo');

for(let i in novasPessoas){
    if(novasPessoas[i] == 'Geronimo'){
        console.log('Ola Geronimo');
    }
}
console.log(novasPessoas);
