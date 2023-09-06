function solve(arr){
    let map = new Map();

    for(let string of arr){
        let tokens = string.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        if(!map.has(product)){
            map.set(product, +quantity);
        }else{
            let currentQuantity = map.get(product);
            let newQuantity = currentQuantity += quantity;
            map.set(product, newQuantity);
        }
    
       
    }

    
    
    let entries = Array.from(map.entries());
    for(let [key,value] of entries ){
        console.log(`${key} -> ${value}`);
    }
    /*
     for (let kvp of map){
        console.log(`${kvp[0]} -> ${kvp[1]}`)
     }
    
    */ 

}
solve(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40']);
solve(['apple 50',

'apple 61',

'coffee 115',

'coffee 40']);