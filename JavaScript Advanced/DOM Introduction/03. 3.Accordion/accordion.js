function toggle() {
   
   let button = document.getElementsByClassName("button")[0];//let button = document.querySelector('span.button');

   let hidden = document.getElementById("extra");

   if(button.textContent == "More"){
    hidden.style.display = 'block';
    button.textContent = 'Less';
   }else if(button.textContent == 'Less'){

    hidden.style.display = 'none';
    button.textContent = 'More'

   }
   
}


//----solution 2------------------------------------------------//

/*
function toggle() {

  let el = document.getElementsByClassName("button")[0]

  let extra = document.getElementById("extra")

  extra.style.display = extra.style.display == "none" ? "block" : "none"

  el.textContent= el.textContent == "Less" ? "More" : "Less"

}

*/ 


//---solution 3---------------------------------------//
/*
function toggle() {
    const html = {
        button: document.getElementsByClassName("button")[0],
        content: document.getElementById("extra"),
    }

    if (html.button.innerHTML === "More") {
        html.button.innerHTML = "Less"
        html.content.style.display = "block"
    } else {
        html.button.innerHTML = "More"
        html.content.style.display = "none"
    }
}


*/ 