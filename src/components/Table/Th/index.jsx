import React from 'react';
import {Wrapper} from './styles';

export default class Th extends React.Component {
  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}
