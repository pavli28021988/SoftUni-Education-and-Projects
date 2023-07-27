function solve(arr){


    for (let el of arr){
        //console.log(el);

        let stringElement = el.toString();

        let reversed = stringElement.split('').reverse().join('')
        //console.log(reversed);

        if (stringElement === reversed){
            console.log('true');

        }else{

            console.log('false');

        }
    }

}
solve([123,323,421,121]);
