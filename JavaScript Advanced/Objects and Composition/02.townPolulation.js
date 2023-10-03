function solve(input){

    //Sofia : 1200000

    let towns = {};

    for(let el of input){
        let [name,population] = el.split(' <-> ');
        population = Number(population);

        if(towns[name] !== undefined){
            population += towns[name];
            
            
        }
        towns[name] = population
    }

    for(let town in towns){
        console.log(`${town} : ${towns[town]}`);

        
    }

    

}
solve(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000']);
console.log('-------------');
solve(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000']);

//----------------------------------------------------------------------//

//---solution 2------------//-/

/*
function solve(input){
    let townData = input
    .map(element => {
       let data = element.split(' <-> '));
       return {
        name:data[0],
        population :Number(data[1])
       }
    });

    let registry = {};

    for(let town of townData){
        if(registry[town.name] === undefined){
            registry[town.name] = town.population;
        }else{
            registry[town.name] += town.population
        }
    }

    return registry
}

//with reduce=> .reduce((result,town)=>{
    if(result[town.name] === undefined){
        result[town.name] = town.population
    }else{
        result[town.mname] += town.population
    }
    return result
},{});

*/
//--------------------------------------------------------------------------//
/*
function towns(array = []) {
  class Town {
    constructor(name, latitude, longitude) {
      this.name = name;
      this.latitude = latitude;
      this.longitude = longitude;
    }
  }
  for (let i = 0; i < array.length; i++) {
    let arr = array[i].split(" | ");
    let name = arr[0];
    let latitude = +arr[1];
    let longitude = +arr[2];
    town = new Town(name, latitude, longitude);
    console.log(
      `{ town: '${town.name}', latitude: '${latitude.toFixed(
        2
      )}', longitude: '${longitude.toFixed(2)}' }`
    );
  }
}

*/ 