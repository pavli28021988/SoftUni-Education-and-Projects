
function solve(matrix){



    for(let i = 0; i<matrix.length -1 ; i++){
        let sumRowOne = matrix[i].reduce((acc,el) => acc + el);

        let sumRowTwo = matrix[i+1].reduce((acc,el) => acc + el);

        let sumColOne = 0;
        let sumColTwo = 0;

        for(let col = 0; col < matrix.length;col++){
            sumColOne += matrix[i][col];
            sumColTwo += matrix[i+1][col];
        }

        if(sumRowOne !== sumRowTwo || sumColOne !== sumColTwo){
            return false
        }
    }
    return true
}
console.log(solve([[4, 5, 6],

    [6, 5, 4],
    
    [5, 5, 5]]));



/*// Javascript program to check whether a given
// matrix is magic matrix or not
 
 
// Returns true if mat[][] is magic
// square, else returns false.


function solve(matrix){


    let N = matrix.length;
    // // sumd1 and sumd2 are the sum of the two diagonals

    let sumd1 =0,sumd2=0;
    for(let i =0;i<N;i++){
        // (i, i) is the diagonal from top-left -> bottom-right
        // (i, N - i - 1) is the diagonal from top-right -> bottom-left

        sumd1 = sumd1 + matrix[i][i];
        sumd2 = sumd2 + matrix[i][N-1-i];
    }

    // if the two diagonal sums are unequal then it is not a magic square


    if(sumd1 !== sumd2){
        return false;
    }

    for(let i = 0; i<N;i++){
        let colSum = 0;
        let rowSum = 0;

        for(let j = 0;j<N;j++ ){
            rowSum += matrix[i][j];
            colSum += matrix[j][i]
        }

        if(rowSum !== colSum || colSum !== sumd1){
            return false;
        }
    }

    return true;




}
console.log(solve([[4, 5, 6],

    [6, 5, 4],
    
    [5, 5, 5]]));*/