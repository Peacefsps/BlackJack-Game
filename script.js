// let age = 24;
// console.log(age)

// if (age < 21) {
//     console.log('You cannot enter the club!')
// }
// else {
//     console.log('Welcome!')
// }

// let age = 100;
// console.log(age)

// if (age < 100) {
//     console.log("Not eligible!")
// }
// else if (age === 100) {
//     console.log("Here is your birthday card from the King! ✌")
// }
// else {
//     console.log("Not eligible, you have already gotten one!")
// }

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

let player = {
    name: "Peace",
    chips: 145
}

playerEl = document.getElementById('player-el')
// playerEl.innerHTML = player.name + ": $" + player.chips

let message = ""

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

function getRandomCard() {
    let randomCards = Math.floor(Math.random() * 13) + 1
    if (randomCards === 1) {
        return 11
    }
    else if (randomCards >= 10) {
        return 10
    }
    else return randomCards
}


function startGame() {
    renderGame();
}

function renderGame(){
    cardsEl.innerHTML = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game!"
        isAlive = false;
    }
    // console.log(hasBlackJack);
    // console.log(isAlive)
    messageEl.innerHTML = message
    sumEl.innerHTML = "Sum: " + sum
}

let isAlive = true
let hasBlackJack = false

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }  
}


