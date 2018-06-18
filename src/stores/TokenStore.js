import {action, observable, runInAction} from "mobx";

import {BuzzDistributionAPI} from "apis";

class TokenStore {
  @observable totalSupply = 0;
  @observable symbol = "";
  @observable name = "";
  @observable endDate = null;

  @observable approvalEvents = [];
  @observable transferEvents = [];

  @observable contractAddress = null;

  constructor(BuzzDistributionAPI) {
    this.buzzDistributionAPI = BuzzDistributionAPI;
    this.contractAddress = this.buzzDistributionAPI.getContractAddress();

    this.watchTransferEvents();
  }

  watchTransferEvents = () => {
    this.buzzDistributionAPI.getTransferEvent().watch((error, event) => {
      if (error) {
        console.log('Watch transfer event error: ', error)
      } else {
        runInAction(() => this.transferEvents = [event, ...this.transferEvents]);
      }
    });
  };

  purchaseTokens = amount => this.buzzDistributionAPI.purchaseTokens(amount, this.account, this.contractAddress);

  withdrawTokens = (to, value) => this.buzzDistributionAPI.withdrawTokens(to, value, this.account);

  @action
  loadTotalSupply = async () => {
    const totalSupply = await this.buzzDistributionAPI.fetchTotalSupply();
    runInAction(() => this.totalSupply = totalSupply.toString());
  };

  @action
  loadTransferEvents = async () => {
    const events = await this.buzzDistributionAPI.fetchTransferEvents();
    events.sort((a, b) => b.blockNumber - a.blockNumber);
    runInAction(() => this.transferEvents = events);
  };

  @action
  loadSymbol = async () => {
    const symbol = await this.buzzDistributionAPI.fetchSymbol();
    runInAction(() => this.symbol = symbol.toString());
  };

  @action
  loadName = async () => {
    const name = await this.buzzDistributionAPI.fetchName();
    runInAction(() => this.name = name.toString());
  };

  @action
  loadEndDate = async () => {
    const endDate = await this.buzzDistributionAPI.fetchEndDate();
    runInAction(() => this.endDate = parseInt(endDate));
  };
}

export default new TokenStore(BuzzDistributionAPI);
