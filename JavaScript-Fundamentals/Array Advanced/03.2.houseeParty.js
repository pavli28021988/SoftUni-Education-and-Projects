function solve(arr){

    let resultArray = [];

    for (let el of arr){
        //console.log(el);
        let command = el.split(' ');
        //console.log(command);

        let name = command[0];

        if(command.length === 3){
            if(resultArray.includes(name)){
                console.log(`${name} is already in the list!`);
            }else{
                resultArray.push(name);
            }
        }else{

            if(!resultArray.includes(name)){
                console.log(`${name} is not in the list!`);
            }else{
                let index = resultArray.indexOf(name);
                resultArray.splice(index,1);
            }

        }
    }

    console.log(resultArray.join('\n'));

}
solve(['Allie is going!','George is going!','John is not going!','George is not going!']);
solve(['Tom is going!','Annie is going!','Tom is going!','Garry is going!','Jerry is going!']);