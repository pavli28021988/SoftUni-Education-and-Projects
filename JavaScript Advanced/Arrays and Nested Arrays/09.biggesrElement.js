//find the biggest element in 2d array with js


/*function largestOfFour(arr) {
    var largest = 0,
        largestOrigin = [];

    for(var i = 0; i < arr.length; i++){ 
        for (var j = 0; j < arr[i].length; j++) {
            if(arr[i][j] > largest){
                largest = arr[i][j];
                largestOrigin = arr[i];
            }
        }
    }
    return largestOrigin;
}
console.log(largestOfFour([[20, 50, 10],

    [8, 33, 145]]));*/
    //----------------------------------------------------------------------------//


    /*function largestOfFour(arr) {
        var max = [];
          for(var i = 0; i < arr.length; i++){
            max.push(Math.max.apply(Math, arr[i]));
         }
       
         return max;
       }

       console.log(largestOfFour([[20, 50, 10],

        [8, 33, 145]]));*/
        //-------------------------------------------------------------------------------//

        /*
        function largestOfFour(arr) {
    var largest = 0,
        largestOrigin = [];

    for(var i = 0; i < arr.length; i++){ 
        for (var j = 0; j < arr[i].length; j++) {
            if(arr[i][j] > largest){
                largest = arr[i][j];
                largestOrigin = arr[i];
            }
        }
    }
    return largestOrigin;
}*/ 
//--------------------------------------------------------------------------------------//


function biggestElement(matrix) {
 
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
            row => row.forEach(
                col => biggestNum = Math.max(biggestNum, col)));
    console.log(biggestNum);
}

biggestElement([[20, 50, 10],

    [8, 33, 145]])

