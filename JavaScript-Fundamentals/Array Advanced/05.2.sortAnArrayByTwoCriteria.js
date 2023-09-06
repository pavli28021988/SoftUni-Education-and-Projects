function solve(arr){

    let res = arr.sort((a,b)  => a.length-b.length || a.localeCompare(b));

    console.log(res.join(' '));
    //res.forEach(el =>{

       //console.log(el)

    //});

}
solve(['alpha','beta','gamma']);
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);