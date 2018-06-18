import Web3 from 'web3';

import config from 'config';

class Web3API {
  constructor() {
    let web3Provider;

    if (window.web3) {
      web3Provider = window.web3.currentProvider;
    } else {
      web3Provider = new Web3.providers.HttpProvider(config.web3.provider);
    }

    this.web3 = new Web3(web3Provider);
  }

  getCurrentAccount = () => {
    const account = this.web3.eth.accounts[0];

    return account ? account : null;
  }
}

export default new Web3API();