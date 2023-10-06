let h1Element = document.getElementsByTagName('h1')[0].innerHTML = '<p>Test</p>';
//console.log(h1Element);

let secondLi = document.getElementsByTagName('li')[1];
secondLi.innerHTML += " -DONE";

element.innerHTML = `<p>Welcome to the DOM</p>`
element = document.getElementById('main')
let text = element.textContent;
element.textContent = "Welcome to the DOM"

let header = document.getElementsByTagName('h1');

for(element of header){
    let children = element.childNodes;



    for(let child of children){
        child.innerHTML = 'Changed'
    }
}

//<h1>Introduction to DOM</h1>