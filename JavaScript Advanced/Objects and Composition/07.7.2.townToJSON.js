function solve(input) {
    const towns = [];
 
    const regex = new RegExp(/\s*\|\s*/);
    for (const line of input.splice(1)) {
        let tokens = line.split(regex).filter(Boolean);
        towns.push({
            Town: tokens[0],
            Latitude: +Number(tokens[1]).toFixed(2),
            Longitude: +Number(tokens[2]).toFixed(2)
        });
    }
 
    return JSON.stringify(towns);
}

console.log(solve(['| Town | Latitude | Longitude |',

'| Veliko Turnovo | 43.0757 | 25.6172 |',

'| Monatevideo | 34.50 | 56.11 |']));