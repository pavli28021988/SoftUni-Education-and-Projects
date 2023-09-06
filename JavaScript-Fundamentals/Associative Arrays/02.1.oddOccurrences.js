function solve(input){
    input = input.toLowerCase();
    let words = input.split(' ');
    let result = new Map();
    for (let  word of words){
        if(result.has(word)){
            result.set(word, result.get(word) + 1);
        }else{
            result.set(word,1);
        }
    }

    let filtered = Array.from(result.entries()).filter(([key,value]) =>value % 2 !==0);
    let buff = '';

    for(let [key,value] of filtered){
        buff += key + ' ';
    }

    console.log(buff);
    
   
  
    //let final = Array.from(new Set(items));
    //console.log(final);
   

}
solve('Java C# Php PHP Java PhP 3 C#3 1 5 C#');
console.log('----------------');
solve('Cake IS SWEET is Soft CAKEsweet Food');