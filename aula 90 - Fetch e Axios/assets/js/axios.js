axios('pessoas.json')//axios serve para fazer um get e carregar os elementos na pagina, e ele retorna utilizando uma promise
.then(resposta => carregaElementosNaPagina(resposta.data));

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
