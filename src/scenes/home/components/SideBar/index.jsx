import React, {Fragment} from "react";
import {inject, observer} from "mobx-react";
import Button from "components/Button";
import {Heading, Input, MenuLine, MetaMaskRemainder, Overlay, Section, Wrapper} from "./styles";

@inject('TokenStore')
@inject('UserDataStore')
@observer
export default class SideBar extends React.Component {

  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  close = () => this.setState({open: false});
  open = () => this.setState({open: true});

  buyOnEnter = event => {
    if (event.keyCode === 13) this.buy();
  };

  buy = () => {
    const TokenStore = this.props.TokenStore;
    const UserDataStore = this.props.UserDataStore;

    if (this.amount.value >= 0.001) {
      TokenStore.purchaseTokens(this.amount.value, UserDataStore.account).then(() => {
        TokenStore.loadTotalSupply();
        UserDataStore.loadBalance();
        this.amount.value = null;
      }).catch(error => console.error('Failed to buy tokens: ', error));
    }
  };

  withdrawOnEnter = event => {
    if (event.keyCode === 13) this.buy();
  };

  withdraw = () => {
    const TokenStore = this.props.TokenStore;
    const UserDataStore = this.props.UserDataStore;

    if (this.withdrawAmount.value >= 1 && this.withdrawAddress.value)
      TokenStore.transferTokens(this.withdrawAddress.value, this.withdrawAmount.value, UserDataStore.account).then(() => {
        TokenStore.loadTotalSupply();
        UserDataStore.loadBalance();

        this.withdrawAmount.value = null;
        this.withdrawAddress.value = null;
      }).catch(error => console.error('Failed to withdraw tokens: ', error));
  };

  renderTransferSection() {
    return <div>
      <Heading big>Transfer tokens</Heading>
      <Section>
        <Input
          innerRef={element => (this.withdrawAmount = element)}
          placeholder={'TST'}
          onKeyUp={this.withdrawOnEnter}
        />
        <Input
          innerRef={element => (this.withdrawAddress = element)}
          placeholder={'New address'}
          onKeyUp={this.withdrawOnEnter}
        />
        <Button clickHandler={this.withdraw} caption={"Withdraw tokens"}/>
      </Section>
    </div>
  }

  renderBuySection() {
    return <div>
      <Heading big>Buy tokens</Heading>
      <Section>
        <Input
          innerRef={element => (this.amount = element)}
          placeholder={'ETH'}
          onKeyUp={this.buyOnEnter}
        />
        <Button clickHandler={this.buy} caption={"Buy tokens"}/>
      </Section>
    </div>
  }

  renderSummarySection(account, balance) {
    return <div>
      <Heading big>Your account summary</Heading>
      <Section>
        <Heading>Current account: {account}</Heading>
        <Heading>Token balance: {balance}</Heading>
      </Section>
    </div>
  }

  render() {
    const isNavOpen = this.state.open;
    const UserDataStore = this.props.UserDataStore;
    return (
      <div>
        {isNavOpen && <Overlay />}
        <Wrapper open={isNavOpen} onMouseOver={this.open} onMouseOut={this.close}>
          {!UserDataStore.account && <MetaMaskRemainder>
            To use our app please login or create <a href="https://metamask.io/">MetaMask</a> account.
          </MetaMaskRemainder>}

          {UserDataStore.account && <div>
            {this.renderSummarySection(UserDataStore.account, UserDataStore.balance)}
            {this.renderBuySection()}
            {this.renderTransferSection()}
          </div>}
        </Wrapper>}
      </div>
    );
  }
}
