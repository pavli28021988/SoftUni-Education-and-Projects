function solve(input){

    let password = input.shift();

    let commandParser = {
        'TakeOdd' : (password) => {

            return [...password]
            .filter((symbol,index) => {return index % 2 !== 0 })
            .join('');
                
           

        },

        'Cut' : (password, index,length) => {
            index = Number(index);
            length = Number(length);

            let substring = password.substr(index,length);
            return password.replace(substring, '');

        },

        'Substitute' : (password,substring,substitute) => {
            if(password.includes(substring)) {
                return password.replace((new RegExp(substring, 'g')), substitute);
            }
            console.log('Nothing to replace!');
            return password;
        }
    };

    input.forEach(line => {
        if(line !== 'Done'){
            let[command, ...tokens] = line.split(' ');
            let oldPassword = password;

            password = commandParser[command](password,...tokens);


            if(oldPassword !== password){
                console.log(password);
            }
        }

    });

    console.log(`Your password is: ${password}`);

}
solve((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",

"TakeOdd",

"Cut 15 3",

"Substitute :: -",

"Substitute | ^",

"Done"]));
/*
function password(inp) {
    let count = 0
    let sum = ''
    let sentencetoworkat = inp.shift()

    // console.log(sentencetoworkat);

    while (inp[0] != "Done") {
        let [name, p1, p2] = inp.shift().split(' ');
        // let name = tokens[0]
        // let p1 = tokens[1]
        // let p2 = tokens[2]

        switch (name) {
            case "TakeOdd":
                for (let el of sentencetoworkat) {
                    if (count !== 0) {
                        if (count % 2 !== 0 || count == 1) {
                            sum += el;
                        }
                    }

                    count++;
                }
                count = 0;
                sentencetoworkat = sum;
                sum = '';
                console.log(sentencetoworkat);

                break;
            case "Cut":
                // let thisarr = sum.split('') 
                // let spliced = thisarr.splice(p1, p2)
                // thisarr = thisarr.join('')
                // console.log(thisarr);
                let index = Number(p1);
                let length = Number(p2);
                let substring = sentencetoworkat.substring(index, index + length);
                sentencetoworkat = sentencetoworkat.replace(substring, '');
                console.log(sentencetoworkat);

                break;
            case "Substitute":
                if (sentencetoworkat.includes(p1)) {
                    let replaced = sentencetoworkat.split(p1).join(p2)
                    sentencetoworkat = replaced;

                    console.log(sentencetoworkat);
                } else { console.log("Nothing to replace!") }

                break;
        }
    }

    console.log(`Your password is: ${sentencetoworkat}`);
}
*/