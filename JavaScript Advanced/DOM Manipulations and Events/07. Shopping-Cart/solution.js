function solve() {
   let shoppingCart = document.getElementsByClassName("shopping-cart")[0];
   //let textArea === result

   let result = document.getElementsByTagName("textarea")[0]; // document.querySelector('textarea')
   let products = [];
   let totalPrice = 0;

   let checkoutDone = false;//after clicking over "Checkout" and every from above is done you should disable all buttons.

   shoppingCart.addEventListener("click", function (event) {
      if (event.target.nodeName !== "BUTTON") {
         //if it is different than button
         return;
      }
      if(checkoutDone){  //after clicking over "Checkout" and every from above is done you should disable all buttons.
         return;
      }

      let btn = event.target;

      if (Array.from(btn.classList).indexOf("add-product") >= 0) {
         let productElement = event.target.parentElement.parentElement;
         let name =
            productElement.querySelectorAll(".product-title")[0].textContent;
         let price = productElement.querySelectorAll(".product-line-price")[0]
            .textContent;

         result.textContent += `Added ${name} for ${price} to the cart.\n`;

         if (products.indexOf(name) < 0) {
            //indexOf() > 0=> if it does not include it

            products.push(name);
         }

         totalPrice += Number(price);

         //console.log(products);
         //console.log(totalPrice.toFixed(2));
      }else if(Array.from(btn.classList).indexOf("checkout") >= 0){

         let list = products.join(', ');

         result.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`;
         checkoutDone = true; //after clicking over "Checkout" and every from above is done you should disable all buttons.

      }
   });
}

/*

function solve() {
   Array.from(document.querySelectorAll('.add-product')).forEach(x => x.addEventListener('click', add));
   document.querySelector('.checkout').addEventListener('click', checkout);
   const products = {
      'Bread': 0.8,
      'Milk': 1.09,
      'Tomatoes': 0.99
   }
   const bought = [];
   const textArea = document.querySelector('textarea');
   let cost = 0;
   let textOutput = '';
 
   function add(e) {
      const current = e.target.parentNode.parentNode.querySelector('.product-title').textContent;
      textOutput = `Added ${current} for ${products[current].toFixed(2)} to the cart.\n`;
      cost += products[current];
      textArea.value += textOutput;
      if (!bought.includes(current)) { bought.push(current) }
   }
 
   function checkout() {
      textOutput = `You bought ${bought.join(', ')} for ${cost.toFixed(2)}.`;
      textArea.value += textOutput;
      Array.from(document.querySelectorAll('button').forEach(x => x.disabled = true));
   }
}

*/ 
