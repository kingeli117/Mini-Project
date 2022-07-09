
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
const newPet = new Digimon ('', 0, 0, 1, 0)

//CREATE Variables/Functions and link the values to the HTML

const beginButton = document.querySelector('.Start')
const exerciseButton = document.querySelector('.Play')
const eatButton = document.querySelector('.Eat')
const lightButton = document.querySelector('.Rest')

const theGame = {

    //CREATE a function that will increase the hunger level through intervals
    setHunger() {
        //Interval ID always equals the setInterval
        const intervalID = setInterval(() => {
            //DECLARE an ID and query select your ID
            const hungryID = document.querySelector('#Hunger');
            //Have the ID display the current the status bar
            hungryID.innerHTML = `Hunger: ${newPet.hunger}`;
            //Increase or decrease the value of chosen ID
            newPet.hunger -= 3;
            
            //IF statement for death condition
            if(newPet.hunger <= 10) {
                alert('You don\'t have what it takes to raise a Monster...');
            }
            // finally SET the intervals by milliseconds
        }, 3000)
    },

    lightsOnOff() {
        const intervalID = setInterval(() => {
            const sleepID = document.querySelector('#Rest');
            sleepID.innerHTML = `Sleepiness: ${newPet.sleepiness}`;
            newPet.sleepiness++
            if (newPet.sleepiness <= 10) {
                alert('You don\'t have what it takes to raise a Monster...');
            }
        }, 8000)
    },


    letsPlay() {
        const intervalID = setInterval(() => {
            const exerciseID = document.querySelector('#Play');
            exerciseID.innerHTML = `Boredom: ${newPet.boredom}`;
            newPet.boredom -= 2;

            if (newPet.boredom <= 10) {
                alert('You don\'t have what it takes to raise a Monster...');
            }
        }, 4000)
    },

    evolveAge() {
        const intervalID = setInterval(() =>{
            const ageID = document.querySelector('#Age');
            ageID.innerHTML = `Age: ${newPet.age}`;
            newPet.age += 1

            if(this.age <= 5) {
                alert(`${newPet.name} is evolving!`);
                document.querySelector('#sprite').src = 'pngwing.com-2.png';
            }
            if(this.age <= 15) {
                alert(`${newPet.name} is evolving!`);
                document.querySelector('#sprite').src = `pngwing.com-3.png`;
            }
        }, 10000)
    },

    monsterName() {
        newPet.name = prompt('What is your monster\'s name?')
        const nameID = document.querySelector('.name');
        nameID.innerText = (`${newPet.name}`)
    },
    //CREATE a function invoking the rest of the functions
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

}// END of object / game 

//ADD event listener to actually play the game
beginButton.addEventListener('click', (event) => {
    event.target.disabled = true;
    theGame.startGame();
})

eatButton.addEventListener('click', () => {
    newPet.feedPet();
    const hungryID = document.querySelector('#Eat');
    hungryID.innerText = `Hunger: ${newPet.hunger}`
})

lightButton.addEventListener('click', () => {
    newPet.goToSleep();
    document.body.style.backgroundImage = "url('../imgs/adobeStock_179970625.jpeg')";
    sleepID.innerHTML = `Sleepiness: ${newPet.sleepiness}`
})
exerciseButton.addEventListener('click', () => {
    newPet.playTime();
    const exerciseID = document.querySelector('#Exercise');
    exerciseID.innerHTML = `Boredom: ${newPet.boredom}`;
})