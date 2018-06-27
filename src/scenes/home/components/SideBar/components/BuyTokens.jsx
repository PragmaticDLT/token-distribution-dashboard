'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import {Heading, Section, Input} from '../styles';

class BuyTokens extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
    };
  }

  buy = () => {
    this.props.buyTokens(this.state.amount);

    this.setState({amount: ''});
  };

  onEnter = event => {
    if (event.keyCode === 13) {
      this.buy();
    }
  };

  render() {
    return (
      <div>
        <Heading big>Buy tokens</Heading>
        <Section>
          <Input
            type={'number'}
            placeholder={'ETH'}
            value={this.state.amount}
            onChange={event => this.setState({amount: event.target.value})}
            onKeyUp={this.onEnter}
          />
          <Button clickHandler={this.buy} caption={'Buy tokens'}/>
        </Section>
      </div>
    );
  }
}

BuyTokens.propTypes = {
  buyTokens: PropTypes.func.isRequired,
};

export default BuyTokens;