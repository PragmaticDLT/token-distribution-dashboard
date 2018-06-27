'use strict';

import React from 'react';
import {inject, observer} from 'mobx-react';

import AccountInfo from './components/AccountInfo';
import BuyTokens from './components/BuyTokens';
import WithdrawTokens from './components/WithdrawTokens';
import {MetaMaskRemainder, Overlay, Wrapper} from './styles';

@inject('TokenStore')
@inject('UserDataStore')
@observer
export default class SideBar extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
      buyAmount: '',
    };
  }

  close = () => this.setState({open: false});

  open = () => this.setState({open: true});

  buyTokens = (amount) => {
    const TokenStore = this.props.TokenStore;
    const UserDataStore = this.props.UserDataStore;

    if (amount >= 0.001) {
      TokenStore.purchaseTokens(amount, UserDataStore.account).then(() => {
        TokenStore.loadTotalSupply();
        UserDataStore.loadBalance();
      }).catch(error => {
        console.error('Failed to buy tokens: ', error);
        alert('Failed to buy tokens');
      });
    }
  };

  withdrawTokens = (amount, address) => {
    const TokenStore = this.props.TokenStore;
    const UserDataStore = this.props.UserDataStore;

    if (amount >= 1 && address) {
      TokenStore.transferTokens(amount, address, UserDataStore.account).then(() => {
        TokenStore.loadTotalSupply();
        UserDataStore.loadBalance();
      }).catch(error => {
        console.error('Failed to withdraw tokens: ', error);
        alert('Failed to to withdraw tokens');
      });
    }
  };

  render() {
    const isNavOpen = this.state.open;
    const UserDataStore = this.props.UserDataStore;

    return (
      <div>
        {isNavOpen && <Overlay/>}
        <Wrapper open={isNavOpen} onMouseOver={this.open} onMouseOut={this.close}>
          {!UserDataStore.account && (
            <MetaMaskRemainder>
              To use our app please login or create <a
              href="https://metamask.io/">MetaMask</a> account.
            </MetaMaskRemainder>
          )}

          {UserDataStore.account && (
            <div>
              <AccountInfo account={UserDataStore.account} balance={UserDataStore.balance}/>
              <BuyTokens buyTokens={this.buyTokens}/>
              <WithdrawTokens withdrawTokens={this.withdrawTokens}/>
            </div>
          )}
        </Wrapper>}
      </div>
    );
  }
}
