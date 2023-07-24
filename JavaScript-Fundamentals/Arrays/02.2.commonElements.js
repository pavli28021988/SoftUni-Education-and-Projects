function solve(arr1,arr2){


    for (let el of arr1){


        if(arr2.includes(el)){
            console.log(el);
        }

    }

}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2']);

console.log('----------------------------');
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

['s', 'o', 'c', 'i', 'a', 'l']);

//solution 2
/* 

function solve(arr1,arr2){

    for (let i = 0;i < arr1.length; i++){
        if (arr2.includes(arr1[i])){
            console.log(arr[i]);
        }
    }

}
solve()


*/