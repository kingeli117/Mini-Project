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
    //Funciton to eat
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
// eatButton.addEventListener('click', (setHunger))

let theGame = {


    setHunger: () => {
        const intervalID = setInterval(() => {
            const hungryID = document.querySelector('#Feed Monster');
            hungryID.innerHTML = `Hunger: ${this.hunger}`;
            this.hunger -= 3;

            if(this.hunger <= 10) {
                alert('You don\'t have what it takes to raise a Monster...');
            }
        }, 3000)
            feedButton.addEventListener('click', () => {
                petDigimon.feedPet();
                const hungryID = document.querySelector('#Feed Monster');
                hungryID.innerHTML = `Hunger: ${petDigimon.this.hunger}`
                // console.log(petDigimon.this.hunger)
            })
    }


    letsPlay: () => {
        const intervalID = setInterval(() => {
            const boredID = document.querySelector('#Exercise');
            boredID.innerHTML = `Boredom: ${this.boredom}`;
            this.boredom -= 2;

            if (this.boredom <= 10) {
                alert('You don\'t have what it takes to raise a Monster...');
            }
        }, 4000)
        playButton.addEventListener('click', () => {
            petDigimon.playTime();
            const boredID = document.querySelector('#Exercise');
            boredID.innerHTML = `Boredom: ${this.boredom}`;
        })
    }

}