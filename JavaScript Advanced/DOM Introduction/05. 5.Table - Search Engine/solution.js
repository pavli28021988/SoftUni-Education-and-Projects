/*function solve() {

   //button
   //searchField
   //dataTr
   let searchBtn = document.querySelector('#searchBtn').addEventListener('click', onClick);
   let dataTr = Array.from(document.querySelectorAll('tbody > tr'));
   let searchField =document.querySelector('#searchField');
   function onClick() {

      let regex = new RegExp(searchField.ariaValueMax, 'gim');

      dataTr.map(e=>{
         e.classList.remove('select');
         if(e.innerHTML.match(regex) !== null){
            e.classList = 'select';
         }
      });


      searchField.value = '';
      

   }
}*/

function solve() {
   let dataTr = Array.from(document.querySelectorAll('tbody > tr'));
   let searchBtn = document.querySelector("#searchBtn");
   let searchField = document.querySelector("#searchField");
   searchBtn.addEventListener('click', function () {
       let regex = new RegExp(searchField.value, 'gim');
       dataTr.map(e => {
           e.classList.remove('select');
           if (e.innerText.match(regex) !== null) {
               e.className = 'select';
           }
       });
       searchField.value = '';
   });
}

//-----------solution 2----

/*

function solve() {
    const data = {
        collection: document.getElementsByTagName("tr"),
        getValue: () => document.getElementById("searchField").value,
    }

    function onClick({ collection, value }) {
        collection.map(x => (x.className = ""))
        collection.map(x => {
            if (x.innerHTML.includes(value)) x.className = "select"

            return x
        })
    }

    document.getElementById("searchBtn").addEventListener("click", () =>
        onClick({
            collection: Array.from(data.collection),
            value: data.getValue(),
        })
    )
}

*/ 

