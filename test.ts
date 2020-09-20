import {
  assertEquals,
  assertStringContains,
} from "https://x.nest.land/std@0.70.0/testing/asserts.ts";
import { getAbility, getCard, getCards, getPokemon, getType } from "./mod.ts";

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

Deno.test("getting pokemon card info", async () => {
  const data = await getCard("bw8-49");

  assertEquals(data.name, "Rotom");
});

Deno.test("getting trainer card info", async () => {
  const data = await getCard("sm1-131");

  assertEquals(data.name, "Rotom Dex");
});

Deno.test("getting pokemon cards info", async () => {
  const data = await getCards({ name: "rotom" });

  for (let i = 0; i < data.length; i++) {
    let rotom = data[i];

    if (!rotom.name) throw new Error("Rotom has no name?");

    assertStringContains(rotom.name, "Rotom");
  }
});
