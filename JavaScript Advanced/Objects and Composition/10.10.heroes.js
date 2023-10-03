
   function solve() {
    const canCast = (state) => ({
        cast:(spell) =>{
            console.log(`${state.name} cast ${spell}`);
        }
    })


    const canFight = (state) => ({
        fight: () =>{
            console.log(`${state.name} slashes at the foe!`);
            state.stamina--
        }
    })

    
    const fighter = (name) => {
        let state = {
            name,
            health: 100,
            stamina: 100
        }

        return Object.assign(state,canFight(state));
    }

    const mage = (name) => {
        let state = {
            name,
            health: 100,
            mana: 100
        }

        return Object.assign(state, canCast(state));
    }

    return {mage:mage,fighter:fighter}
   }

let create = solve();

const scorcher = create.mage("Scorcher");

scorcher.cast("fireball")

scorcher.cast("thunder")

scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");

scorcher2.fight()

console.log(scorcher2.stamina);

console.log(scorcher.mana);


//------------------------------------------------------------------------------//

/*function hero(name, rss, attack, message) {
        return {
            name,
            message,
            health: 100,
            [rss]: 100,
            [attack]: function (msg = "") {
                console.log(this.message + msg)
                this[rss] -= 1
            },
        }
    }

    return {
        mage: n => new hero(n, "mana", `cast`, `${n} cast `),
        fighter: n => new hero(n, "stamina", `fight`, `${n} slashes at the foe!`),
    }
}*/