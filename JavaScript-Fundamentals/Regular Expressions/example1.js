
/*function solve(){
    const regex = /\w+/gm;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('\\w+', 'gm')

const str = `_ (Underscores) are also word characters!`;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}

}
solve()*/

function solve(text){


    let reg = /\s+/g;

    let res = text.split(reg);
    console.log(res);

}
solve('1   2 3      4')

