function solve(data){

    let player = new Map();

    let enumCardPower= {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    };

    let enumCardType = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    };

    for (let line of data){
        let tokens = line.split(': ');
        let name = tokens.shift();
        let decksAsString = tokens[0];
        let deckArr = decksAsString.split(', ');
        //console.log(deckArr);

        if (!player.has(name)){
            player.set(name, new Set);
        }

        for(let card of deckArr){
            player.get(name).add(card);
        }
        //console.log(player);
    }

    for(let [key,value] of player){
        //console.log(key);
        //console.log(value);
        
        let sum = 0;

        for(let card of value){

            let cardInfo = card.split('');
            let cardType = cardInfo.pop();
            let cardPower = cardInfo.join('');
            let cardPowerAsNumber = enumCardPower[cardPower];
            let cardTypeAsNumber = enumCardType[cardType];
            sum += cardPowerAsNumber * cardTypeAsNumber;

        }

        console.log(`${key}: ${sum}`);
        
    }

}
solve([

    'Peter: 2C, 4H, 9H, AS, QS',
    
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
    'Andrea: QH, QC, QS, QD',
    
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
    'Andrea: QH, QC, JS, JD, JC',
    
    'Peter: JD, JD, JD, JD, JD, JD'
    
    ]);


    

    
    
    
    //-----------------------------------------------------------------//
    
    //------solution 1//

    /*
    function solve (input) {
    let players = {};
 
    for (line of input) {
        let player = line.split(': ')[0];
 
        if (players[player] === undefined) {
             //players[player] = new Set(line.split(': ')[1].split(', '));
             players[player] = [];
             for (el of line.split(': ')[1].split(', ')) {
                if (!players[player].includes(el)) {
                    players[player].push(el);
                }
             }
 
        } else {
            //line.split(': ')[1].split(', ').forEach(card => {
            //    players[player].add(card);
            //});
            for (el of line.split(': ')[1].split(', ')) {
                if (!players[player].includes(el)) {
                    players[player].push(el);
                }
            }
        }
 
    }
 
    function calcPlayersPower(pl) {
        let points = 0;
        pl.forEach(card => {
            points += calcCard(card);
        });
        return points;
    }
 
    function calcCard(somecard) {
        let card = somecard.split('');
        let power = 0;
        let powerType = {
            P: {
                J: 11,
                Q: 12,
                K: 13,
                A: 14,
            },
 
            T: {
                S: 4,
                H: 3,
                D: 2,
                C: 1,
            }
        };
 
        if (card.length > 2) {
            let boq = card.pop();
            let twoToTuz = Number(card.join(''));
            power += twoToTuz * powerType.T[boq];
 
        } else if (Number(card[0]) === Number(card[0])) {
            let boq = card.pop();
            let twoToTuz = Number(card);
            power += twoToTuz * powerType.T[boq];
 
        } else {
            let boq = card.pop();
            let twoToTuz = card;
            power += powerType.P[twoToTuz] * powerType.T[boq];
        }
 
        return power;
    }
 
    for (player in players) {
        console.log(`${player}: ${calcPlayersPower(players[player])}`);
    }
}
    */ 







//--------------------------------------------------------------------//
//----------solution 2---//


/*
function cardGame(input) {
 
    let cardPlayers = {};
    let values = {
        '2':2, '3': 3, '4': 4, '5': 5, '6': 6,'7': 7,'8': 8, '9': 9,
        'J': 11, 'Q': 12, 'K': 13, 'A': 14
    }
    let power = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }
 
    for (let player of input){
        let [playerName, cards] = player.split(`: `);
        let currentCards = cards.split(`, `);
 
        // Here we check if current player exists, if it doesn't, we create new player with empty array[],
        // then we check each card before pushing it into the array, to remove duplicates
        // And if the player already exists, we just check the cards, and push them into the array
        if (!cardPlayers.hasOwnProperty(playerName)){
            cardPlayers[playerName] = [];
            currentCards.forEach(card => {
                if (!cardPlayers[playerName].includes(card)){
                    cardPlayers[playerName].push(card);
                }
            });
        } else {
            for (let currentCard of currentCards) {
                if (!cardPlayers[playerName].includes(currentCard)) {
                    cardPlayers[playerName].push(currentCard);
                }
            }
        }
    }
    // We get all entries, which returns [[name, [cards] ]] and iterate through them (for each player) and then for each card
    let entries = Object.entries(cardPlayers);
    entries.forEach( player => {
        let name = player[0];
        let cards = player[1];
        let sum = 0;
 
        cards.forEach(card => {
            let cardValue = 0;
            let cardPower = 0;
            let currentCard = card.split(``);
            let cardLength = currentCard.length;
            if (cardLength === 2) {
                cardValue = Number(values[currentCard[0]]);
                cardPower = power[currentCard[1]];
                sum += cardValue * cardPower;
            } else {
                cardValue = Number (currentCard[0] + currentCard[1]);
                cardPower = currentCard[2];
                sum += cardValue * power[cardPower];
            }
        });
        console.log(`${name}: ${sum}`);
    })
}

*/ 