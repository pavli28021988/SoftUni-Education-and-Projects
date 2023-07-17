/*function solve(group, type, day) {
  let price = 0;

  switch (day) {
    case 'Friday':
      if (type === "Students") {
        price += 8.45;
      } else if (type === "Business") {
        price += 10.9;
      } else if (type === "Regular") {
        price += 15;
      }

      break;
    case 'Saturday':
      if (type === "Business") {
        price += 15.6;
      } else if (type == "Students") {
        price += 9.8;
      } else if (type === "Regular") {
        price += 20;
      }

      break;
    case 'Sunday':
      if (type === "Regular") {
        price += 22.5;
      } else if (type === "Business") {
        price += 16;
      } else if (type === "Students") {
        price += 10.46;
      }

      break;
  }

  let neededMoney = group * price;
  if(group >=30 && type === 'Students'){
    let discount = neededMoney - (neededMoney * 0.15);
    console.log(`Total price: ${discount.toFixed(2)}`);

  }else if (group >= 100 && type === 'Business'){
    let freeTax = 10 * price;
    neededMoney -= freeTax;
    console.log(`Total price: ${neededMoney.toFixed(2)}`);
  }else if (group >=10  && group <=20 && type === 'Business'){

    let discount = neededMoney - (neededMoney * 0.05);
    console.log(`Total price: ${discount.toFixed(2)}`);

  }else{
    console.log(`Total price: ${neededMoney.toFixed(2)}`);
  }
}
solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");*/

/*solution 2*/

function solve(group, type, day) {

  totalPrice = 0;
  if (type === "Students") {
    switch (day) {
      case "Friday":totalPrice = group * 8.45;
        break;

      case "Saturday":totalPrice = group * 9.80;
        break;
      case "Sunday":totalPrice = group * 10.46;
        break;
    }

    if(group >=30){
      totalPrice *= 0.85;
    }
  }else if (type === 'Business'){
    if(group >= 100){
      switch (day) {
        case 'Friday': totalPrice = (group - 10) * 10.90  ;break;
        case 'Saturday':totalPrice  = (group - 10)  * 15.60 ;break;
        case 'Sunday':totalPrice  = (group - 10) * 16  ;break;
          
          
      
        
      }

    }else{
      switch (day) {
        case 'Friday': totalPrice = group  * 10.90  ;break;
        case 'Saturday':totalPrice  = group   * 15.60 ;break;
        case 'Sunday':totalPrice  = group  * 16  ;break;
      }

    }

  }else if(type === 'Regular'){

    switch (day) {
      case 'Friday': totalPrice = group  * 15  ;break;
      case 'Saturday':totalPrice  = group   * 20 ;break;
      case 'Sunday':totalPrice  = group  * 22.50  ;break;
    }

    if(group >=10 && group <=20){
      totalPrice *= 0.95;//=== totalPrice = totalPrice - (totalPrice * 0.05)
    }

  }
  console.log(`Total price:${totalPrice.toFixed(2)}`);
}
solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");
