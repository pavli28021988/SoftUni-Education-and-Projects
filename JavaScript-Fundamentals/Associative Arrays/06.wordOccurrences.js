function solve(arr){

    let map = new Map();
    for(let el of arr){
        if(!map.has(el)){
            map.set(el,0);
        }

        map.set(el,map.get(el) +1);
        /*else{
            map.set(el, map.get(el) + 1);
        }*/

       
    }
    let sorted = Array.from(map.entries()).sort((a,b)=> b[1] - a[1]);

    for(let [key,value] of sorted){
        console.log(`${key} -> ${value} times.`);
    }
    

}
solve(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"]);
solve(["dog", "bye", "city", "dog", "dad",

"boys", "ginger"]);