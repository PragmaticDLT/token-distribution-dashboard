import React from 'react';
import {Wrapper} from './styles';

export default class Td extends React.Component {
  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}
