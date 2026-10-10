# Solana Balance CLI

A small, read-only TypeScript CLI that queries a Solana wallet balance with `@solana/kit`. It defaults to devnet and prints machine-readable JSON.

## Requirements

- Node.js 20.18+
- npm 10+

## Install and run

```bash
npm ci
npm run balance -- <WALLET_ADDRESS>
```

Use another RPC endpoint when needed:

```bash
SOLANA_RPC_URL=https://api.testnet.solana.com npm run balance -- <WALLET_ADDRESS>
```

## Verify

```bash
npm run check
```

## Deployment

This is a local CLI, so no server deployment is required. Clone the repository, run `npm ci`, and invoke the command above. `SOLANA_RPC_URL` is optional and must contain an RPC URL only—never a wallet private key.

## Security

- Read-only: it does not construct, sign, or submit transactions.
- Never asks for a seed phrase or private key.
- Defaults to Solana devnet.

## License

MIT
