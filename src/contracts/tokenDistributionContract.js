'use strict';

import contract from 'truffle-contract';
import Web3 from 'web3';

import config from 'config';

// TODO Find better artifacts deploying solution
import tokenDistributionContractArtifact
  from '../../../token-distribution-contract/build/contracts/TokenDistribution.json';
import addresses from '../../../token-distribution-contract/build/addresses.json';

const {tokenDistributionContractAddress} = addresses;

export default function getTokenDistributionContractInstance() {
  const tokenDistributionContract = contract(tokenDistributionContractArtifact);
  tokenDistributionContract.setProvider(new Web3.providers.HttpProvider(config.web3.provider));

  return tokenDistributionContract.at(tokenDistributionContractAddress);
}

export {tokenDistributionContractAddress};
