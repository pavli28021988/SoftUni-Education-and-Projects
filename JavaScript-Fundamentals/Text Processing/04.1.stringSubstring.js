function solve(word,text){
    text = text.toLowerCase();
    let splited = text.split(' ');
    //console.log(splited);

    for(let el of splited ){
        if(el === word){
            console.log(word);
            break;
        }else{
            console.log(`${word} not found!`);
        }
    }

}

solve('javascript',

'JavaScript is the best programming language');
console.log('------------------');
solve('python',

'JavaScript is the best programming language');

//------------------------------------------------------solution 2------------------------------------------------------//

/*
 function solve(searchWord,sentence){
    let words = sentence.split(' ');

    for(let word of words){
        if(word.toLowerCase() === searchWord.toLowerCase()){
            console.log(searchWord):
            return
        }
    }

    console.log(`${searchWord} not found!`);
 }
*/ 