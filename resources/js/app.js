import DeckOfCards from "./deckofcards.js";
import InitialDeal from "./initialdeal.js"
import PlayerTurn from "./player.js";
import Dealer from "./dealer.js";

let deckOfCards = new DeckOfCards()
let initialDeal = new InitialDeal(deckOfCards)
let playerTurn = new PlayerTurn(deckOfCards, initialDeal)
let dealer = new Dealer(initialDeal, playerTurn)




