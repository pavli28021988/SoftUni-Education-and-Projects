function solve(text,word){
    let words = text.split(' ');
    let sum = 0;
    for(let el of words){
        if(el === word){
            sum++;  //sum+=1
            
        }
    }
    console.log(sum);
}
solve('This is a word and it also is a sentence','is');
console.log('--------------------');
solve('softuni is great place for learning new programming languages','softuni');
