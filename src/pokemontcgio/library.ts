import type { Card } from "./typings.ts";

export async function getCard(id: string): Promise<Card> {
  const response = await fetch(
    `https://api.pokemontcg.io/v1/cards/${id}`,
  );

  const card: Card = (await response.json()).card;

  return card;
}

export async function getCards(cardParam: Card): Promise<Card[]> {
  let search = "";

  let keys = Object.keys(cardParam);
  let values = Object.values(cardParam);

  for (let i = 0; i < keys.length; i++) {
    search += `${keys[i]}=${values.toString()}&`;
  }

  const response = await fetch(
    `https://api.pokemontcg.io/v1/cards?${search}`,
  );

  const cards: Card[] = (await response.json()).cards;

  return cards;
}
