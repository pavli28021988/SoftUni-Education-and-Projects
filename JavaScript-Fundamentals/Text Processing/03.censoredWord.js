function solve(text,word){

   
    if(text.includes(word)){
       text =  text.replace(word, '*'.repeat(word.length));
    }

    console.log(text);
        
     
            

}
solve('A small sentence with some words',

'small');
solve('Find the hidden word', 'hidden');