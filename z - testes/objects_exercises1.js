let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficult: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}

//1 Write the command to add the language "Go" to the end of the languages array.
let addGo = programming.languages.push("Go");

//2 Change the difficulty to the value of 7.
let addNewDif  = programming.difficult ='7';

//3 Using the delete keyword, write the command to remove the jokes key from the programming object.
let deletJoker = delete(programming.jokes);

//4 Write the command to add a new key called isFun and a value of true to the programming object.
let addIsFun = programming.push(isFun);

//verificação
for(let i in programming){
    console.log(programming[i]);
}