import React from 'react';
import {Wrapper} from './styles';
import Td from 'components/Table/Td';
import Th from 'components/Table/Th';
import Tr from 'components/Table/Tr';

export default class Table extends React.Component {
  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}

export {Td, Th, Tr};
