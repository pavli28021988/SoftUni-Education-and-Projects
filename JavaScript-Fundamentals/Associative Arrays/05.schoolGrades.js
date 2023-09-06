function solve(arr){

    let result = new Map();
     for (let el of arr){
        let token = el.split(' ');
        let name = token.shift();
        let setOfGrade = token;

        if(!result.has(name)){
            result.set(name, setOfGrade);
        }else{
            let oldSet = result.get(name);

            for(let grade of setOfGrade){
                oldSet.push(grade);
            }

            result.set(name,oldSet);
        }
     }
     let sortEntries = Array.from(result.entries()).sort(([keyA,valueA],[keyB,valueB]) => {
        return keyA.localeCompare(keyB);
     })

     for(let [k,v] of sortEntries){
        let sumGrade = 0;
        for(let el of v){
            sumGrade += +el
        }

        let avg = sumGrade / v.length;
        console.log(`${k}: ${avg.toFixed(2)}`);
     }

}
solve(['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6']);
solve(['Steven 3 5 6 4',

'George 4 6',

'Tammy 2 5 3',

'Steven 6 3']);