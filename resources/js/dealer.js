class Dealer {
    constructor(initialDeal, playerTurn) {
        this.initialDeal = initialDeal
        this.playerTurn = playerTurn
        this.dealer()
    }

    dealer() {
        if (this.playerTurn.currentTurn === "dealer") {
            console.log('hoi')
        }
    }

}
export default Dealer
