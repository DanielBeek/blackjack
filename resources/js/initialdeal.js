class InitialDeal {

    constructor(deckOfCards) {
        this.deck = deckOfCards
        this.player = [[]]
        this.dealer = []
        this.totalDealerValue = 0
        this.totalPlayerValue = [[0]]
        this.dealingPhase()
        this.showImages()
    }

    dealingPhase() {
        for (let i = 0; i < 2; i++) {
            const playerCard = this.deck.dealCard()
            /*/ PUSH IN FIRST PLAYER HAND (IN CASE OF SPLIT FUNCTION) /*/
            this.player[0].push(playerCard)
            const dealerCard = this.deck.dealCard()
            this.dealer.push(dealerCard)
        }
        console.log(this.player)
        this.totalDealerValue = this.dealer.reduce((sum, card) => sum + card.value, 0)
        this.totalPlayerValue = this.player[0].reduce((sum, card) => sum + card.value, 0)
    }

    showImages() {

    }
}

export default InitialDeal
