function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;

  let textArray = text.split(" ");

  let res = "";

  switch (convention) {
    case "Camel Case":
      textArray.forEach((e,i)=>{
        if(i === 0){
          return res += e.toLowerCase();
        }
        return res+= e[0].toUpperCase() + e.substring(1).toLowerCase();

        
      })
      break;

    case "Pascal Case":

    textArray.forEach((e,i)=>{
      e = e.toLowerCase();
      res += e[0].toUpperCase() + e.substring(1);
    })
      break;

    default:
      res = "Error!";
  }

  document.getElementById("result").textContent = res;
}

//----solution 2-------------
/*

function solve() {
    const data = {
        case: document.getElementById("naming-convention").value,
        str: document.getElementById("text").value,
        resultSpan: document.getElementById("result"),
    }
    const result = data.str
        .split(" ")
        .map(x => x.toLocaleLowerCase())
        .map(x => `${x.charAt(0).toLocaleUpperCase()}${x.slice(1)}`)
        .join("")

    if (data.case !== "Camel Case" && data.case !== "Pascal Case") {
        data.resultSpan.innerHTML = "Error!"
    } else {
        data.resultSpan.innerHTML =
            data.case === "Pascal Case"
                ? result
                : `${result.charAt(0).toLocaleLowerCase()}${result.slice(1)}`
    }
}

*/ 


