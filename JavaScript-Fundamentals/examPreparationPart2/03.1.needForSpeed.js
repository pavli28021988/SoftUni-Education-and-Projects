/*function solve(input){

    let carsCount = input.shift();
    let result = new Map();


    for(let element of input){
        if(element === 'Stop'){
            break;
        }

        if(element.includes('|')){
            let[car,mileage,fuel] = element.split('|');

            result.set(car,[]);
            result.get(car).push(Number(mileage));
            result.get(car).push(Number(fuel));
        }

        if(element.includes(' : ')){
            let tokens = element.split(' : ');

            if(element.includes('Refuel')){
                let givenCar = tokens[1];
                let givenFuel = tokens[2];

                let sum = givenFuel + result.get(givenCar)[1];

                if(sum > 75){
                    result.get(givenCar)[1] = 75;
                    sum -= 75;
                    console.log(`${givenCar} refueled with ${givenFuel - sum} liters`);
                }else{
                    result.get(givenCar)[1] = sum;
                    console.log(`${givenCar} refueled with ${givenFuel} liters`);

                }
            }else if(element.includes('Revert')){
                let givenCar = tokens[1];
                let kilometers = Number(tokens[2]);

                result.get(givenCar)[0] -= kilometers;

                if(result.get(givenCar)[0] < 10000){
                    result.get(givenCar)[0] = 10000;
                }else{
                    console.log(`${givenCar} mileage decreased by ${kilometers} kilometers`);
                }
            }else if(element.includes('Drive')){
                let givenCar = tokens[1];
                let distance = Number(tokens[2]);
                let givenFuel = Number(tokens[3]);

                if(givenFuel <= result.get(givenCar)[1]){
                    result.get(givenCar)[1] -= givenFuel;
                    result.get(givenCar)[0] += distance;
                    console.log(`${givenCar} driven for ${distance} kilometers. ${givenFuel} liters of fuel consumed.`);
                }else{
                    console.log('Not enough fuel to make that ride');
                }

                if(result.get(givenCar)[0] >= 10000){
                    result.delete(givenCar);
                    console.log(`Time to sell the ${givenCar}`);
                }
            }
        }
        
    }
    for(let [car,carInfo] of result){
        console.log(`${car} -> Mileage: ${carInfo[0]} kms, Fuel in the tank: ${carInfo[1]} lt`);
    }

}
solve([

    '3',
    
    'Audi A6|38000|62',
    
    'Mercedes CLS|11000|35',
    
    'Volkswagen Passat CC|45678|5',
    
    'Drive : Audi A6 : 543 : 47',
    
    'Drive : Mercedes CLS : 94 : 11',
    
    'Drive : Volkswagen Passat CC : 69 : 8',
    
    'Refuel : Audi A6 : 50',
    
    'Revert : Mercedes CLS : 500',
    
    'Revert : Audi A6 : 30000',
    
    'Stop'
    
    ]);*/

//-------------------------------------------------------------------------------------------------------------------------//
    
    
    function needForSpeed(input = []) {
  let numCars = Number(input.shift());
  let cars = input.splice(0, numCars);
  let objCars = {};

  for (const car of cars) {
    let [carModel, mileage, fuel] = car.split('|');
    mileage = Number(mileage);
    fuel = Number(fuel);

    if (!objCars.hasOwnProperty(carModel)) {
      objCars[carModel] = {mileage: mileage, fuel: fuel};
    }
  }

  let betterInput = input.splice(0, input.indexOf('Stop'));

  for (const line of betterInput) {
    let [command, carName, value, value2] = line.split(' : ');
    value = Number(value);
    value2 = Number(value2);

    switch (command) {
      case 'Drive':
        let distance = value;
        let fuel = value2;

        if (fuel > objCars[carName].fuel) {
          console.log('Not enough fuel to make that ride');
        } else if (objCars[carName].fuel > fuel) {
          objCars[carName].fuel -= fuel;
          objCars[carName].mileage += distance;
          console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

          if (objCars[carName].mileage >= 100000) {
            console.log(`Time to sell the ${carName}!`);
            delete objCars[carName];
          }
        }
        break;

      case 'Refuel':
        let fuelForRefill = value;

        if (objCars[carName].fuel + fuelForRefill >= 75) {
          console.log(`${carName} refueled with ${75 - objCars[carName].fuel} liters`);
          objCars[carName].fuel = 75;
        } else {
          objCars[carName].fuel += fuelForRefill;
          console.log(`${carName} refueled with ${fuelForRefill} liters`);
        }
        break;

      case 'Revert':
        let KMs = value;

        if (objCars[carName].mileage - KMs <= 10000) {
          objCars[carName].mileage = 10000;
        } else {
          objCars[carName].mileage -= KMs;
          console.log(`${carName} mileage decreased by ${KMs} kilometers`);
        }
        break;
    }
  }

  function sortByMileage(a, b) {
    a = a[1].mileage;
    b = b[1].mileage;

    let comp = 0;

    if (b > a) {
      comp = 1;
    } else if (b < a) {
      comp = -1;
    }

    return comp;
  }

  function sortAlphabetically(a, b) {
    a = a[0];
    b = b[0];

    return a.localeCompare(b);
  }

  let arr = Object.entries(objCars).sort((a, b) => sortByMileage(a, b) || sortAlphabetically(a, b));

  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i][0]} -> Mileage: ${arr[i][1].mileage} kms, Fuel in the tank: ${arr[i][1].fuel} lt.`);
  }
}
needForSpeed([

    '3',
    
    'Audi A6|38000|62',
    
    'Mercedes CLS|11000|35',
    
    'Volkswagen Passat CC|45678|5',
    
    'Drive : Audi A6 : 543 : 47',
    
    'Drive : Mercedes CLS : 94 : 11',
    
    'Drive : Volkswagen Passat CC : 69 : 8',
    
    'Refuel : Audi A6 : 50',
    
    'Revert : Mercedes CLS : 500',
    
    'Revert : Audi A6 : 30000',
    
    'Stop'
    
    ]);



    
    
    