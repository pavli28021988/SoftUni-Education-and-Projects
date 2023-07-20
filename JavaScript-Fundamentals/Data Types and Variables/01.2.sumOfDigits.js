function solve(num){

    let sum = 0;
    num = num.toString();

for (let i = 0; i < num.length;i++){
    //console.log(num[i]);
    sum += Number(num[i]);
}
console.log(sum);


}
solve(245678);
solve(97561);
solve(543);
solve(25);