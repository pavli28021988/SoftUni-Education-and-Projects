function solve(input){

    let res = [];


    for(let i = 0; i < input.length;i++){
        if(i % 2 !== 0 ){
            res.push(input[i]);
        }
    }

   // console.log(res.join(' '));
    res = res.reverse();
    
   /*for (let el of res){
    

    let res = el * 2;
    console.log(res);
   }*/

   res.forEach((el) => console.log(el *2))

}
solve([10, 15, 20, 25]);
console.log('-----------------');
solve([3, 0, 10, 4, 7, 3]);