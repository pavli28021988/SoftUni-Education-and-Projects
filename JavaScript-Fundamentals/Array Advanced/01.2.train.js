function solve(arr){
  let passengersInTrain = arr.shift().split(' ').map(Number);
  //console.log(passengersInTrain);
 let maxCapacityOfWagon = Number(arr.shift());// +arr.shift(arr);
  //console.log(maxCapacityOfWagon);


  for (let i = 0; i < arr.length; i++){
    let commandNum = arr[i].split(' ');
    //console.log(commandNum);

    if (commandNum[0] === 'Add'){
        passengersInTrain.push(Number(commandNum[1]));
    }else{
        for ( let a =0; a< passengersInTrain.length; a++){
             

          

            if (Number(commandNum[0]) + passengersInTrain[a] <= maxCapacityOfWagon){
                passengersInTrain[a] += Number(commandNum[0]);
                break;
            }
        }

    }
  } 

  console.log(passengersInTrain.join(' '));
}
solve(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75']);
solve(['0 0 0 10 2 4','10','Add 10','10','10','10','8','6']);