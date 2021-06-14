//buscando os dados no arquivo json
fetch('pessoas.json')//buscando os dados
.then(resposta => resposta.json())
.then(json => carregaElementosNaPagina(json));

//retornando os elementos do array e criando a tabela e inserindo os dados nela
function carregaElementosNaPagina(json){
  const table = document.createElement('table');
  
  for(let pessoa of json){
    const tr = document.createElement('tr');
    
    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);
    
    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);
  
    table.appendChild(tr);
  }
  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table)
}
//jogando os dados na tela
