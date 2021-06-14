//capturando a tag (a) e setando o toLowerCase() para que ela fique minuscula.
document.addEventListener('click', e =>{

    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();//ele previne que a pagina carregue
        carregaPagina(el);
    }
})

//criando a funcao de carregar a pagina e os seus devidos metodos de request
async function carregaPagina(el){
   try{
  const href= el.getAttribute('href'); //capturando o atributo href do link (a)
  const response = await fetch(href);

  if(response.status !== 200) throw new Error('ERRO MerMãO!');  
  const html = await response.text();

  carregaResultado(html)

}catch(e){
    console.log(e);
}
    
}
//criando a funcao de carregar o resultado e setar ele na div com a classe resultado e exibindo na tela.
function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

/* 
fetch('pagina4.html', {})// por padrao o fetch retorna uma promise
.then(resposta =>{
    if(resposta.status !== 200) throw new Error('ERRO 404 mermao');
    return resposta.text();

})
.then(html =>console.log(html))
.catch(e =>console.error(e)); 
*/