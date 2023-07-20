function solve(input){

    if((typeof input === 'string') || (typeof input === 'number')){
       
        console.log(typeof input);
       
        console.log(input);


        
    } else{
        console.log(typeof input);
        console.log('Parameter is not suitable for printing');
    }

    

}
solve('Hello, JavaScript!');
solve(18);
solve(null);

/* solution 2*/


/*  function solve (input){

    let dataType = typeof input;
    console.log(input);

    if (dataType === 'string' || dataType === 'number'){
        console.log(input);
    }else{
        console.log('Parameter is not suitable for printing')
    }

}*/