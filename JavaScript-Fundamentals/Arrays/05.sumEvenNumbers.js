function solve(arr){

    for (let i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);
    }

    let evenSum =0;


    for(let el of arr){
        if (el % 2 === 0){
            evenSum += el;

            //console.log(el);

            
        }

       
    }

    console.log(evenSum);


 
   

}
solve(['1','2','3','4','5','6']);
solve(['3','5','7','9']);
solve(['2','4','6','8','10']);