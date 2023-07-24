function solve(n,input){

    let arr = [];

    for (let i = 0; i < n ; i++){
        arr.push(input[i])
        //console.log(arr);
    }

    let output = '';

    for(let i = arr.length-1;i >=0; i--){
        output += `${arr[i]} `

    }
    console.log(output);

}
solve(3,[10,20,30,40,50]);
solve(4,[-1,20,99,5]);
solve(2,[66,43,75,89,47]);


// solution 2//

/*   function solve(n,input){


    let res = [];
     for (let i = n-1; i>=0;i--){
        res.push(input[i])
     }


     console.log(res.join(' '));

}
solve(3,[10,20,30,40,50]);



*/