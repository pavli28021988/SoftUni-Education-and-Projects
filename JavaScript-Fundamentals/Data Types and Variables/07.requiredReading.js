function solve(numOfPages,pageInHour,numOfDays){

    let totalTime = numOfPages / pageInHour;
    let neededTime = totalTime / numOfDays;
    console.log(neededTime);

}
solve(212,20,2);
solve(432,15,4);