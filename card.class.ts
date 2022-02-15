"use strict";

import { randomIntInterval } from "./utils";

class Card {
  private cardName: string;
  private cardValue: number;
  private static cardList: string[];

  constructor(name: string, value: number) {
    this.cardName = name;
    this.cardValue = value;
  }

  public get name(): string {
    return this.cardName;
  }

  public get value(): number {
    return this.cardValue;
  }
}

export default Card;
