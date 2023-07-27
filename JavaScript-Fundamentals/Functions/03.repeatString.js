function solve (string,num){

    let word = string;

    let res = word.repeat(num);

    console.log(res);

}
solve("abc", 3);
solve("String", 2);


/* function solve (string, num){


    let res = '';

    for ( let i = 0; i < num; i++){
        res += string
    }
    return res ;

}
console.log(solve("abc", 3)
);

*/