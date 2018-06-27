'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import { Heading, Section } from '../styles';

const AccountInfo = ({ account, balance }) => (
  <div>
    <Heading big>Your account summary</Heading>
    <Section>
      <Heading>Current account: {account}</Heading>
      <Heading>Token balance: {balance}</Heading>
    </Section>
  </div>
);

AccountInfo.propTypes = {
  account: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired
};

export default AccountInfo;