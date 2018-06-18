import getBuzzDistributionContractInstance, {buzzDistributionContractAddress} from "contracts/buzzDistributionContract";
import Web3API from "./Web3API";

class BuzzDistributionAPI {
  constructor() {
    this.buzzDistribution = null;
    this.transferEvent = null;
    this.buzzDistribution = getBuzzDistributionContractInstance();
  };

  getContractAddress = () => buzzDistributionContractAddress;

  getTransferEvent = () => this.buzzDistribution.Transfer({}, {fromBlock: 0, toBlock: 'latest'});

  getApprovalEvent = () => this.buzzDistribution.Approval({}, {fromBlock: 0, toBlock: 'latest'});

  fetchTotalSupply = () => this.buzzDistribution.totalSupply();

  fetchName = () => this.buzzDistribution.name();

  fetchSymbol = () => this.buzzDistribution.symbol();

  fetchEndDate = () => this.buzzDistribution.endDate();

  fetchBalanceOf = async (account) => this.buzzDistribution.balanceOf(account);

 /* fetchTransferEvents = () => new Promise((resolve, reject) =>
    this.transferEvent.get((error, logs) => {
      if (error) {
        reject();
      } else {
        resolve(logs);
      }
    })
  );*/

  transferTokens = (to, value, account) => this.buzzDistribution.transfer(to, value, {
    from: account,
    gas: 1000000
  });

  purchaseTokens = (amount, buyerAddress, contractAddress) => new Promise((resolve, reject) => {
    Web3API.web3.eth.sendTransaction({
      from: buyerAddress,
      to: contractAddress,
      value: Web3API.web3.toWei(amount, "ether")
    }, (e) => e ? reject() : resolve());
  });
}

export default new BuzzDistributionAPI();