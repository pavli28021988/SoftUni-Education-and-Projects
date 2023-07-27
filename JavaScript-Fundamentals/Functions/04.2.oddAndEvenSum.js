function solve(num){

    oddSum = 0;
    evenSum = 0;

    num = num.toString();


    for (let el of num){
        //console.log(typeof el);

        let currentNum = Number(el);


        if(currentNum % 2 === 0){
            evenSum += currentNum

        }else{

            oddSum += currentNum

        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
solve(1000435);
solve(3495892137259234);
solve(1250245866);