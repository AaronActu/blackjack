import { getCardValue, randomIntInterval, DEFAULT_SUIT } from "./utils";

import Card from "./card.class";

class Deck {
  private cardsList: Card[] = [];

  constructor() {
    // Build deck with 4 suits
    let cardsNumber: string[] = [];
    for (let i = 0; i < 4; i++) {
      cardsNumber = cardsNumber.concat(DEFAULT_SUIT);
    }

    // Build deck with cards
    this.cardsList = cardsNumber.map(
      (cardName) => new Card(cardName, getCardValue(cardName))
    );

    // Shuffle the deck
    this.shuffle();
  }

  draw(): Card | undefined {
    if (this.cardsList.length === 0) {
      return;
    }

    const randomIndex = randomIntInterval(0, this.cardsList.length - 1);
    // @ts-ignore
    return this.cardsList.splice(randomIndex, 1);
  }

  shuffle() {
    for (let i = this.cardsList.length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);

      const card = this.cardsList[i];
      this.cardsList[i] = this.cardsList[randomIndex];
      this.cardsList[randomIndex] = card;
    }
  }
}

export default Deck;
