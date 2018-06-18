import React from 'react';
import {Wrapper} from './styles';

export default class Tr extends React.Component {
  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}
