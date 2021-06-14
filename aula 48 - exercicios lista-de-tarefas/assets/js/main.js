//capturando as classes do html
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa  = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

//criando o elemento li
let criaLi = ()=>{
    const li = document.createElement('li');
    return li;
}
//verificando se o usuario esta digitando na tela
inputTarefa.addEventListener('keypress', (e) =>{
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;    
        criaTarefa(inputTarefa.value);
    }
})
//criando a funcao de limpar o input apos digitar o texto
let limpaInput = ()=>{
    inputTarefa.value = '';
    inputTarefa.focus();
}
//criando botao apagar
let criaBotaoApagar = (li)=>{
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title','Apagar tarefa');
    li.appendChild(botaoApagar);
}

//criando elemento e adicionando
let criaTarefa = (textInput)=>{
    const li = criaLi();
    li.innerText = textInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}
//verificando se o usuario esta digitando algo
btnTarefa.addEventListener('click', ()=>{
    if(!inputTarefa.value) return;    
    criaTarefa(inputTarefa.value);
});

//removendo o elemento da lista
document.addEventListener('click', (e)=>{
    const el = e.target;
   if(el.classList.contains('apagar')){
       el.parentElement.remove();
       salvarTarefas();
   }
});

//salvando os elementos em um array
let salvarTarefas = ()=>{
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for(let tarefa of liTarefas){
       let tarefaTexto = tarefa.innerText;
       tarefaTexto = tarefaTexto.replace('Apagar', ' ').trim();   
       listaDeTarefas.push(tarefaTexto);
       
    }

    //transformando em json
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    //salvando os itens no localStorage
    localStorage.setItem('tarefas',tarefasJSON);

}
//recuperando as tarefas do local storage, e convertendo para um array
let adicionaTarefasSalvas = () => {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();