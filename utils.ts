export const DEFAULT_SUIT = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

export function getCardValue(cardName: string) {
  const castedCardName = Math.round(Number(cardName));

  if (!isNaN(castedCardName) && castedCardName >= 1 && castedCardName < 10) {
    return castedCardName;
  }

  switch (cardName) {
    case "J":
      return 11;
    case "Q":
      return 12;
    case "K":
      return 13;

    default:
      throw new Error(`Invalid card name '${cardName}'`);
  }
}

export function randomIntInterval(min: number, max: number): number {
  min = Math.floor(min);
  max = Math.ceil(max);

  return Math.round(Math.random() * (max - min) + min);
}
