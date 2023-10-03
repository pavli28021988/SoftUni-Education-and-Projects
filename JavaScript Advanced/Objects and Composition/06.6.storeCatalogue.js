function solve(data){

    let res = {};

    for(let el of data){
        let[productName,productPrice] = el.split(' : ');
        productPrice = Number(productPrice);

        if(res[productName] !==undefined){
            productPrice += res[productName]
        }

        res[productName] = productPrice;
    }

    let entries = Object.entries(res);


    let sorted = entries.sort((a,b)=> a[0].localeCompare(b[0]))
    /*let final = sorted.forEach(pair =>{                      
                                              
        let key = pair[0];
        let value = pair[1]
        sorted[key] = value
       //sorted[pair[0]] = pair[1];
   
   })
*/
    
  for(let [key,value] of sorted){
    console.log(`${key} : ${value}`);
  }

}
solve(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);