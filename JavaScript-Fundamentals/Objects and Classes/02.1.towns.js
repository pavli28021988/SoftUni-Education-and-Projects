function solve(input){
  
  let obj = {};
  
    for(let el of input){
   let token = el.split(' | ');

   let town = token[0];
   let latitude = Number(token[1]).toFixed(2);
   let longitude = Number(token[2]).toFixed(2);

   obj.town = town;
   obj.latitude = latitude;
   obj.longitude = longitude;
    
  //console.log(`town: ${obj.town}, latitude: ${ (obj.latitude).toFixed(2)}, longitude: ${(obj.longitude)}`);
  console.log(obj);

  }
    

}
solve(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625']);
console.log('---------------------------------');
solve(['Plovdiv | 136.45 | 812.575']);