//capturar evento de submit do formulario

const form = document.querySelector("#form");

form.addEventListener('submit', function (event) {
    event.preventDefault(); //não deixa formulario ser enviado
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
   
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if(!peso){
        setResultado('Peso Invalido',false);
        return;
    }

    if(!altura){
        setResultado('Altura Invalida',false);
        return;
    }
    

    const imc = getImc(peso, altura);
    const classificacao = getClassificacaoImc(imc);
    const msg = `Seu IMC é ${imc} (${classificacao}).`;
    setResultado(msg, true);
    //continua o codigo
})

function getClassificacaoImc(imc){
    const classificacao =  ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    if(imc >= 39.9) return classificacao[5];
    if(imc >=34.9)  return classificacao[4];
    if(imc >=29.9)  return classificacao[3];
    if(imc >=24.9)  return classificacao[2];
    if(imc >=18.5)  return classificacao[1];
    if(imc < 18.5)  return classificacao[0];
    
}


function getImc(peso, altura){
    const imc  = peso/(altura * altura);
    return imc.toFixed(2);
}

//criando a funcao geradora de paragrafos
function criarP(){
    //criando elemento html
    const p = document.createElement('p');    
    return p; 
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML ='';
   const p = criarP();

   if(isValid){ 
       p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad')
    }

   p.innerHTML= msg;
   resultado.appendChild(p);
    
}