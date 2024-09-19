class DeckOfCards {

    constructor() {
        this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        this.name = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
        // this.values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
        this.values = [11, 11, 11, 11, 10, 10, 10, 10, 10, 11, 10, 11, 10]
        this.deck = []
    }

    generateDeck() {
        /*/ TAKE A SUIT /*/
        this.suits.forEach(suit => {
            /*/ TAKE A NAME WITH THE CORRESPONDING VALUE /*/
            this.name.forEach((name, value) => {
                /*/ PUSH THE CREATED CARD IN THE DECK /*/
                this.deck.push({suit: suit, name: name, value: this.values[value]})
            })
        })
    }

    shuffleDeckOfCards() {
        /*/ FISHERS YATES SHUFFLE /*/
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
        return this.deck
    }

    dealCard() {
        /*/ TAKE CARD FROM DECK /*/
        return this.deck.shift()
    }
}

export default DeckOfCards
