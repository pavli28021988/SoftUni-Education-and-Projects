function solve(data){

    let pattern = /(@#{1,})([A-Z][A-Za-z0-9]{4,})(@#{1,})/gm;

    let n = Number(data.shift());

    for(let i = 0 ; i < n;i++){
        //console.log(data[i]);

        let barcode = data[i];
        let match = pattern.exec(barcode);
        let concatenateDigit = "";
        let  isValid = false;

        while(match !== null){
            //console.log(match[2]);
            isValid = true;
            let barcodeText = match[2]

            for(let ch of barcodeText){
                if(!isNaN(Number(ch))){
                    concatenateDigit += ch
                }
            }
            match = pattern.exec(barcode);
        }
        if(isValid){
            concatenateDigit = concatenateDigit !== " " ? concatenateDigit : '00' ;
            console.log(`Product group: ${concatenateDigit}`);
        }else{
            console.log("Invalid barcode");
        }
    }
    

}
solve((["3","@#FreshFisH@#","@###Brea0D@###","@##Che4s6E@##"]));



/*function solve(input) {
    let numberOfbarcode = Number(input.shift());
    let pattern = /^(?<start>@#+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(?<end>@#+)$/;
    for (const line of input) {
        let code = '';
        match = pattern.exec(line);
        if (match) {
            for (const el of match.groups.barcode) {
                if (el.charCodeAt() >= 48 && el.charCodeAt() <= 57) {
                    code += el;
                }
            }
            code == '' ? console.log(`Product group: 00`) : console.log(`Product group: ${code}`);
        } else {
            console.log(`Invalid barcode`);
        }
    }
}
 solve((["3","@#FreshFisH@#","@###Brea0D@###","@##Che4s6E@##"]))*/