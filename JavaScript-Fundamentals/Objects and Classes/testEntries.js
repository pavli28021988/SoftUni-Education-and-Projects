function solve(){
 let obj = { name:'Peter', age:'18',grade:'5.50'};
 for(let key of Object.keys(obj)){
    console.log(key);
    console.log(obj[key]);
    console.log(`${key} : ${obj[key]}`);
 }
}
solve()