'use strict';

import getTokenDistributionContractInstance, {tokenDistributionContractAddress} from "contracts/tokenDIstributionContract";
import Web3API from "./Web3API";

class TokenDistributionAPI {
  constructor() {
    this.tokenDistribution = null;
    this.transferEvent = null;
    this.tokenDistribution = getTokenDistributionContractInstance();
  };

  getContractAddress = () => tokenDistributionContractAddress;

  getTransferEvent = () => this.tokenDistribution.Transfer({}, {fromBlock: 0, toBlock: 'latest'});

  getApprovalEvent = () => this.tokenDistribution.Approval({}, {fromBlock: 0, toBlock: 'latest'});

  fetchTotalSupply = () => this.tokenDistribution.totalSupply();

  fetchName = () => this.tokenDistribution.name();

  fetchSymbol = () => this.tokenDistribution.symbol();

  fetchEndDate = () => this.tokenDistribution.endDate();

  fetchBalanceOf = async (account) => this.tokenDistribution.balanceOf(account);

 /* fetchTransferEvents = () => new Promise((resolve, reject) =>
    this.transferEvent.get((error, logs) => {
      if (error) {
        reject();
      } else {
        resolve(logs);
      }
    })
  );*/

  transferTokens = (to, value, account) => this.tokenDistribution.transfer(to, value, {
    from: account,
    gas: 1000000
  });

  purchaseTokens = (amount, buyerAddress, contractAddress) => new Promise((resolve, reject) => {
    Web3API.web3.eth.sendTransaction({
      from: buyerAddress,
      to: contractAddress,
      value: Web3API.web3.toWei(amount, "ether")
    }, (error) => error ? reject(error) : resolve());
  });
}

export default new TokenDistributionAPI();