function solve(startNum,endNum){

    let sum = 0;
    let printLine = '';

    for (let i = startNum; i<=endNum;i++){

        /*console.log(i);*/
        sum += i;

        if (i === endNum){
            printLine += `${i}`;//last num without space//
        }else{

            printLine += `${i} `;
        }
        

    }
    console.log(printLine);
    console.log(`Sum: ${sum}`);

}
solve(5, 10);
solve(0, 26);
solve(50, 60);