'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import {Heading, Section, Input} from '../styles';

class TransferTokens extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      recipient: '',
    };
  }

  transfer = () => {
    this.props.transferTokens(this.state.amount, this.state.recipient);

    this.setState({
      amount: '',
      recipient: '',
    })
  };

  onEnter = event => {
    if (event.keyCode === 13) {
      this.transfer();
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
            placeholder={'Recipient address'}
            value={this.state.recipient}
            onChange={event => this.setState({recipient: event.target.value})}
            onKeyUp={this.onEnter}
          />
          <Button clickHandler={this.transfer} caption={'Transfer tokens'}/>
        </Section>
      </div>
    );
  }
}

TransferTokens.propTypes = {
  transferTokens: PropTypes.func.isRequired,
};

export default TransferTokens;