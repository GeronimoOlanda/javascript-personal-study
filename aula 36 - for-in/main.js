
/*
const frutas = ['Pera', 'Maçã', 'Uva'];

for(let i = 0; i< frutas.length;i++){
    console.log(`Index: ${i} \t Fruta: ${frutas[i]}`);
}

for(let indice in frutas){
    console.log(frutas[indice]);
}
*/

const gender = {
    man: Symbol('Masculino'),
    woman: Symbol('Feminino')
};

const pessoas  = [
    {
        name: 'Thalia',
        age: 23,
        gender: gender.woman,
        funcao: () => {
            console.log('Estou aprendendo a usar e manipular objetos');
        }
    },
    {
        name: 'Geronimo',
        age:22,
        gender:gender.man,
        funcao: () => {
            return 'Estou falando';
        }
    }

];

for(let i in pessoas){
    console.log(pessoas[i].funcao());
    console.log(pessoas[i].funcao());
}

console.log('-------------------');
const elementos = {
    id: 0,
    fogo: 'Flamejante',
    Agua: 'Aguatico',
    vento: 'Soprante',
    terra: 'Terrante'
};

for(let i in elementos){
    console.log(`Indice:${i}\t\tElemento:${elementos[i]}`);
}