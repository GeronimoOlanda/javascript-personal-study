function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btnClear'),

        //inicia a calculadora        
        inicia(){   
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        clearDisplay(){
            this.display.value = ' ';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0,-1)//pega o tamanho da string e tira 1 elemento
        },
    
        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta Invalida');
                    return;
                }
            this.display.value = String(conta);
            }catch(e){
                alert('Conta Invalida');
                return;
            }
        },
        pressionaEnter(){
            this.display.addEventListener('keyup', (e)=>{
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        },

        //cliques dos botoes
        cliqueBotoes(){
            //this -> calculadora
            document.addEventListener('click', function(e){
                const elemento = e.target;

                if(elemento.classList.contains('btn-num')){
                    this.btnParaDisplay(elemento.innerText);
                }
                if(elemento.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(elemento.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if(elemento.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            }.bind(this));//utilizando o bind() para referenciar onde quero utilizar o this, que por padrão é utilizado por quem chamar primeiro, como default ele é chamado pelo DOCUMENT da pagina

        },
        //buttao do display
        btnParaDisplay(valor){
            this.display.value += valor;
        },
    };
}
const calculadora = criaCalculadora();
calculadora.inicia();
