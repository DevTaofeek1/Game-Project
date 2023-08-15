
let player = {
    name: "Taofeek",
    chips: 190
}
// firstCard = getRandomCard()//1
// firstCard = getRandomCard()//1
// secondCard = getRandomCard()//8
let sum = 0 //firstCard + secondCard
let cards = []//[firstCard, secondCard]
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEL = document.getElementById("message-el")
console.log(messageEL)
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.querySelector("#player-el")


playerEl.textContent = player.name + ": $" + player.chips
function getRandomCard(){
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if (randomNumber === 1){
        return 11
    }
    else if (randomNumber > 10){
        return 10
    }
    else{
        return randomNumber
    }
    
 }

function startGame(){
    isAlive = true
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card"
    }
    else if(sum === 21) {
        message = "You have gotten Blackjack"
        hasBlackJack = true
    }
    else {
        message = "You are out of the game!!!"
        isAlive = false
    }

    messageEL.textContent = message
}
function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    else{
        return messageEL.textContent = "YOU LOSE"
    }
}