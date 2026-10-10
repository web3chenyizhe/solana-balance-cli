#!/usr/bin/env node
import { getBalance } from "./balance.js";

const wallet = process.argv[2];
const rpcUrl = process.env.SOLANA_RPC_URL ?? "https://api.devnet.solana.com";

if (!wallet) {
  console.error("Usage: npm run balance -- <WALLET_ADDRESS>");
  process.exit(2);
}

try {
  console.log(JSON.stringify(await getBalance(wallet, rpcUrl), (_, value) => typeof value === "bigint" ? value.toString() : value, 2));
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
