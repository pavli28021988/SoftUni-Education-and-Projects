function solve() {
  let input = document.getElementById('input').value;
  let output = document.getElementById('output');

  output.innerHTML = "";//clean ;

  let arrayText = input.split(".");


  for(let i = 0; i < arrayText.length;i+=3){
    let res = [];

    for(let x = 0; x < 3;x++){
      if(arrayText[i+x]){
        res.push(arrayText[i+x]);
      }
    }

    let textRes = res.join('. ') + '.'.trim();

  output.innerHTML += `<p>${textRes}</p>`
  }

  let textRes = res.join('. ') + '.'

  output.innerHTML += `<p>${textRes}</p>`
}
//------------------------------------------------------------------------------//




/*
function solve() {
    let inputStr = document.getElementById('input').value;
    let output = document.getElementById('output');
 
    let input = inputStr.split('.').filter((p) => p.length > 0);
 
    for (let i = 0; i < input.length; i += 3) {
        let arr = [];
        for (let y = 0; y < 3; y++) {
            if (input[i + y]) {
                arr.push(input[i + y]);
            }
        }
        let paragraph = arr.join('. ') + '.';
        output.innerHTML += `<p>${paragraph}</p>`;
    }
}*/ 

//-------------solution 2---------------------------------------------

/*
function solve() {
    const html = {
        textField: document.getElementById("input"),
        outputDiv: document.getElementById("output"),
    }
    const workArr = html.textField.value
        .split(".")
        .filter(x => x.length >= 1)
        .map(x => x.trim())

    const tagTemplate = (tag, text) => `<${tag}>${text}</${tag}>`
    let tempIndex = 0

    html.outputDiv.innerHTML = workArr
        .reduce((a, v, i) => {
            if (i % 3 === 0 && i !== 0) tempIndex += 1
            a[tempIndex] = (a[tempIndex] || "") + `${v}.`
            return a
        }, [])
        .map(x => tagTemplate("p", x))
        .join("\n")
}

*/ 