
// prompt('Do you want to take care of Veemon?')
//CREATE Class and parameters
class Digimon {
    constructor(name, hunger, boredom, age, sleepiness) {
        this.name = name,
            this.hunger = hunger,
            this.boredom = boredom,
            this.age = age,
            this.sleepiness = sleepiness
    }
}
//CREATE Tamagotchi/Monster and give stats
class Monster extends Digimon {
    constructor(name, hunger, boredom, age, sleepiness) {
        super(name, hunger, boredom, age, sleepiness)
        this.name = '';
        this.hunger = 2;
        this.boredom = 1;
        this.age = 1;
        this.sleepiness = 5;
    }
    //Function to eat
    feedPet() {
        this.hunger -= 2;
    }
    //Function to sleep
    goToSleep() {
        this.sleepiness = this.sleepiness -= 4;
    }
    // Function to reduce boredom
    playTime() {
        this.boredom = this.boredom -3;
    }
}
// console.log(Monster)

//CREATE Variables/Functions and link the values to the HTML
const petDigimon = new Monster ('')
const beginButton = document.querySelector('#Begin')
const exerciseButton = document.querySelector('#Exercise!')
const eatButton = document.querySelector('#Feed Monster')
const lightButton = document.querySelector('#Lights On/Off')

let theGame = {

    //CREATE a function that will increase the hunger level through intervals
    setHunger: () => {
        //Interval ID always equals the setInterval
        const intervalID = setInterval(() => {
            //DECLARE an ID and query select your ID
            const hungryID = document.querySelector('#Hunger');
            //Have the ID be the status bar
            hungryID.innerHTML = `Hunger: ${petDigimon.hunger}`;
            //Increase or decrease the value of chosen ID
            petDigimon.hunger -= 3;
            
            //IF statement for death condition
            if(this.hunger <= 10) {
                alert('You don\'t have what it takes to raise a Monster...');
            }
            // FINALLY set the intervals by milliseconds
        }, 3000)
            //ADD event listeners
            feedButton.addEventListener('click', () => {
                petDigimon.feedPet();
                const hungryID = document.querySelector('#Feed Monster');
                hungryID.innerHTML = `Hunger: ${petDigimon.hunger}`
                // console.log(petDigimon.this.hunger)
            })
    },


    letsPlay: () => {
        const intervalID = setInterval(() => {
            const exerciseID = document.querySelector('#Exercise');
            exerciseID.innerHTML = `Boredom: ${petDigimon.boredom}`;
            petDigimon.boredom -= 2;

            if (petDigimon.boredom <= 10) {
                alert('You don\'t have what it takes to raise a Monster...');
            }
        }, 4000)
        playButton.addEventListener('click', () => {
            petDigimon.playTime();
            const exerciseID = document.querySelector('#Exercise');
            exerciseID.innerHTML = `Boredom: ${petDigimon.boredom}`;
        })
    },

    evolveAge: () => {
        const intervalID = setInterval(() =>{
            const ageID = document.querySelector('#Age');
            ageID.innerHTML = `Age: ${petDigimon.age}`;
            petDigimon.age += 1

            if(this.age <= 5) {
                alert(`${petDigimon.name} is evolving!`);
                document.querySelector(`#sprite`).src = `pngwing.com-2.png`;
            }
            if(this.age <= 15) {
                alert(`${petDigimon.name} is evolving!`);
                document.querySelector(`#sprite`).src = `pngwing.com-3.png`;
            }
        }, 10000)
    },

    monsterName: () => {
        petDigimon.name = prompt('What is your monster\'s name?')
        const nameID = document.querySelector(`.name`);
        nameID.innerHTML = (`${petDigimon.name}`)
    },

    startGame: () => {
        monsterName();
        evolveAge();
        letsPlay();
        setHunger();

    }

}// END of object / game 
