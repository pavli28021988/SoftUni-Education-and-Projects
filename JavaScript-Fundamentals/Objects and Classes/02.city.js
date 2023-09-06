function solve(city){

    //let city = {name: 'name',area:'area',population:'population',country:'country',postcode:'postcode'};

    /*for(let key of Object.keys(city)){
        console.log(`${key} -> ${city[key]}`);
    }*/

    //solution 2//
    let result = Object.entries(city);
    for(let [key,value] of result){
        console.log(`${key} -> ${value}`);
    }

}
solve({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    });
solve({

    name: "Sofia",
    
    area: 492,population: 1238438, country: "Bulgaria", postCode: "1000" });