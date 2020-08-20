import { assertEquals } from "https://x.nest.land/std@0.65.0/testing/asserts.ts";
import { pokemon } from "./mod.ts";

Deno.test("fetch from API", async () => {
  const rotom = await pokemon.get("rotom");

  assertEquals(rotom.id, 479);
});
