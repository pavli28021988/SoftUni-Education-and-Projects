function editElement(ref,match,replacer) {


    let text = ref.textContent;

    text = text.replaceAll(match,replacer);

    ref.textContent = text;
    
}

/*
//---solution 2--------------------//

function editElement(ref,match,replacer){
    let content = ref.textContent;
    let matcher = new RegExp(match, 'g');
    let edited = content.replace(matcher,replacer);

    ref.textContent = edited;
}


*/ 
