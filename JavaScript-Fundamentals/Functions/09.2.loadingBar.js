function solve(num){

    let completed = '%' .repeat(num / 10);

    let incomplete = '.'.repeat( 10- completed.length);


    if (incomplete.length === 0){
        console.log('100% Complete!!!');
    }else{
        console.log(`${num}% [${completed}${incomplete}]`);
        console.log(`Still loading...`);
    }

}
solve(30);
solve(50);
solve(100);