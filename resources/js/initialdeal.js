import deckofcards from "./deckofcards.js";

class InitialDeal {

    dealer = []
    player = []
    shuffledDeck
    constructor() {
        this.shuffledDeck  = new deckofcards().shuffleDeckOfCards()
        // console.log(this.shuffledDeck)
    }

    dealingPhase() {
        for (let i = 0; i < 2; i++) {
            const playerHand = this.shuffledDeck.shift()
            this.player.push(playerHand)
            const dealerHand = this.shuffledDeck.shift()
            this.dealer.push(dealerHand)
        }
        console.log(this.dealer)
        console.log(this.player)
    }
}

export default InitialDeal
