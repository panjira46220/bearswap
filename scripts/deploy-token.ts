import { parseEther } from "ethers/lib/utils";
import { ethers } from "hardhat";


export async function deployToken(name: string, symbol: string) {
  const Token = await ethers.getContractFactory("Token");
  const [owner] = await ethers.getSigners();
  const token = await Token.deploy(
    name,
    symbol,
    parseEther("1000000"),
    "0xcd3B766CCDd6AE721141F452C550Ca635964ce71"
  );
  

  await token.deployTransaction.wait();
  
  console.log(`Deployed ${symbol} at: ${token.address}`);

  return token.address
}

