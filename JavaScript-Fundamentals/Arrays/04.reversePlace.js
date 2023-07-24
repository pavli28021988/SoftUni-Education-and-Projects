function solve(arr){

    for (let i = 0; i < arr.length / 2 ; i++){
        let oldElement = arr[i];
        let previousIndex = arr.length - 1 - i;

        arr[i] = arr[previousIndex];
        arr[previousIndex] = oldElement
    }

    console.log(arr.join(' '));

}
solve(['a', 'b', 'c', 'd', 'e']);
solve(['abc', 'def', 'hig',

'klm', 'nop']);
solve(['33', '123', '0', 'dd']);


/* solution 2*/


/*

function solve(arr){
        

        let newArr = [...arr];
        let reversed = newArr.reverse()

        console.log(reversed.join(' '));

        

        
        //console.log(arr.join(' '));
    
    }
    solve(['a', 'b', 'c', 'd', 'e']);
    solve(['abc', 'def', 'hig',
    
    'klm', 'nop']);
    solve(['33', '123', '0', 'dd']);
  


*/


/* function solve(arr){

    res = [];// buss = '';

    (let i = arr.length - 1, i >= 0; i--){
        res.push(arr[i]);//buff += arr[[i]]
    }                    // buff += ' ';

    console.log(res.join(' ' ));//console.log(buff)

}
solve(['a', 'b', 'c', 'd', 'e'])


*/