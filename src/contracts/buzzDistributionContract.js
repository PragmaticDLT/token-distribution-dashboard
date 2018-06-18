import contract from "truffle-contract";
import Web3 from "web3";

import config from "config";

// TODO Find better artifacts deploying solution
import carManagerContractArtifact from "../../../dapp/build/contracts/BuzzDistribution.json";
import addresses from "../../../dapp/build/addresses.json";

const { buzzDistributionContractAddress } = addresses;

export default function getBuzzDistributionContractInstance() {
  const buzzDistributionContract = contract(carManagerContractArtifact);
  buzzDistributionContract.setProvider(new Web3.providers.HttpProvider(config.web3.provider));

  return buzzDistributionContract.at(buzzDistributionContractAddress);
}

export {buzzDistributionContractAddress};