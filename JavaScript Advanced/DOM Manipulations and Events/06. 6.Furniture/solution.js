/*function solve() {

  let buttons = document.querySelectorAll('button');

  buttons[0].addEventListener('click',generate);
  buttons[1].addEventListener('click',buy);


  function generate(){
    let currentItems = JSON.parse(document.querySelectorAll('textarea')[0].value);

    let tableBody = document.getElementsByTagName('tbody')[0];


    for(let item of currentItems){
      let tableRow = document.createElement('tr');
      tableRow.innerHTML = `
      <td>
      <img
          src="${item.img}">
       </td>
       <td>
           <p>${item.name}</p>
       </td>
       <td>
         <p>${item.price}</p>
        </td>
        <td>
          <p>${item.decFactor}</p>
        </td>
        <td>
           <input type="checkbox"  />
        </td>

      `
      //let td = document.createElement('td');
      //let img = document.createElement('img');
      //img.setAttribute('src', item.img);
      //td.appendChild(img);
     // tableRow.appendChild(td);

     // let townTd = document.createElement('td');
      //let townName = document.createElement('p');
      //townName.textContent = item.name;
      //townTd.appendChild(townName);
      //tableRow.appendChild(townTd);
      tableBody.appendChild(tableRow)
    }
  }

  function buy(){
    let resultArea = document.querySelectorAll('textarea')[1];
    let table = Array.from(document.querySelectorAll("tbody tr"));
    let res = [];

    for(let el of table){
      if(el.querySelector("input[type=checkbox]:checked")){
        let tableData = Array.from(el.querySelectorAll("td"));// Array.from(el.querySelectorAll("td" p))=> directly the necessary items

        let info = {
          name: tableData[1].children[0].textContent,
          price: tableData[2].children[0].textContent,
          decFactor: tableData[3].children[0].textContent
        }

        res.push(info);
      }
    }

    let names = "";
    let totalPrice = 0;
    let decFactor = 0;

    for(let i =0; i < res.length;i++){
      let item = res[i];
      let sep = i == res.length - 1 ? "" : ", ";  // if it is last word than without . 
      names += item.name + sep,
      totalPrice += Number(item.price);
      decFactor += Number(item.decFactor);
    }

    decFactor /= res.length;

    resultArea.value = `Bought furniture: ${names}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactor}`
  }
}*/



function solve() {
  const [generateBtn, buyBtn] = document.getElementsByTagName("button")
  const [generateInput, buyOutput] = document.getElementsByTagName("textarea")
  const tableBody = document.querySelector("tbody")

  const htmlTemplate = ({ img, name, price, decFactor }) => {
      const row = document.createElement("tr")

      row.innerHTML = `<td><img src=${img}></td>
<td><p>${name}</p></td>
<td><p>${price}</p></td>
<td><p>${decFactor}</p></td>
<td><input type="checkbox"/></td>`

      return row
  }

  const generate = () =>
      JSON.parse(generateInput.value).forEach(x =>
          tableBody.appendChild(htmlTemplate(x))
      )

  const buy = () => {
      const braindeadData = Array.from(
          tableBody.querySelectorAll("input[type=checkbox]:checked")
      ).map(x =>
          Array.from(x.parentNode.parentNode.children)
              .slice(1, 4)
              .map(
                  x =>
                      Number(x.children[0].innerHTML) ||
                      x.children[0].innerHTML
              )
      )
      const getSum = arr => arr.reduce((a, v) => a + v, 0)

      const names = braindeadData.map(x => x[0]).join(", ")
      const prices = getSum(braindeadData.map(x => x[1]))
      const avFactors =
          getSum(braindeadData.map(x => x[2])) / braindeadData.length

      buyOutput.value = `Bought furniture: ${names}
Total price: ${prices.toFixed(2)}
Average decoration factor: ${avFactors}`
  }

  generateBtn.addEventListener("click", generate)
  buyBtn.addEventListener("click", buy)
}