function solve(numbers){
    console.log(aggegate(numbers, x => x));
    console.log(aggegate(numbers, x=> 1/x));
    console.log(aggegate(numbers, x=> x.toString()));

    function aggegate(numbers,func){
        let result = numbers[0];
        for(let i =1;i< numbers.length;i++){
            result += func(numbers[i]);
        }
        return result;
    }


    

   

}
solve([1, 2, 3]);

/*
function aggregateElements(elements){
    aggregate(elements,0,(a,b) => a+b);
    aggregate(elements,0,(a,b) => a +1/b);
    aggregate(elements,'',(a,b)=> a+b);
    function aggregate(arr,initVal,func){
        let val = initVal;
        for(let i = 0; i< arr.length;i++){
            val = func(val,arr[i]);
            console.log(val);
        }
    }

}


*/