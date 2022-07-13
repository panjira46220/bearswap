import { deploySwapper } from "./deploy";
import { deployToken } from "./deploy-token";

async function main() {
  
  const adressTokenBEAR = await deployToken("BEAR", "BEAR");
  const adressTokenICE = await deployToken("ICE", "ICE");
  const adressTokenPANDA = await deployToken("PANDA", "PD");
  await deploySwapper( adressTokenBEAR,adressTokenICE, adressTokenPANDA);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
