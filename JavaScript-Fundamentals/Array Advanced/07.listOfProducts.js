function solve(arr){

    let ordered = arr.sort();
    //console.log(ordered);

    for (let i = 0; i < ordered.length;i++){
        res = `${i + 1}.${ordered[i]}`

        console.log(res);
    }

    

}
solve(['Potatoes', 'Tomatoes', 'Onions',

'Apples']);
solve(['Watermelon', 'Banana', 'Apples']);