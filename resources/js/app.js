import DeckOfCards  from "./deckofcards.js"
import InitialDeal from "./initialdeal.js"
import PlayerTurn from "./player.js"
import Dealer from "./dealer.js"
import dealer from "./dealer.js";

export class Game {

    constructor() {
        this.betConfirm = document.getElementById('confirmBet')
        this.currentTurn = "player"
        this.isGameOver = false
        this.gameWinner = "none"
        this.totalPlayerValue = [[]]
        this.totalDealerValue = 0
        this.deckOfCards = new DeckOfCards()
        this.initialDeal = new InitialDeal(this.deckOfCards, this)
        this.playerTurn = new PlayerTurn(this.deckOfCards, this.initialDeal, this)
        this.dealerTurn = new Dealer(this.deckOfCards, this.initialDeal, this)
    }

    totalValue() {
        this.initialDeal.player.forEach((hand, handIndex) => {
            let handValue = 0
            hand.forEach((card) => {
                const cardValue = card.value
                handValue += cardValue
            })
            this.totalPlayerValue[handIndex] = handValue;
        })
        let handValue = 0
        this.initialDeal.dealer.forEach((card) => {
            const cardValue = card.value
            handValue += cardValue
        })
        this.totalDealerValue = handValue
    }

    startGame() {
        this.betConfirm.addEventListener('click', () => {
            this.deckOfCards.generateDeck()
            this.deckOfCards.shuffleDeckOfCards()
            this.initialDeal.dealingPhase()
        })

    }

    gameOver() {
        if (this.gameWinner === "dealer") {
            console.log('dealer wins')
        } else if (this.gameWinner === "player") {
            console.log('player wins')
        }   else if (this.gameWinner === "tie") {
            console.log('tie')
        }
    }
}

const game = new Game()
game.startGame()







