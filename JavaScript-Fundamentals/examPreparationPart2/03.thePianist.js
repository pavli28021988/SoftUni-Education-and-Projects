/*function solve(data){

    let n = Number(data.shift());
    let store = {};
    for(let i = 0; i < n; i++){
        let [piece,composer,key] = data.shift().split('|');

        if(!store.hasOwnProperty(piece)){
            store[piece] = {};
        }

        store[piece][composer] = key;
    }

}
*/
function solve(input) {
    let catalog = {};
    let numberOfPieses = Number(input.shift());
 
    for(let i = 0; i < numberOfPieses; i++) {
        let [name, composer, key] = input.shift().split('|');
 
        catalog[name] = {
            composer, 
            key
        }
    }
 
    while (input[0] != "Stop") {
        let tokens = input.shift().split('|');
        let command = tokens[0];
        let name = tokens[1];
         if(command == "Add") {
            if(catalog[name] != undefined) {
                console.log(`${name} is already in the collection!`)
            } else {
                catalog[name] = {
                    composer: tokens[2],
                    key: tokens[3]
                };
 
                console.log(`${name} by ${tokens[2]} in ${tokens[3]} added to the collection!`)
            }
 
        }  else  if(command == "Remove") {
            if(catalog[name] == undefined) {
                console.log(`Invalid operation! ${name} does not exist in the collection.`)
            } else {
                delete catalog[name];
                console.log(`Successfully removed ${name}!`)
            }
        } else if(command == "ChangeKey") {
            if(catalog[name] == undefined) {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            } else {
                catalog[name].key = tokens[2];
                console.log(`Changed the key of ${name} to ${tokens[2]}!`)
            }
        }
    }
 
    // let sorted = Object.entries(catalog).sort((a, b) => {
    //     let nameA = a[0];
    //     let nameB = b[0];
 
    //     let composerA = a[1].composer;
    //     let composerB = b[1].composer;
 
    //     return nameA.localeCompare(nameB) || composerA.localeCompare(composerB);
    // });
 
    // for (let [name, piece] of sorted) {
    for (let [name, piece] of Object.entries(catalog)) {
        console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`)
    }
}
solve([ '4','Eine kleine Nachtmusik|Mozart|G Major', 'La Campanella|Liszt|G# Minor', 'The Marriage of Figaro|Mozart|G Major', 'Hungarian Dance No.5|Brahms|G Minor', 'Add|Spring|Vivaldi|E Major', 'Remove|The Marriage of Figaro', 'Remove|Turkish March', 'ChangeKey|Spring|C Major', 'Add|Nocturne|Chopin|C# Minor', 'Stop']);