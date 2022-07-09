class Digimon {
    constructor(name, hunger, boredom, age, sleepiness) {
        this.name = name,
            this.hunger = hunger,
            this.boredom = boredom,
            this.age = age,
            this.sleepiness = sleepiness
    }
}

class Monster extends Digimon {
    constructor(name, hunger, boredom, age, sleepiness) {
        super(name, hunger, boredom, age, sleepiness)
        this.name = '';
        this.hunger = 0;
        this.boredom = 0;
        this.age = 1;
        this.sleepiness = 0;
    }
    feedPet() {
        this.hunger--;
    }
    goToSleep() {
        this.sleepiness--;
    }
    playTime() {
        this.boredom--;
    }
}

const petDigimon = new Monster ('')
const beginButton = document.querySelector('.Start')
const exerciseButton = document.querySelector('.Play')
const eatButton = document.querySelector('.Eat')
const lightButton = document.querySelector('.Rest')

const theGame = {

    setHunger() {
        const intervalID = setInterval(() => {
            const hungryID = document.querySelector('#Hunger');
            hungryID.innerHTML = `Hunger: ${petDigimon.hunger}`;
            petDigimon.hunger -= 3;
            if(petDigimon.hunger <= 10) {
                alert('You don\'t have what it takes to raise a Monster...');
            }
        }, 3000)
            eatButton.addEventListener('click', () => {
                petDigimon.feedPet();
                const hungryID = document.querySelector('#Eat');
                hungryID.innerHTML = `Hunger: ${petDigimon.hunger}`
            })
    },

    lightsOnOff() {
        const intervalID = setInterval(() => {
            const sleepID = document.querySelector('#Rest');
            sleepID.innerHTML = `Sleepiness: ${petDigimon.sleepiness}`;
            petDigimon.sleepiness++
            if (petDigimon.sleepiness <= 10) {
                alert('You don\'t have what it takes to raise a Monster...');
            }
        }, 8000)
        lightButton.addEventListener('click', () => {
            petDigimon.goToSleep();
            document.body.style.backgroundImage = "url('../imgs/adobeStock_179970625.jpeg')";
            sleepID.innerHTML = `Sleepiness: ${petDigimon.sleepiness}`
        })
    },


    letsPlay() {
        const intervalID = setInterval(() => {
            const exerciseID = document.querySelector('#Play');
            exerciseID.innerHTML = `Boredom: ${petDigimon.boredom}`;
            petDigimon.boredom -= 2;

            if (petDigimon.boredom <= 10) {
                alert('You don\'t have what it takes to raise a Monster...');
            }
        }, 4000)
        exerciseButton.addEventListener('click', () => {
            petDigimon.playTime();
            const exerciseID = document.querySelector('#Exercise');
            exerciseID.innerHTML = `Boredom: ${petDigimon.boredom}`;
        })
    },

    evolveAge() {
        const intervalID = setInterval(() =>{
            const ageID = document.querySelector('#Age');
            ageID.innerHTML = `Age: ${petDigimon.age}`;
            petDigimon.age += 1

            if(petDigimon.age <= 5) {
                alert(`${petDigimon.name} is evolving!`);
                document.querySelector('#sprite').src = 'pngwing.com-2.png';
            }
            if(petDigimon.age <= 15) {
                alert(`${petDigimon.name} is evolving!`);
                document.querySelector('#sprite').src = `pngwing.com-3.png`;
            }
        }, 7000)
    },

    monsterName() {
        petDigimon.name = prompt('What is your monster\'s name?')
        const nameID = document.querySelector('.name');
        nameID.innerText = (`${petDigimon.name}`)
    },
    startGame() {
        alert('Starting the Digimon Virtual Tamagotchi!')
        alert('Keep your Digimon well nurtured for it to evolve to it\'s final evolution.')
        alert('And finally, Good luck!!!')
        theGame.monsterName();
        theGame.evolveAge();
        theGame.letsPlay();
        theGame.setHunger();
        theGame.lightsOnOff();
    }

}

beginButton.addEventListener('click', (event) => {
    event.target.disabled = true;
    theGame.startGame();
})

