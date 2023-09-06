

    function partyTime(guests) {
        let guestListArr = guests.splice(0, guests.indexOf('PARTY'));
        let guestList = new Map();
        guestList.set('VIP', []);
        guestList.set('regular', []);
        guests.splice(1, guests.length - 1).forEach(x => {
            if (guestListArr.includes(x)) { guestListArr.splice(guestListArr.indexOf(x), 1) }
        });
    
        guestList.set('VIP', guestList.get('VIP').concat(guestListArr.filter(x => !isNaN(x[0]))));
        guestList.set('regular', guestList.get('regular').concat(guestListArr.filter(x => isNaN(x[0]))));
        console.log(guestList.get('VIP').length + guestList.get('regular').length);
        [...guestList].map(x => console.log(x[1].join('\n')));
    }

partyTime(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ]);


//solution --2----//
/*
function solve(input) {
    let partyIndex = input.indexOf('PARTY');
    let guestList = input.slice(0, partyIndex);
    let comingGuests = input.slice(partyIndex + 1);

    let reservationList = generateGuestList(guestList);

    comingGuests.forEach(guest => {
        let status = checkForVIP(guest);
        let correctList = status ? 'vip' : 'regular';
        let currentGuest = reservationList[correctList].find(g => g.guest === guest);

        if (status && currentGuest) {
            currentGuest.isHere = true;
        } else if (currentGuest) {
            currentGuest.isHere = true;
        }
    });

    let vipGuests = reservationList.vip.filter(g => !g.isHere);
    let regularGuests = reservationList.regular.filter(g => !g.isHere);

    console.log(vipGuests.length + regularGuests.length);
    vipGuests.concat(regularGuests).forEach(g => {
        console.log(g.guest);
    })

    function generateGuestList(guests) {
        let obj = {
            vip: [],
            regular: [],
        };

        guests.forEach(guest => {
            let guestObj = { guest, isHere: false };

            if (checkForVIP(guest)) {
                obj.vip.push(guestObj);
            } else {
                obj.regular.push(guestObj);
            }
        });

        return obj;
    }

    function checkForVIP(guest) {
        return !isNaN(Number(guest[0]));
    }
}
*/