function solve(str) {
  let pattern = /[=\/][A-Z][A-Za-z]{2,}[=\/]/gm; //([=\/])[A-Z][A-Za-z]{2,}\1
  let points = 0;
  let destinations = [];
  let found = str.match(pattern);
  //console.log(found);

  if (found) {
    found.forEach((el) => {
      if (el[0] === el[el.length - 1]) {
        el = el.substring(1, el.length - 1);
        points += el.length;
        destinations.push(el);
      }
    });
  }

  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${points}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");

console.log("---------------------------");

solve("ThisIs some InvalidInput");
