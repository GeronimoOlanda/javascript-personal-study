/* 
const nomes = ['Geronimo', 'Thalia', 'Alice'];
nomes[2] = 'Gaspar';

delete nomes[2];//deletando sem remover o indice(sem alterar o indice)
console.log(nomes);

const idades = new Array(21,22,23,24,25);
console.log(idades); 


const nomes = ['Geronim','Thalia','Marines','Maria','José Geronimo','José','Qualquer'];

console.log(nomes.pop());
console.log(nomes.shift());
console.log(nomes.push('Qualquer'));
console.log(nomes.unshift('Geronimo'));
console.log(nomes.slice(0,2));
console.log(nomes.length);
let novo = nomes.slice(0, -1);
console.log(novo);

*/
/* 
const nome = 'Geronimo José de Lima de Olanda';
const nomes = nome.split(' ');// a cada espaço acrecenta as aspas ' ', transformando em string
console.log(nomes);
 */
const nomes = ['Geronim','Thalia','Marines','Maria','José Geronimo','José','Qualquer'];
let nome = nomes.join('...');
console.log(nome);