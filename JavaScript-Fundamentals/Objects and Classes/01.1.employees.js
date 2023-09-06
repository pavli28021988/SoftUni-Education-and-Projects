function solve(input){

    /*for(let el of input){
        //console.log(el.length);
        console.log(`Name: ${el} -- Personal Number: ${el.length}`);
    }*/

    //---solution 2---//

    let object = {};

    for(let person of input){
        object.name = person;
        object.number = person.length;
        console.log(`Name: ${object.name} -- Personal Number: ${ object.number}`);
    }

}
solve([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ]);
solve([

    'Samuel Jackson',
    
    'Will Smith',
    
    'Bruce Willis',
    
    'Tom Holland'
    
    ]);