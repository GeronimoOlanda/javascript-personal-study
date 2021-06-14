//teste 1 - Fazendo a soma

function calculo(a = 0 , b = 0){
    return new Promise((resolve, reject)=>{
        if(typeof a !== 'number' || typeof b !== 'number') reject('O valor digitado tem que ser numerico');
        resolve(a + b);
        
    })
}
calculo(10, 20).then(soma=>{
    console.log(soma);
});

//teste 2 - Retornando uma mensagem apos a duração de um periodo para o usuario
const timeout = (duracao)=>{
  return new Promise((resolve, reject)=>{
      setTimeout(resolve, duracao);
  })  
}
timeout(1000)

.then(function(){
    console.log(`Funfou após 1 segundo`)
})

.catch((e)=>{
    console.log(e);
})

//teste 3 - Testando o catch()
let getUsuarios = ()=>{
    return new Promise((resolve, reject)=>{
        reject('Não foi possivel recuperar a lista de usuarios');
    })
}
getUsuarios().catch((e)=>{
  console.log(e);  
})



//teste 4 - promises dentro de promisses
 function getTodosUsuarios(lista){
     lista = [1, 2, 3, 4, 5];
     return new Promise((resolve, reject)=>{
         resolve([...lista]);
     });
 }

 function getUsuariosById(id){
     return new Promise((resolve, reject)=>{
         resolve({id, nome:'Geronimo Olanda'});
     })
 }

 getTodosUsuarios()
 .then(ids =>getTodosUsuarios(ids[0]))//retornando o id do index 0
 .then(usuario =>console.log(usuario));//