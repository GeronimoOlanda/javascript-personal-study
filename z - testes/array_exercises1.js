
//1 Using a loop, iterate through this array and console.log all of the people.
let people = ["Greg", "Mary", "Devon", "James"];

for(p1 of people){
    console.log(p1);
}
console.log('-----------------------');

//2 Write the command to remove "Greg" from the array.
let removeGreg = people.shift()
console.log(`Nome Removido: ${removeGreg}\nArray: ${people}`)

//3 Write the command to remove "James" from the array.
let RemoveJames = people.pop();
console.log(people);

//4 Write the command to add "Matt" to the front of the array.
let addMatch = people.unshift('Matt');
console.log(people)

//5 Write the command to add your name to the end of the array.
let addName = people.push('Geronimo');
console.log(people);

//6 Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for(let i = 0; i< people.length; i++){
    if(people[i] == 'Mary'){
        break;
    }
    console.log(people[i]);
}
 
//7 Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
console.log('------');
let old = people.slice(2,4);
console.log(old);

//8 Write the command that gives the indexOf where "Mary" is located.
console.log(people.indexOf('Mary'));

//9 Write the command that gives the indexOf where "Foo" is located (this should return -1).
let addOf = people.push('Foo');
console.log(people.indexOf('Foo'));
console.log(people);


//10 Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].


console.log('-----------------');
people.splice(2, 1, 'Elizabeth','Artie');
console.log(people);

//11 Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
console.log('-----------------');
let withBob = [...people,'Bob'];
console.log(withBob);