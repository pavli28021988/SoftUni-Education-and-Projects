function solve(words,sentence){{
    let wordsArr = words.split(', ');
    //console.log(wordsArr);

    let sentenceArr = sentence.split(' ');
    //console.log(sentenceArr);

    


    for(let el of wordsArr){
        for(let searchedWord of  sentenceArr){
            if(searchedWord.includes('*') && searchedWord.length === el.length){
               sentence = sentence.replace(searchedWord,el)
            }
        }
        
    }

    console.log(sentence);

    
}

}
solve('great', 'softuni is ***** place for learning new programming languages');
console.log('-----------------------');
solve('great, learning','softuni is ***** place for ******** new programming languages')