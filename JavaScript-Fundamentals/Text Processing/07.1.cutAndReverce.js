function solve(input){

   // input.slice(firstIndex,secondIndex) -> firstIndex is equal to 0 and second : input.length / 2
    
   
   let reversed = input.split('').reverse().join('');
   let partOne = reversed.slice(0, input.length / 2);
    let partTwo = reversed.slice(input.length / 2, input.length);

      //string half1 = value.Substring(0, value.length/2);
      //string half2 = value.Substring(value.length/2);
      console.log(partTwo);
      console.log(partOne);
      

       
}
solve('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('-------------------');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');