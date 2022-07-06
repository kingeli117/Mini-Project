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
const pet = new Monster ('')
const beingButton = document.querySelector('#Begin')
const exerciseButton = document.querySelector('#Exercise!')
const eatButton = document.querySelector('#Feed Monster')
const lightButton = document.querySelector('#Lights On/Off')
// eatButton.addEventListener('click', (setHunger))

let theGame = {
    setHunger: () => {
        const intervalID = setInterval((this.hunger)) => {
            const hungryID = document.querySelector(#Hunger);
            // ask about innerHTML 
            hungryID.innerHTML = `Hunger: ${this.hunger}`;
        }
    }
}