function solve(firstChar,secondChar){

    let startChar = Math.min(firstChar.charCodeAt(0),secondChar.charCodeAt(0));

    let endChar = Math.max(firstChar.charCodeAt(0),secondChar.charCodeAt(0));


    let res = [];


    for ( let i = startChar + 1; i < endChar; i++){
        let currentChar = String.fromCharCode(i);

        res.push(currentChar);
    }

    console.log(res.join(' '));

}
solve('a','d');
solve('#',':');
solve('C','#');