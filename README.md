# pokedeno <a href="https://pokeapi.co/api/v2/pokemon/rotom"><img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png' height=50px/></a>

[![nest badge](https://nest.land/badge.svg)](https://nest.land/package/pokedeno)

A module to access https://pokeapi.co from deno!

## Usage

```ts
import { pokemon } from "https://nest.land/package/pokedeno/mod.ts";

console.log(await pokemon.get("rotom"));
```