function solve(arr){

    let info ={};

    for(let el of arr){
        let [name,address] = el.split(':');
        info[name] = address;
    }
    
    let entries = Object.entries(info);
    let sorted = entries.sort((a,b) =>{
       return  a[0].localeCompare(b[0]);
    })
    /*
    let sorted = entries.sort(([keyA,valueA],[keyB,valueB]) => }

    return keyA.localeCompare(keyB)
    })
    */

    for(let [key,value] of sorted){
        console.log(`${key} -> ${value}`);
    }
    

}
solve(['Tim:Doe Crossing','Bill:Nelson Place','Peter:Carlyle Ave','Bill:Ornery Rd']);

console.log('---------------------------');
solve(['Bob:Huxley Rd','John:Milwaukee Crossing','Peter:Fordem Ave','Bob:Redwing Ave','George:Mesta Crossing','Ted:Gateway Way','Bill:Gateway Way','John:Grover Rd','Peter:Huxley Rd','Jeff:Gateway Way','Jeff:Huxley Rd']);