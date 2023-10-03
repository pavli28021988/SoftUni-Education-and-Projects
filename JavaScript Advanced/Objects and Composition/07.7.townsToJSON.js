function solve(data){

    let result = [];

    for(let el of data){
        let [town,latitude,longitude] = el.split('| ');
        latitude = (Number(latitude)).toFixed(2);
        longitude = (Number(longitude)).toFixed(2);

        result.push({town,latitude,longitude});
    }

    console.log(JSON.stringify(result));

}
solve(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |'])

/*


function foo(arr) {
    const parser = str =>
        str
            .split("|")
            .filter(x => x !== "")
            .map(x => x.trim())
            .map(x => (isNaN(x) ? x : Number(Number(x).toFixed(2))))
    const headings = parser(arr[0])

    return JSON.stringify(
        arr.slice(1).map(x => {
            const line = parser(x)
            return headings.reduce((row, heading, entry) => {
                row[heading] = line[entry]
                return row
            }, {})
        })
    )
}




*/