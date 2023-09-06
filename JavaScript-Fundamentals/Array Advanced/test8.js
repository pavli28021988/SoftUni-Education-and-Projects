//Write a JavaScript program to find the most frequent item in an array.


/*function solve(arr){


    let res = 0;
    let count = 1;

    for ( let i = 1; i < arr.length;i++){
        if (arr[i] === arr[res]){
            count++
        }else{
            count--
        }

        if (count === 0){
            res = i;
            count = 1;
        }
    }
    return arr[res];

}

console.log(solve([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
solve([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])*/


/*function mostFrequent(arr) {
     let n= arr.length;
    let maxcount = 0;
    let element_having_max_freq;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] == arr[j])
                count++;
        }
 
        if (count > maxcount) {
            maxcount = count;
            element_having_max_freq = arr[i];
        }
    }
 
    return element_having_max_freq;
}
console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));*/


function solve(arr1){
    let mf = 1; // how many times we have the item
    let m = 0;
     let  item;
for (let i=0; i<arr1.length; i++)
{
        for (let j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}

console.log(`${item} (${mf} times)`);

}

solve([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);