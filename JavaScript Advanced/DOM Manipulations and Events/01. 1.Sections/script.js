function create(words) {
   //console.log(words);

   for(let word of words){

      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;

      div.appendChild(p)

      let divParent = document.getElementById('content');

       divParent.appendChild(div);
       p.style.display = 'none';
       div.addEventListener('click', showP);

   }

   function showP(e){

      if(e.target.nodeName === "P"){
         return   //p.style.display = 'block'//if we click somewhere else to be not show
      }

     let p = e.target.children[0];
     p.style.display = 'block';
   
   }

   
}