//(condicao) ? 'para verdadeiro : 'para falso';
const pontuacaoUsuario = 999;
const NivelUsuario = pontuacaoUsuario >= 100 ? 'Usuario VIP': 'Usuario Normal';
console.log(NivelUsuario)

//exercitando

//usando arrays
let listaFrutas = ['Maçã', 'Uva', 'Pera', 'Mamao', 'Melao'];
const verificaItensMaçã  = listaFrutas[0]  ==  'Maçã'?'Temos maça disponivel no estoque ' : 'Desculpe, mas não temos o solicitado';
const verificaItensUva   = listaFrutas[1] ==   'Uva'?'Temos umas disponivel no estoque ' : 'Desculpe, não temos o desejado';
const verificaItensPera  = listaFrutas[2]  == ' Pera'?'Temos PEra no estoque disponivel ' :'Não temos disponivel no estoque';
const verificaItensMamao = listaFrutas[3]  == 'Mamao'?'Temos mamao disponivel no estoque' :'Não temos disponivel';
const verificaItensMElao = listaFrutas[4]  ==' Melao'? 'Temos melao disponivel no estoque': 'Desculpem, não temos disponivel no estoque!';

console.log(verificaItensMElao);
//usando objetos
const obj = {
    nome:'Geronimo',
    sobrenome:'José'
}
const verificaNome = (obj.nome == 'Geronimo') ? `Meu nome é ${obj.nome}`:'Desculpe, mas não encontramos seu nome na nosa base de dados';
const verificaSobrenome = (obj.sobrenome == 'José') ? `Meu sobrenome é ${obj.sobrenome}`:'Sobrenome nao encontrado';

console.log(`Nome:${verificaNome} \n Sobrenome:${verificaSobrenome}`)