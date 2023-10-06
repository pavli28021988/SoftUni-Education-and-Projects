/*function extract(content) {
   const target = document.getElementById(content);


   return target.innerHTML
   .match(/(?!\()[\w*\s*\d*]*(?=\))/g)
   .filter(x => x!== "")
   .join("; ")
}*/

/*function extract(content) {
    const target = document.getElementById(content).textContent

    return target.innerHTML
        .match(/(?!\()[\w*\s*\d*]*(?=\))/g)
        .filter(x => x !== "")
        .join("; ")
}*/



function extract(content){
    let para = document.getElementById(content).textContent
    let pattern = /\(([^]+)\)/g;
    let result = [];


    let match = pattern.exec(para);

    while(match){
        result.push(match[1]);
        match = pattern.exec(para);
    }

    return result.join('; ')
}


//-----solution 3------------------------
/*

function solve(elementId){
    let elementText = document.getElementById(elementId).textContent;


    let pattern = /\(([^]+)\)/g;

    let result = elementText.matchAll(pattern);

    let matches = [];

    for(let text of result){
        matches.push(text[1]);
    }

    return matches.join('; ')
}



*/ 

