import DeckOfCards from "./deckofcards.js"
import InitialDeal from "./initialdeal.js"

let deckOfCards = new DeckOfCards()
let initialDeal = new InitialDeal()

deckOfCards.shuffleDeckOfCards()
initialDeal.dealingPhase()
