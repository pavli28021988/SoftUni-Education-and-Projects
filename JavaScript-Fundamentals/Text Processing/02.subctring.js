function solve(string,startIndex,count){

    let result = string.substring(startIndex,count+1);//string.substring(startIndex,startIndex + count)
    console.log(result);
}
solve('ASentence', 1, 8);
solve('SkipWord', 4, 7);