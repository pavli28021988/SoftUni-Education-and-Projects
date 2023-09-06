// Write a JavaScript program that prints the elements of the following array.
//// a sample 2-D array 
function solve(arr){

    for (let el in arr){
        console.log(`row ${el}`);

        for (let sum in arr[el]){
            console.log(`  ${arr[el][sum]}`);
        }
    }

}
solve([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]);