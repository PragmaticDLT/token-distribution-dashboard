'use strict';

import getTokenDistributionContractInstance, {tokenDistributionContractAddress} from 'contracts/tokenDIstributionContract';
import Web3API from './Web3API';

class TokenDistributionAPI {
  constructor() {
    this.tokenDistribution = getTokenDistributionContractInstance();
  };

  getContractAddress = () => tokenDistributionContractAddress;

  fetchTotalSupply = () => this.tokenDistribution.totalSupply();

  fetchName = () => this.tokenDistribution.name();

  fetchSymbol = () => this.tokenDistribution.symbol();

  fetchEndDate = () => this.tokenDistribution.endDate();

  fetchBalanceOf = async (account) => this.tokenDistribution.balanceOf(account);

  getTransferEvent = () => this.tokenDistribution.Transfer({}, {fromBlock: 0, toBlock: 'latest'});

  getApprovalEvent = () => this.tokenDistribution.Approval({}, {fromBlock: 0, toBlock: 'latest'});

  purchaseTokens = (amount, buyerAddress) => new Promise((resolve, reject) => {
    Web3API.web3.eth.sendTransaction({
      from: buyerAddress,
      to: tokenDistributionContractAddress,
      value: Web3API.web3.toWei(amount, 'ether'),
    }, (error) => error ? reject(error) : resolve());
  });

  transferTokens = (value, to, account) => this.tokenDistribution.transfer(to, value, {
    from: account,
    gas: 1000000,
  });

  approve = (spender, value, owner) => this.tokenDistribution.approve(spender, value, {
    from: owner,
    gas: 1000000
  })
}

export default new TokenDistributionAPI();