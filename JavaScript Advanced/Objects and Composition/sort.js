let phoneBook = {};

phoneBook['Maria'] = '0889562389';
phoneBook['Bill'] = '0889562341';
phoneBook['Ivaylo'] = '0889562320';
phoneBook['Ana'] = '08895623301';


let sorted = {}
let result = Object
.entries(phoneBook)
.sort((first,second) =>{
    if(first[0] < second[0]) return 1;

    if(first[0 > second[0]]) return -1;
    return 0;
})
.forEach(pair =>{                      
                                              
     let key = pair[0];
     let value = pair[1]
     sorted[key] = value
    //sorted[pair[0]] = pair[1];

})
/*
//instead forEach can be also reduce()

.reduce((sorted,current) =>{
    let key = current[0];
    let value = current[1];
    sorted[key] = value;
    return sorted;
},{});

// instead of forEach can be also for of Loop-----------//

for(let pair of result){
    let key = pair[0];
    let value = pair[1];
    sorted[key] = value;
}

*/

console.log(result);

console.log(sorted);

