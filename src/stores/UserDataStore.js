import {TokenDistributionAPI, Web3API} from "apis";
import {action, observable, runInAction} from "mobx";

class UserDataStore {
  @observable balance = 0;
  @observable account = null;

  constructor(Web3API, TokenDistributionAPI) {
    this.web3API = Web3API;
    this.tokenDistributionAPI = TokenDistributionAPI;
    this.account = this.web3API.getCurrentAccount();
    this.setupMetaMaskCheckTimer();
  }

  setupMetaMaskCheckTimer = () => {
    setInterval(() => {
      const currentAccount = this.web3API.getCurrentAccount();

      if (this.account !== currentAccount) {
        runInAction(() => this.account = this.web3API.getCurrentAccount());
        this.loadBalance(this.account)
      }
    }, 100);
  };

  @action
  loadBalance = async () => {
    if (this.account) {
      const balance = await this.tokenDistributionAPI.fetchBalanceOf(this.account);

      runInAction(() => this.balance = balance.toString());
    }
  };
}

export default new UserDataStore(Web3API, TokenDistributionAPI);
