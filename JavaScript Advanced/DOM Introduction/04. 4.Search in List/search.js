function search() {
   // TODO

   let townList =Array.from(document.querySelectorAll("#towns li")) ;

   let searchText = document.getElementById("searchText").value;

   let count = 0;
  for(let item of townList){
   let text = item.textContent;

   if(text.includes(searchText)){

      item.style.textDecoration = 'underline';
      item.style.fontWeight = 'bold';
      count++;
      
   }else{
      item.style.textDecoration = 'none';
      item.style.fontWeight = 'normal'
   }
  }

  document.getElementById('result').textContent = `${count} matches found`
}




//-------------solution 2-----------------------//

/*
function search() {
    const html = {
        value: document.getElementById("searchText").value,
        data: document.getElementById("towns").children,
        result: document.getElementById("result"),
    }
    let count = 0

    Array.from(html.data).map(x => {
        if (x.innerHTML.includes(html.value)) {
            x = x.style.textDecoration = "bold underline"
            count += 1
        }
        return x
    })

    html.result.innerHTML = `${count} matches found`
}


*/ 
