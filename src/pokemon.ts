import { pokemon } from "./typings.ts";

export async function get(nameOrID: string | number): Promise<pokemon> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${nameOrID}`,
  );

  const pokemon: pokemon = await response.json();

  return pokemon;
}
