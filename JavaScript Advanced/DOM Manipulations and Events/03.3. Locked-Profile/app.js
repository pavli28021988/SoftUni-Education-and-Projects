/*function lockedProfile() {
    let btns =Array.from(document.getElementsByTagName('button'));//[...document.getElementsByTagName('button')]

    for(let btn of btns){ //btns.forEach(btn => btn.addEventListener(click,showHide))
        btn.addEventListener("click",showHide); 

    }

    function showHide(event){

        let button = event.target;
        let profile = event.target.parentElement;
        let lockStatus = event.target.parentElement.querySelector('input[type="radio"]:checked').value//'lock' = event.target.parentElement.querySelector('input[type="radio"]').value
        let moreInfo = event.target.parentElement.getElementsByTagName('div')[0]
        

        if(lockStatus === 'unlock'){
            if(button.textContent === 'Show more'){
                moreInfo.style.display = 'inline-block';

                button.textContent = 'Hide it';
            }else if(button.textContent === 'Hide it'){
                moreInfo.style.display = 'none';
                button.textContent = 'Show more';
            }
        }

    }
}*/

/*function lockedProfile(){

    function showHide(event) {
        const button = event.target;
        const profile = button.parentNode;
        const moreInformation = profile.getElementsByTagName('div')[0];
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;
    
        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInformation.style.display = 'block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }

}*/





function lockedProfile() {
    const toggle = (btn, content) => {
        if (btn.innerHTML === "Show more") {
            btn.innerHTML = "Hide it"
            content.style.display = "block"
        } else {
            btn.innerHTML = "Show more"
            content.style.display = "none"
        }
    }

    document.getElementById("main").addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") {
            const parent = e.target.parentNode
            const isUnlocked =
                parent.querySelector("input[type=radio]:checked").value ===
                "unlock"

            if (isUnlocked) {
                const infoDiv = parent.querySelector("div")
                toggle(e.target, infoDiv)
            }
        }
    })
}


