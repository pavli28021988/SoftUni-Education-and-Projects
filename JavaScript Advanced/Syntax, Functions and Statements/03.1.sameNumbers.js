function solve(num){
   let converted = num.toString(); // num + "";

   let first = converted[0];
   let sum = 0;
   isFalse = true;
    for(let i =0; i < converted.length;i++){

        if( converted[i] !== first){
            isFalse = false;
        }

        sum += Number(converted[i]);

    }
    console.log(isFalse);
    console.log(sum);
}
solve(2222222)