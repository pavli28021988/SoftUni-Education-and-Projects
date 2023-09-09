/*function solve(text){

    let res = [];
    let buff = '';

    for(let i = 0; i < text.length; i ++){
        let chCode = text.charCodeAt(i);
        if((chCode >= 65 && chCode <= 90) || (chCode >= 97 && chCode <= 122)){
            buff += text[i];
        }else{
            res.push(buff);
            buff = '';
        }
    }

    if (buff){
        res.push(buff);
    }
    console.log(res);

}*/


function solve(text) {

    let result = text.toUpperCase()
      .split(/[\W]+/)
      .filter(w => w.length > 0)
      .join(", ");
  
    console.log(result);
  }
  
  
  /*function solve(text) {
    let result = text.toUpperCase()
      .match(/\w+/g)
      .join(', ');
    
    console.log(result);
  }*/
  
solve('Hi, how are you?');
console.log('----------------------');
solve('hello')