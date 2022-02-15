"use strict";

import Card from "./card.class";
import Deck from "./deck.class";

class Player {
  private static playerCounter: number = 0;
  private playerHand: Card[] = [];
  private playerName: string;
  private deck;

  constructor(deck: Deck, name?: string) {
    Player.playerCounter++;
    this.playerName = name ?? `Player ${Player.playerCounter}`;
    this.deck = deck;

    // Give 2 cards to player by default
    this.hit();
    this.hit();
  }

  public get cards(): Card[] {
    return this.playerHand;
  }

  public get handValue() {
    return this.playerHand.reduce((prev, curr) => prev + curr.value, 0);
  }

  public get isOut(): boolean {
    return this.handValue > 21;
  }

  public get name(): string {
    return this.playerName;
  }

  public hit(): Card | undefined {
    if (this.isOut) {
      return;
    }

    const newCard = this.deck.draw();
    if (newCard) {
      this.playerHand.push(newCard);
    }

    return newCard;
  }
}

const deck = new Deck();
const player = new Player(deck);

console.log(
  player.cards.forEach((card) =>
    console.log("The card is a :", card.name, "with value", card.value)
  )
);

console.log("Sa main est de :", player.handValue);

export default Player;
