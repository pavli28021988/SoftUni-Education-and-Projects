

function solve(arr){

    let newArray = [];

    for (let i =0 ;i < arr.length;i++){
        let num1 = arr[i];
        isLargest = true;


        for(let j = i + 1; j < arr.length; j++){
            let num2 = arr[j]

            if (num1 <= num2){
                isLargest = false;
            }
        }

        if(isLargest){
            newArray.push(num1);
        }


       
    }
    console.log(newArray.join(' '));

    

}
solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);


/*function solve(arr){

    let newArray = [];
    let maxNumber = ((Math.max(...arr)));

    let maxNumbers = arr.filter(el => el === maxNumber);

    maxNumbers.sort((a,b) => a-b) ;

    newArray.push(maxNumber)

    console.log(newArray);

}
solve([1, 4, 3, 2]);

console.log('---------------------');
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);*/


/*function solve(numbers){


    //numbers.sort((a,b) => b-a);
    numbers.sort(function(a, b) {
        return b-a;
      });


      console.log(numbers.join("\n"));

}
solve([14, 24, 3, 19, 15, 17])*/