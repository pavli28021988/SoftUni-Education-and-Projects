
/*function solve(str){

   
   let reg = / \b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g
   
    

// Alternative syntax using RegExp constructor
// const regex = new RegExp('



let m;

if ((m = reg.exec(str)) !== null) {
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}

}*/

function solve(input) {
    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let validNames = [];
    let validName = null;
    while((validName = pattern.exec(input)) !== null){
      validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));
  }
  
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")



