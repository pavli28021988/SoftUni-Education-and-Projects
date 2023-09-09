function solve(inputNumber, operator1, operator2, operator3, operator4, operator5) {
  inputNumber = manipulator(inputNumber, operator1);
  inputNumber = manipulator(inputNumber, operator2);
  inputNumber = manipulator(inputNumber, operator3);
  inputNumber = manipulator(inputNumber, operator4);
  inputNumber = manipulator(inputNumber, operator5);
  function manipulator(num, operator) {
    //let num = Number(input.split(', ').shift());
    //console.log(num);

    //let commands = input.split(' ');
    //num = Number(num);
    //let res = 0;
    //console.log(num);

    switch (operator) {
      case "chop":
        num =  num / 2;
        console.log(num);
        break;
      case "dice":
        num = Math.sqrt(num);
        console.log(num);
        break;
      case "spice":
        num =  num + 1;
        console.log(num);
        break;
      case "bake":
       num*= 3 //num = num * 3;
       console.log(num);
        break;
      case "fillet":
        num*=0.80//num = num - num * 0.2;
        console.log(num);
        break; //num * 0.8
    }

    return num;
  }
}

console.log(solve("32", "chop", "chop", "chop", "chop", "chop"));
console.log("--------------------");
console.log(solve("9", "dice", "spice", "chop", "bake", "fillet"));
