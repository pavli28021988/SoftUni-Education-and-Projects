function solve(arr){

    let result = {};

    for(let el of arr){
        let splited = el.split(' ');
        //console.log(splited);
        let name = splited[0];
        let number = splited[1];

        result[name] = number;
    }

    for(let [key,value] of Object.entries(result)){
        console.log(`${key} -> ${value}` );
    }
     /* for (let key in result){

        console.log(`${key} -> ${result[key]}`);

     }
     */
}
solve(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']);
solve(['George 0552554',

'Peter 087587',

'George 0453112',

'Bill 0845344']);