function solve(str1,str2,str3){

    let num1 = str1.length;
    let num2 = str2.length;
    let num3 = str3.length;

    let sum = num1 + num2 + num3;
    let avg = sum / 3;
    console.log(sum);
    console.log(Math.floor(avg));


}
solve('chocolate', 'ice cream', 'cake');