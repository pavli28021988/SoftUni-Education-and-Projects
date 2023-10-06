

function solve() {
   const html = {
       inputField: document.querySelector("#inputs textarea"),
       outputBestName: document.querySelector("#bestRestaurant p"),
       outputBestWorkers: document.querySelector("#workers p"),
   }

   const getBest = data =>
       Object.entries(data).sort(
           (x, y) => getAverage(y[1]) - getAverage(x[1])
       )[0]

   const getAverage = workersData =>
       workersData.reduce((a, v) => a + v[1], 0) / workersData.length

   function deserialize(data) {
       const getWorkers = data =>
           data
               .split(", ")
               .map(x => x.split(" ").map(y => (isNaN(y) ? y : Number(y))))

       return JSON.parse(data)
           .map(x => x.split(" - "))
           .reduce((a, v) => {
               const [name, workers] = v

               a[name] = a[name]
                   ? [...a[name], ...getWorkers(workers)]
                   : getWorkers(workers)
               return a
           }, {})
   }

   function displayResult(data) {
       let [name, workers] = data
       workers = workers.sort((x, y) => y[1] - x[1])

       html.outputBestName.innerHTML = `Name: ${name} Average Salary: ${getAverage(
           workers
       ).toFixed(2)} Best Salary: ${workers[0][1].toFixed(2)}`

       html.outputBestWorkers.innerHTML = `${workers
           .map(x => `Name: ${x[0]} With Salary: ${x[1]}`)
           .join(" ")}`
   }

   document
       .getElementById("btnSend")
       .addEventListener("click", () =>
           displayResult(getBest(deserialize(html.inputField.value)))
       )
}




/*function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
       let arr = JSON.parse(document.querySelector('#inputs textarea').value);
       let objWinner = findBestRestaurant(arr);
       document.querySelector('#bestRestaurant>p').textContent = getMsgRest(objWinner);
       document.querySelector('#workers>p').textContent = getMsgEmp(objWinner.workers);
   }

   function getMsgRest(objWinner) {
       return `Name: ${objWinner.name} Average Salary: ${objWinner.avgSalary.toFixed(2)} Best Salary: ${objWinner.maxSalary.toFixed(2)}`;
   }

   function getMsgEmp(workers) {
       return workers.map(w => `Name: ${w.worker} With Salary: ${w.salary}`).join(' ');
   }

   function findBestRestaurant(arr) {
       let resultRestaurants = arr.reduce((acc, e) => {
           let [restaurant, ...workers] = e.split(/(?: - )|(?:, )/g);
           workers = workers.map(w => {
               let [worker, salary] = w.split(' ');
               return {
                   worker: worker,
                   salary: +salary
               };
           });
           let foundRestraunt = acc.find(r => r.name === restaurant);
           if (foundRestraunt) {
               foundRestraunt.workers = foundRestraunt.workers.concat(workers);
           } else {
               acc.push({
                   name: restaurant,
                   workers: workers
               });
           }
           return acc;
       }, []);

       resultRestaurants.forEach((el, idx) => {
           el.inputOrder = idx;
           el.avgSalary = el.workers.reduce((acc, el) => acc + el.salary, 0) / el.workers.length;
           el.maxSalary = Math.max(...el.workers.map(w => w.salary));
       });

       resultRestaurants.sort((a, b) => b.avgSalary - a.avgSalary || a.inputOrder - b.inputOrder);
       let bestRestaurant = resultRestaurants[0];
       bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

       return bestRestaurant;
   }
}*/



//-------------------------------------------------------------------------//

/*function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('textarea').value);
      let bestRestaurantOutput = document.querySelector('#bestRestaurant p');
      let bestWorkersOutput = document.querySelector('#workers p');

      let restaurant = [0, 0, 0, 0];

      input.forEach(line => {
         line = line.match(/[^-,\s]+/g);
         let restaurantName = line.shift();
         let workers = line.filter(e => isNaN(e));
         let salaries = line.filter(e => !isNaN(e));

         if (restaurant[0] === restaurantName) {
            restaurant[2].push(...workers);
            restaurant[3].push(...salaries);
            restaurant[1] = calcAverageSalary(restaurant[3]);
         } else {
            let averageSalary = calcAverageSalary(salaries);
            if (averageSalary > restaurant[1]) {
               restaurant[0] = restaurantName;
               restaurant[1] = averageSalary;
               restaurant[2] = workers;
               restaurant[3] = salaries;
            }
         }
      });

      function calcAverageSalary(salaries) {
         return salaries.reduce((a, b) => Number(a) + Number(b)) / salaries.length;
      }
      function calcHighestSalary() {
         return Math.max.apply(null, restaurant[3]);
      }
      function sortSalaries() {
         let workersAndSalaries = {};
         restaurant[2].forEach((e, i) => {
            workersAndSalaries[e] = restaurant[3][i];
         });
         let sorted = Object.entries(workersAndSalaries).sort((a, b) => b[1] - a[1]);
         print(sorted);
      }
      sortSalaries();

      function print(sorted) {
         bestRestaurantOutput.textContent =
            `Name: ${restaurant[0]} Average Salary: ${(restaurant[1]).toFixed(2)} Best Salary: ${(calcHighestSalary()).toFixed(2)}`
         sorted.forEach(([name, salary]) => bestWorkersOutput.textContent += `Name: ${name} With Salary: ${salary} `);
      }
   }
}*/



//------------------------------------------------------------------------------------//



/*function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let result = [];
   function onClick () {
     
     //restaurant name
     //avgSalary
     //bestSalary

     //worker name
     //worker salary
     
      //let inputText = JSON.parse(document.querySelector('#inputs textarea'));
      let inputText  = JSON.parse(document.getElementById("inputs").children[1].value)

      let bestRestaurantInfo = document.getElementById("bestRestaurant").children[2];
      let bestResWorker = document.getElementById("workers").children[2];
      


      for(let data of inputText){
         let [name,workerList] = data.split(" - ");

         if(!result.find(e=> e.name === name)){

            result.push({
               name,
               avgSalary: 0,
               bestSalary: 0,
               sumSalary:0,
               workerList:[]
            });

            let currentRestaurant = result.find(e=>e.name === name);
            workerList =workerList && workerList.split(", ");

            for(let currentWorker of workerList){
               updateRestaurant(currentRestaurant,currentWorker)

            }

         }

         
        let bestRestaurant = result.sort((a,b) =>b.avgSalary - a.avgSalary)[0];

        bestRestaurantInfo.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`
         
        let sortListOfWorker = bestRestaurant.workerList.sort((a,b) => b.salary-a.salary);
        let buff = "";
        for(let worker of sortListOfWorker){
         buss += `Name: ${worker.name} With Salary: ${worker.salary} `
        }

        bestResWorker.textContent += buff;
       
      }

      function updateRestaurant(obj, worker){
         let[name,salary] = worker.split(" ");
         salary = Number(salary);
         obj.sumSalary+=salary;

         if(obj.bestSalary < salary){
            obj.bestSalary = salary;
         }

         obj.workerList.push({
            name,
            salary
         });

         obj.avgSalary = obj.sumSalary / obj.workerList.length;

      }
   }
}*/