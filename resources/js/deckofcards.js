class Deckofcards {

    constructor() {
        this.deckOfCards = [
            {suit: "clubs", name: "2", src: "2C.svg", value: 2},
            {suit: "clubs", name: "3", src: "3C.svg", value: 3},
            {suit: "clubs", name: "4", src: "4C.svg", value: 4},
            {suit: "clubs", name: "5", src: "5C.svg", value: 5},
            {suit: "clubs", name: "6", src: "6C.svg", value: 6},
            {suit: "clubs", name: "7", src: "7C.svg", value: 7},
            {suit: "clubs", name: "8", src: "8C.svg", value: 8},
            {suit: "clubs", name: "9", src: "9C.svg", value: 9},
            {suit: "clubs", name: "10", src: "10C.svg", value: 10},
            {suit: "clubs", name: "jack", src: "JC.svg", value: 10},
            {suit: "clubs", name: "queen", src: "QC.svg", value: 10},
            {suit: "clubs", name: "king", src: "KC.svg", value: 10},
            {suit: "clubs", name: "ace", src: "AC.svg", value: 11},

            {suit: "diamonds", name: "2", src: "2D.svg", value: 2},
            {suit: "diamonds", name: "3", src: "3D.svg", value: 3},
            {suit: "diamonds", name: "4", src: "4D.svg", value: 4},
            {suit: "diamonds", name: "5", src: "5D.svg", value: 5},
            {suit: "diamonds", name: "6", src: "6D.svg", value: 6},
            {suit: "diamonds", name: "7", src: "7D.svg", value: 7},
            {suit: "diamonds", name: "8", src: "8D.svg", value: 8},
            {suit: "diamonds", name: "9", src: "9D.svg", value: 9},
            {suit: "diamonds", name: "10", src: "10D.svg", value: 10},
            {suit: "diamonds", name: "jack", src: "JD.svg", value: 10},
            {suit: "diamonds", name: "queen", src: "QD.svg", value: 10},
            {suit: "diamonds", name: "king", src: "KD.svg", value: 10},
            {suit: "diamonds", name: "ace", src: "AD.svg", value: 11},

            {suit: "hearts", name: "2", src: "2H.svg", value: 2},
            {suit: "hearts", name: "3", src: "3H.svg", value: 3},
            {suit: "hearts", name: "4", src: "4H.svg", value: 4},
            {suit: "hearts", name: "5", src: "5H.svg", value: 5},
            {suit: "hearts", name: "6", src: "6H.svg", value: 6},
            {suit: "hearts", name: "7", src: "7H.svg", value: 7},
            {suit: "hearts", name: "8", src: "8H.svg", value: 8},
            {suit: "hearts", name: "9", src: "9H.svg", value: 9},
            {suit: "hearts", name: "10", src: "10H.svg", value: 10},
            {suit: "hearts", name: "jack", src: "JH.svg", value: 10},
            {suit: "hearts", name: "queen", src: "QH.svg", value: 10},
            {suit: "hearts", name: "king", src: "KH.svg", value: 10},
            {suit: "hearts", name: "ace", src: "AH.svg", value: 11},

            {suit: "spades", name: "2", src: "2S.svg", value: 2},
            {suit: "spades", name: "3", src: "3S.svg", value: 3},
            {suit: "spades", name: "4", src: "4S.svg", value: 4},
            {suit: "spades", name: "5", src: "5S.svg", value: 5},
            {suit: "spades", name: "6", src: "6S.svg", value: 6},
            {suit: "spades", name: "7", src: "7S.svg", value: 7},
            {suit: "spades", name: "8", src: "8S.svg", value: 8},
            {suit: "spades", name: "9", src: "9S.svg", value: 9},
            {suit: "spades", name: "10", src: "10S.svg", value: 10},
            {suit: "spades", name: "jack", src: "JS.svg", value: 10},
            {suit: "spades", name: "queen", src: "QS.svg", value: 10},
            {suit: "spades", name: "king", src: "KS.svg", value: 10},
            {suit: "spades", name: "ace", src: "AS.svg", value: 11}
        ]
    }


    shuffleDeckOfCards() {
        const orderedDeck = this.deckOfCards.slice() // Fishers Yates Shuffle //
        for (let i = orderedDeck.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            let k = orderedDeck[i];
            orderedDeck[i] = orderedDeck[j];
            orderedDeck[j] = k;

        }
        console.log(orderedDeck.suit)
        return orderedDeck

    }
}

export default Deckofcards
