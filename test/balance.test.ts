import assert from "node:assert/strict";
import test from "node:test";
import { formatSol } from "../src/balance.js";

test("formats lamports without floating-point loss", () => {
  assert.equal(formatSol(0n), "0");
  assert.equal(formatSol(1_500_000_000n), "1.5");
  assert.equal(formatSol(1n), "0.000000001");
});
