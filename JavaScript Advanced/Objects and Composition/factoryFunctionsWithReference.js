function solve(width,height){
  const mega ={width,height};

  mega.getArea= () => {
    return mega.width * mega.height;
  }
  return mega
}

//let retrangle = solve(100,200);

//console.log(retrangle.getArea());

console.log(solve(100,200).getArea());