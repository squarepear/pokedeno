import { assertEquals } from "https://x.nest.land/std@0.65.0/testing/asserts.ts";
import { getPokemon, getAbility, getType } from "./mod.ts";

Deno.test("getting pokemon info", async () => {
  const data = await getPokemon("rotom");

  assertEquals(data.id, 479);
});

Deno.test("getting ability info", async () => {
  const data = await getAbility("soundproof");

  assertEquals(data.id, 43);
});

Deno.test("getting type info", async () => {
  const data = await getType(9);

  assertEquals(data.name, "steel");
});
