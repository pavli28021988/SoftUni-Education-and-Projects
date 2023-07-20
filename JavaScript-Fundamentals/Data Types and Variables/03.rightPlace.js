function solve(stringOne,char,stringTwo){

    let result = stringOne.replace('_',char);
   /* console.log(result);*/

   if(result === stringTwo){
    console.log('Matched');
   }else{

    console.log('Not matched');

   }



}
solve('Str_ng', 'I','Strong');
solve('Str_ng', 'i', 'String');


/*second solution*/


/* function solve(stringOne,char,stringTwo){

    let result = stringOne.replace('_',char);

    let output = result === stringTwo? 'Matched' : 'Not matched' ;

  
    console.log(output);
}
solve('Str_ng', 'I','Strong')
solve('Str_ng', 'i', 'String')

}*/


/*solution 3*/


/*function solve(firstWord,char,secondWord){

    let res = "";

    for (let i=0;i< firstWord.length;i++){
        let currentChar = firstWord[i];

        if(currentChar === "_"){
            res += char
        }else{
            res += currentChar
        }
    }

    if (res === secondWord){
        console.log("Matched");
    }else{
        console.log("Not matched")
    }

}*/