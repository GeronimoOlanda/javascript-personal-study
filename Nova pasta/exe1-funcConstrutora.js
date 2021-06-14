function Pessoas(nome, sobrenome, idade, genero){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;


    Object.defineProperty(this,'genero', {
        enumerable: true,//define se o objeto vai ser enumerado(exibido) ou não
        value:genero,//define o valor do objeto
        writable:false,//permite se o objeto pode ser sobreescrito ou não
        configurable:true
    })

    Object.prototype.falar = function(){
        return 'Estou falando mermão!';
    }
   
}
const pessoa = new Pessoas('Geronimo', 'Olanda', 21,'Masculino');
pessoa.genero = 'Geronimaaa'

for(let p in pessoa){
    console.log(pessoa[p]);
}
console.log('\n\n');
console.log(pessoa.falar());
console.log('----------------------------------------------------------------------------------------');
//criando objetos
const names = {
    nome: 'Thalia',
    sobrenome:'Olanda',
    sexo:Symbol('M')
}

console.log(Object.getOwnPropertyDescriptor(names, 'nome'));//exibe a descrição do objeto;
console.log(Object.getOwnPropertyNames(names));//capturas as chaves dos objetos(nome,sobrenome, sexo)
console.log('----------------------------------------------------------------------------------------');
//utilizando promises
function casa(mensagem){
    return new Promise((resolve, reject)=>{
        resolve(mensagem);
        
    })
}

casa().then(()=>{
    console.log('Minha casa é abençoada por Jesus Cristo, filho unigenito do Deus vivo!');
}).catch(()=>{
    console.log('O que foi digitado deve ser uma mensagem, e não conter numeros!');
})
console.log('----------------------------------------------------------------------------------------');
//utilizando funcoes async await
async function elementos(){
    let a = await 'Jesus Eu te amo!';
    let b = await 'Meu senhor amado!';
    let c = await 'Que seu nome seja Glorificado e exautado!';

    setTimeout(()=>{
        console.log(a);
    },3000)

    setTimeout(()=>{
        console.log(b);   
    },5000)

    setTimeout(()=>{
        console.log(c);
    },7000)


}
elementos();