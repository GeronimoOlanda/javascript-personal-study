//criamos uma funcao de request
const request = (obj)=>{
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true)//colocando true afirmo que o objeto é assincrono
    xhr.send();//mandariam os dados de um post, sendo ele um formulario caso estivesse
    
    //setando o carregamento da pagina e verificando se o status é bem sucedido
    xhr.addEventListener('load', ()=>{
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText);
        }else{
            obj.error(xhr.statusText); 
        }
    });
};

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
function carregaPagina(el){
    const href= el.getAttribute('href'); //capturando o atributo href do link (a)
    request({
            method: 'GET',
            url:href,
            success(response){
                carregaResultado(response);
            },

            error(errorText){
                console.log(errorText);
            }
    });
}
//criando a funcao de carregar o resultado e setar ele na div com a classe resultado e exibindo na tela.
function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}