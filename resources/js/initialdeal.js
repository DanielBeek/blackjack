class InitialDeal {

    constructor(deckOfCards , game) {
        this.game = game
        this.deckOfCards = deckOfCards
        this.player = [[]]
        this.dealer = []
        this.showImages()
    }

    dealingPhase() {
        for (let i = 0; i < 2; i++) {
            const playerCard = this.deckOfCards.dealCard()
            /*/ PUSH IN FIRST PLAYER HAND (IN CASE OF SPLIT FUNCTION) /*/
            this.player[0].push(playerCard)
            const dealerCard = this.deckOfCards.dealCard()
            this.dealer.push(dealerCard)
        }
        this.game.totalValue()
        this.checkForBlackjack()
    }

    checkForBlackjack() {
        switch (true) {
            /*/ CHECK IF PLAYER WINS, LOSES OR TIES IN INITIAL DEAL /*/
            case (this.game.totalDealerValue === 21 && this.game.totalPlayerValue[0] === 21):
                this.game.gameWinner = "tie"
                console.log(this.game.gameWinner)
                this.game.gameOver()
                break
            case (this.game.totalDealerValue === 21 && this.game.totalPlayerValue[0] < 21):
                this.game.gameWinner = "dealer"
                console.log(this.game.gameWinner)
                this.game.gameOver()
                break
            case (this.game.totalDealerValue < 21 && this.game.totalPlayerValue[0] === 21):
                this.game.gameWinner = "player"
                console.log(this.game.gameWinner)
                this.game.gameOver()
                break
            default:
                this.game.playerTurn.addEventListeners()
                break
        }
    }

    showImages() {

    }
}

export default InitialDeal
