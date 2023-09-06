function solve(result){

    let obj = JSON.parse(result);
    
    for(let [key,value] of Object.entries(obj)){
        console.log(`${key} : ${value}`);
    }

}
solve('{"name": "George", "age": 40, "town": "Sofia"}');
solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}');