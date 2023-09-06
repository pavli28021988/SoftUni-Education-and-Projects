function solve(data){

    let splited = data.split('\\');
    //console.log(splited);
    let result = (splited[splited.length-1]).split('.');
    let fileExtension = result.pop();
    let fileName = result.join('.')
    //console.log(fileName);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);

}
solve('C:\\Internal\\training-internal\\Template.pptx');
console.log('--------------------');
solve('C:\\Projects\\Data-Structures\\LinkedList.cs');
console.log('---------------');
solve('C:\\Internal\\training-internal\\Template.bak.pptx')