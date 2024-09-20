class PlayerTurn {

    constructor(deckOfCards, initialDeal, game) {
        this.game = game
        this.deck = deckOfCards
        this.initialDeal = initialDeal
        this.hitButton = document.getElementById('hit')
        this.standButton = document.getElementById('stand')
        this.doubleDownButton = document.getElementById('doubleDown')
        this.splitButton = document.getElementById('split')
        this.activeHand = 0
        this.splitCase = false
    }

    addEventListeners() {
        this.hitButton.addEventListener('click', this.hit.bind(this));
        this.standButton.addEventListener('click', this.stand.bind(this));
        this.doubleDownButton.addEventListener('click', this.doubleDown.bind(this));
        this.splitButton.addEventListener('click', this.split.bind(this));
    }

    hit() {
        const removedCard = this.deck.dealCard()
        this.initialDeal.player[this.activeHand].push(removedCard)
        this.game.totalValue()
        if (this.initialDeal.totalPlayerValue > 21) {
            this.game.gameWinner = "dealer"
        }
        console.log(this.initialDeal.player)
    }

    stand() {
        if (this.splitCase === true && this.activeHand < this.initialDeal.player.length - 1) {
            this.activeHand += 1;
            this.splitCase = false
            this.game.totalValue()
        } else {
            if (this.game.currentTurn === "player") {
                this.game.currentTurn = "dealer"
                this.game.totalValue()
                this.game.dealerTurn.dealer()
            }
        }
    }

    doubleDown() {
        this.initialDeal.player.forEach((hand) => {
            if (hand.length === 2) {
                const doubleDownCard = this.deck.dealCard()
                hand.push(doubleDownCard)
            }
            if (this.initialDeal.totalPlayerValue > 21) {
                this.game.gameWinner = "dealer"
            }
            console.log(this.initialDeal.player)
        })
    }

    split() {
        /*/ LOOP THROUGH YOUR HAND /*/
        const hand = this.initialDeal.player[this.activeHand]
        /*/ CHECK IF CARDS HAVE SAME VALUE FOR SPLIT /*/
        if (hand.length === 2 && hand[0].value === hand[1].value) {
            /*/ MAKE TWO HANDS /*/
            const doubleCard = hand.splice(1, 1)
            this.initialDeal.player.push(doubleCard)
            /*/ DEAL CARD TO EACH NEW HAND /*/
            this.initialDeal.player.forEach((hand) => {
                if (hand.length === 1) {
                    const splitCard = this.deck.dealCard()
                    hand.push(splitCard)
                }
            })
            this.splitCase = true
        }
    }
}

export default PlayerTurn
