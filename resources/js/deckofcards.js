class DeckOfCards {

    constructor() {
        this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        this.name = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
        // this.values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
        this.values = [1, 1, 1, 1, 1, 1, 1, 4, 5, 6, 7, 8, 9]
        this.deck = []
        this.generateDeck();
        this.shuffleDeckOfCards();
    }

    generateDeck() {
        this.suits.forEach(suit => {
            this.name.forEach((name, value) => {
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
