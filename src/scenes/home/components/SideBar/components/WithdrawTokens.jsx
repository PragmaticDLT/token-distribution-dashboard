'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import {Heading, Section, Input} from '../styles';

class WithdrawTokens extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      address: '',
    };
  }

  withdraw = () => {
    this.props.withdrawTokens(this.state.amount, this.state.address);

    this.setState({
      amount: '',
      address: '',
    })
  };

  onEnter = event => {
    if (event.keyCode === 13) {
      this.withdraw();
    }
  };

  render() {
    return (
      <div>
        <Heading big>Transfer tokens</Heading>
        <Section>
          <Input
            type={'number'}
            placeholder={'TST'}
            value={this.state.amount}
            onChange={event => this.setState({amount: event.target.value})}
            onKeyUp={this.onEnter}
          />
          <Input
            type={'text'}
            placeholder={'New address'}
            value={this.state.address}
            onChange={event => this.setState({address: event.target.value})}
            onKeyUp={this.onEnter}
          />
          <Button clickHandler={this.withdraw} caption={'Withdraw tokens'}/>
        </Section>
      </div>
    );
  }
}

WithdrawTokens.propTypes = {
  withdrawTokens: PropTypes.func.isRequired,
};

export default WithdrawTokens;