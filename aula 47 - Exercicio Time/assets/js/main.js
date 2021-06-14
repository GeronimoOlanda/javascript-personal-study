let criarHoraDosSegundos = (segundos)=>{
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar  = document.querySelector('.pausar');
const zerar   = document.querySelector('.zerar');
let segundos = 0;
let timer;

//funcao iniciar
let iniciaRelogio = () => {
    timer = setInterval(()=>{
        segundos++;
        relogio.innerHTML = criarHoraDosSegundos(segundos); 
    }, 1000)
}

//funcao dos botoes
iniciar.addEventListener('click', (event)=>{
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', (event)=>{
    relogio.classList.add('pausado');
    
    clearInterval(timer);
});

zerar.addEventListener('click', (event)=>{
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;   
});