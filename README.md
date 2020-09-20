# pokedeno <a href="https://pokeapi.co/api/v2/pokemon/rotom"><img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png' height=50px/></a>

[![nest badge](https://nest.land/badge.svg)](https://nest.land/package/pokedeno)

A module to access https://pokeapi.co/ and http://pokemontcg.io/ from deno!

## Usage

```ts
import { getAbility, getCard, getCards, getPokemon, getType } from "https://x.nest.land/pokedeno@0.2.1/mod.ts";

console.log(await getPokemon("rotom"));
console.log(await getAbility("soundproof"));
console.log(await getType("steel"));

console.log(await getCard("bw8-49"));
console.log((await getCards({ name: "rotom" }))[3]);
```
