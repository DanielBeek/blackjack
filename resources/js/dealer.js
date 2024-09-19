    class Dealer {
        constructor(deckOfCards, initialDeal, game) {
            this.deckOfCards = deckOfCards
            this.initialDeal = initialDeal
            this.game = game
        }

        dealer() {
            if (this.game.currentTurn === "dealer") {
                while (this.game.totalDealerValue < 17) {
                    const dealerCard = this.deckOfCards.dealCard()
                    this.initialDeal.dealer.push(dealerCard)
                    console.log(this.initialDeal.dealer)
                    this.game.totalValue()
                }
                    this.game.gameOver()
            }
        }
    }
    export default Dealer
