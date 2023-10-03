let person ={
    firstName:'John',
    secondName:'Doe',
    age:(myAge)=> `My age is ${myAge}`// age: function(myAge){return `My age is ${myAge}`}
};

console.log(person.age(21));

//--------------------------------------------------------//

//sorting helper

const compareNumbers = {

    ascending: (a,b) => a-b,

    descending: (a,b) => b-a,

};
//-----------------------------------//

//accessing object content----//

const man = {
    firstName: 'Peter',
    lastName: 'Johnson',
    fullName(){
        return this.firstName + ' ' + this.lastName
    }
};

console.log(man.fullName());//'Peter Johanson'
//--------------------------------------------------------------//

//function execution context

const getFullName = person.fullName;
//console.log(getFullName());//'undefined undefined'
const anotherPerson = {
    firstName:'Bob',
    lastName:'Smith'
};

anotherPerson.fullName = getFullName;
console.log(anotherPerson.fullName());//'Bob Smith'

//-------------------------------------//

//Objects composition-----------------//

let student = {
    firstName:'Maria',
    lastName:'Lopez',
    age: 22,
    location:{lat:42.689,lang:23.322}
}

console.log(student);
console.log(student.location.lat);