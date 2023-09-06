function solve(string){

    let sentence = string.split(' ');
    for(let el of sentence){
        if(el.startsWith('#') && el.length > 1){
            let flag = true;
            let wordLower = el.toLowerCase();

            for(let i =1; i < wordLower.length;i++){
                if(wordLower.charCodeAt(i) < 97 || wordLower.charCodeAt(i) > 122){
                    flag =false;
                    break;
                }
            }

            if(flag){
                //console.log(el.split('#'));
                console.log(el.slice(1));//el.substring(1)
            }
        }
    }

}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log('----------------------------');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');