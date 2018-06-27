import {action, observable, runInAction} from 'mobx';

import {TokenDistributionAPI} from 'apis';

class TokenStore {
  @observable totalSupply = 0;
  @observable symbol = '';
  @observable name = '';
  @observable endDate = null;

  @observable transferEvents = [];
  @observable approvalEvents = [];

  @observable contractAddress = null;

  constructor(TokenDistributionAPI) {
    this.tokenDistributionAPI = TokenDistributionAPI;
    this.contractAddress = this.tokenDistributionAPI.getContractAddress();

    this.watchTransferEvents();
    this.watchApprovalEvents();
  }

  watchTransferEvents = () => {
    this.tokenDistributionAPI.getTransferEvent().watch((error, event) => {
      if (error) {
        console.log('Watch transfer event error: ', error);
      }
      else {
        runInAction(() => this.transferEvents = [event, ...this.transferEvents]);
      }
    });
  };

  watchApprovalEvents = () => {
    this.tokenDistributionAPI.getApprovalEvent().watch((error, event) => {
      if (error) {
        console.log('Watch approval event error: ', error);
      } else {
        runInAction(() => this.approvalEvents = [event, ...this.approvalEvents]);
      }
    });
  };

  purchaseTokens = (amount, account) => this.tokenDistributionAPI.purchaseTokens(amount, account);

  transferTokens = (value, to, account) => this.tokenDistributionAPI.transferTokens(value, to, account);

  approve = (spender, value, owner) => this.tokenDistributionAPI.approve(spender, value, owner);

  @action
  loadTotalSupply = async () => {
    const totalSupply = await this.tokenDistributionAPI.fetchTotalSupply();
    runInAction(() => this.totalSupply = totalSupply.toString());
  };

  @action
  loadTransferEvents = async () => {
    const events = await this.tokenDistributionAPI.fetchTransferEvents();
    events.sort((a, b) => b.blockNumber - a.blockNumber);
    runInAction(() => this.transferEvents = events);
  };

  @action
  loadSymbol = async () => {
    const symbol = await this.tokenDistributionAPI.fetchSymbol();
    runInAction(() => this.symbol = symbol.toString());
  };

  @action
  loadName = async () => {
    const name = await this.tokenDistributionAPI.fetchName();
    runInAction(() => this.name = name.toString());
  };

  @action
  loadEndDate = async () => {
    const endDate = await this.tokenDistributionAPI.fetchEndDate();
    runInAction(() => this.endDate = parseInt(endDate));
  };
}

export default new TokenStore(TokenDistributionAPI);
