'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import {Heading, Section, Input} from '../styles';

class ApproveTokens extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spenderAddress: '',
      amount: ''
    }
  }

  approve = () => {
    this.props.approveTokens(this.state.spenderAddress, this.state.amount);

    this.setState({
      spenderAddress: '',
      amount: '',
    })
  };

  onEnter = event => {
    if (event.keyCode === 13) {
      this.approve();
    }
  };

  render() {
    return (
      <div>
        <Heading big>Approve token spendings</Heading>
        <Section>
          <Input
            type={'text'}
            placeholder={'Spender address'}
            value={this.state.spenderAddress}
            onChange={event => this.setState({spenderAddress: event.target.value})}
            onKeyUp={this.onEnter}
          />
          <Input
            type={'number'}
            placeholder={'TST'}
            value={this.state.amount}
            onChange={event => this.setState({amount: event.target.value})}
            onKeyUp={this.onEnter}
          />

          <Button clickHandler={this.approve} caption={'Approve spendings'}/>
        </Section>
      </div>
    );
  }
}

ApproveTokens.propTypes = {
  approveTokens: PropTypes.func.isRequired
};

export default ApproveTokens;