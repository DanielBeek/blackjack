class PlayerTurn  {

    constructor(deckOfCards, initialDeal) {
        this.deck = deckOfCards
        this.initialDeal = initialDeal
        this.hitButton = document.getElementById('hit')
        this.standButton = document.getElementById('stand')
        this.doubleDownButton = document.getElementById('doubleDown')
        this.splitButton = document.getElementById('split')
        this.hit()
        this.stand()
        this.doubleDown()
        this.split()
        this.activeHand = 0
        this.splitCase = false
        this.currentTurn = true
    }

    hit() {
        const hand = this.initialDeal.player[this.activeHand]
        this.hitButton.addEventListener('click', () => {
            const removedCard = this.deck.dealCard()
            this.initialDeal.player[this.activeHand].push(removedCard)
        })
    }

    stand() {
        this.standButton.addEventListener('click', () => {
            if (this.splitCase === true && this.activeHand < this.initialDeal.player.length - 1) {
                this.activeHand += 1;
                this.splitCase = false
            } else {

            }
        })
    }

    doubleDown() {
        this.doubleDownButton.addEventListener('click', () => {
            this.initialDeal.player.forEach((hand) => {
                if (hand.length === 2) {
                    const doubleDownCard = this.deck.dealCard()
                    hand.push(doubleDownCard)
                }
                console.log(this.initialDeal.player)
            })
        })
    }

    split() {
        this.splitButton.addEventListener('click', () => {
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
                } else {
                    /*/ DISABLE IF YOU DO NOT HAVE A SPLIT HAND /*/
                    this.splitButton.disabled
                }
        })
    }
}

export default PlayerTurn
