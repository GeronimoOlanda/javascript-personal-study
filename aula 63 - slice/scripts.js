//               -5        -4         -3       -2           -1
//                0         1          2        3            4
const nomes = ['Thalia', 'Marines', 'Maria','Jennyfer', 'Camila'];

//nomes.splice(indice, delete, elemento1, elemento2, elemento3);
const removidos = nomes.splice(4, 1);// selecionando o indice 4, e deletando 1 elemento
console.log(nomes, removidos);