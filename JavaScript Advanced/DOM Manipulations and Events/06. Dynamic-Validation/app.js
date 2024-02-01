/*function validate() {
    let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    let inputElement = document.getElementById('email');
    let value = inputElement.value;

    inputElement.addEventListener('change',checkEmail);

    function checkEmail(event) {
        if(reg.test(event.target.value)){
            event.target.removeAttribute('class');
            return;
        }

        event.target.className = 'error';
    }
 }*/

 function validate() {
    const input = document.getElementById("email")

    function isValidEmail(str) {
        if (/^[a-z]+@[a-z]+\.[a-z]+/g.test(str)) return true

        return false
    }

    function applyStyle(e, email) {
        e.className = isValidEmail(email) ? "" : "error"
    }
    input.addEventListener("change", e => applyStyle(e.target, e.target.value))
}
///----------------------------------------------------------------------------------------------------
/*
function validateEmail(email){
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if(reg.test(email)){
        return true;
    }
    alert('Please enter valid email.');
    return false;
}

*/ 

//-----without REGEX-----------------------------------------------------------------
/*

/ JavaScript code for email validation 
        // without using regular expression 
        function validateEmailAddress(emailAddress) { 
            var atSymbol = emailAddress.indexOf("@"); 
            var dotSymbol = emailAddress.lastIndexOf("."); 
            var spaceSymbol = emailAddress.indexOf(" "); 
  
            if ((atSymbol != -1) && 
                (atSymbol != 0) && 
                (dotSymbol != -1) && 
                (dotSymbol != 0) && 
                (dotSymbol > atSymbol + 1) && 
                (emailAddress.length > dotSymbol + 1) && 
                (spaceSymbol == -1)) { 
                alert("Email address is valid."); 
                return true; 
            } else { 
                alert("Error !!! Email address is not valid."); 
                return false; 
            } 
        } 


*/ 



