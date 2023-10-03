let person = {name:'Peter'};
console.log(person.name);


person['job-title'] = 'Trainer';
console.log(person['job-title']);//trainer

console.log(person.job-title);//referenceError

//--------------------------------------------------
let department = {

    name:'Engineering',
    director:'Ted Thompson',
    employeeCount:25

};

let {name,employeeCount} = department;

console.log(name, employeeCount);

//---------------------------------------------------------//
let person = {
    name:'Peter',
    age:21,
    ['job-title']:'Trainer'
}

delete person.age;
//--------------------------------------------------------------//

let x = {name:'John'};
let y = x;

y.name = 'Pavli'

console.log(x.name);//pavli
//-------------------------------------------//

let fruit = {name:'apple'};
let fruitbear = {name:'apple'};
fruit == fruitbear;//false;
fruit === fruitbear;//false

let fruit = {name:'apple'};

let friutbear = fruit;
fruit == fruitbear;//true;
fruit === fruitbear;//true;
//----------------------------------------//

//----for....in Loop--------------//

let obj = {a:1,b:2,c:3};

for(let el in obj){
    console.log(`obj.${el} = ${obj[el]}`);//obj.a = 1;obj.b = 2;obj.c=3
}
//--------------------------//

//----Object keys and Values----------//

let phonebook = {'Tim': '55-56-49', 'Bill' : '26-88-96', 'Peter': '26-88-92'}

let keys = Object.keys(phonebook);
console.log(keys);//['Tim','Bill','Peter']

let values = Object.values(phonebook);
console.log(values);//['25-89-66']

let entries = Object.entries(phonebook);
console.log(entries);//[['Tim', '25-99-89']]
//------------------------------------------------//




