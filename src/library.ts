import { Pokemon, PokemonAbility, PokemonType } from "./typings.ts";

export async function getPokemon(nameOrID: string | number): Promise<Pokemon> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${nameOrID}`,
  );

  const pokemon: Pokemon = await response.json();

  return pokemon;
}

export async function getAbility(
  nameOrID: string | number,
): Promise<PokemonAbility> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/ability/${nameOrID}`,
  );

  const ability: PokemonAbility = await response.json();

  return ability;
}

export async function getType(
  nameOrID: string | number,
): Promise<PokemonType> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/type/${nameOrID}`,
  );

  const type: PokemonType = await response.json();

  return type;
}
