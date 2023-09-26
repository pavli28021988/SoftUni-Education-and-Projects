function solve(arr){


    //let sorted = arr.sort((a,b) => (a.length-b.length) || (a.localeCompare(b)));

    //console.log(sorted.join('\n'));

    return arr.sort((a,b)=>a.length - b.length || a.localeCompare(b)).join("\n")

}
console.log(solve(['alpha',

'beta','gamma']));
console.log('--------------------');
solve(['Isacc', 'Theodor','Jack', 'Harrison', 'George']);

//-----------------solution 2-------------------------------------------------//

/*

function solve(arr){


    let sorted = arr.sort((a,b)=>{
        if(a.length !== b.length){
            return a.length - b.length
        }else{
            return a.localeCompare(b)
        }
    })

    console.log(sorted.join("\n"));

}

*/ 