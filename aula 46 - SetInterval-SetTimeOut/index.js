//toLocalteTimeString() - funcao utilizada para mostrar a hora atual
let mostrarHora = ()=>{
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

//utilizado para saber em quanto tempo quero que a função seja executada em milisegundos
//em intervalos de tempo
const timer = setInterval((contador)=>{
    console.log(mostrarHora());
}, 1000);

//setTimerout executa só uma vez
const timeout = setTimeout(()=>{
    clearInterval(timer);
},5000);

setTimeout(function(){
    console.log('Ola Mundo');
}, 5000)