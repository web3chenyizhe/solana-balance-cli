import { address, createSolanaRpc } from "@solana/kit";

export const LAMPORTS_PER_SOL = 1_000_000_000n;

export function formatSol(lamports: bigint): string {
  const whole = lamports / LAMPORTS_PER_SOL;
  const fraction = (lamports % LAMPORTS_PER_SOL).toString().padStart(9, "0").replace(/0+$/, "");
  return fraction ? `${whole}.${fraction}` : whole.toString();
}

export async function getBalance(wallet: string, rpcUrl: string) {
  const rpc = createSolanaRpc(rpcUrl);
  const response = await rpc.getBalance(address(wallet), { commitment: "confirmed" }).send();
  return { wallet, cluster: rpcUrl, lamports: response.value, sol: formatSol(response.value) };
}
