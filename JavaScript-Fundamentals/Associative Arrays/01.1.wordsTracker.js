function solve(arr){
  let map = new Map();
    let words = arr.shift().split(' ');
    for(let el of words ){
        map.set(el, 0)
    }
    //console.log(word);

    /*for(let el of arr){

        if(!map.has(el)){
            map.set(el, 1);
        }else{
            map.set(el, map.get(el) + 1)
        }

    }*/

    for(let el of arr){
        if(map.has(el)){
            map.set(el, map.get(el) + 1);
        }
    }

    let sorted = Array.from(map.entries()).sort((a,b) => b[1] - a[1]);

    for (let [key,value] of sorted){
        console.log(`${key}- ${value}`);
    }

}
solve([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ]);
solve([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence']);

    //---solution with object----//
     /*
     function solve(arr){

        let result = {};

        let words = arr.shift().split(' ');

        for(let word of words){
            result[word] = 0
        }

        for (let word of arr){
            if(result.hasOwnProperty(word)){
                
                let oldValue = result[word];
                result[word] = oldValue + 1;
            }
        }

        let sorted = Object.entries(result).sort((a,b) => b[1] - a[1]);

        for(let [key,value] of sorted){
            console.log(`${key}-${value}`)
        }

     }
     solve()
     
     */ 