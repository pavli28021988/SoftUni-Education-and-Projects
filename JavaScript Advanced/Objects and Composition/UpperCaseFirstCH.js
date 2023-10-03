//How to make first letter of a string uppercase in JavaScript ?


//1---------This example uses the slice() method to convert the first letter to uppercase.


function capitalizeFLetter() {
    let string = 'geeksforgeeks';
    console.log(string[0].toUpperCase() +
        string.slice(1));
}
capitalizeFLetter()
//----------------------------------------------------//







//--2--------------------This example uses charAT() method to make the first letter of a string uppercase.

//Syntax:string.charAt(index)

function capitalizeFLetter() {
    let string = 'geeksforgeeks';
    console.log(string.charAt(0).toUpperCase() +
        string.slice(1));
}
capitalizeFLetter()
//------------------------------------------------//










//--3----------------
//str.replace(A, B) and REG

function capitalizeFLetter() {
    let string = 'geeksforgeeks';
    console.log(string.replace(/^./, string[0].toUpperCase()));
}
capitalizeFLetter()
//----------------------------------------------








//--4-------------------
let str = "geeksforgeeks";
let result = str.split('').map((char, index) =>
    index === 0 ? char.toUpperCase() : char).join('');
console.log(result);
//--------------------------------------------//











//Syntax:let result = [...str][0].toUpperCase() + [...str].slice(1).join('');

let str = "geeksforgeeks";
let result = [...str].map((char, index) =>
    index === 0 ? char.toUpperCase() : char).join('');
console.log(result);
//----------------------------------------------------------------------------//










//Syntax:

/*const result = (() => {
    const firstChar = str.charAt(0).toUpperCase();
    const remainingChars = str.slice(1);
    return `${firstChar}${remainingChars}`;
})();*/


const str = "geeksforgeeks";
const result = (() => {
    const firstChar = str.charAt(0).toUpperCase();
    const remainingChars = str.slice(1);
    return `${firstChar}${remainingChars}`;
})();
 
console.log(result);
//----------------------------------------//