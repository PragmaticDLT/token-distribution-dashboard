import React from 'react';
import {inject, observer} from 'mobx-react';
import {toJS} from 'mobx';
import SideBar from './components/SideBar';
import Table, {Td, Th, Tr} from 'components/Table';
import {Dashboard, Green, Heading, ScrollingContainer, Wrapper} from './styles';
import moment from 'moment';

@inject('TokenStore')
@inject('UserDataStore')
@observer
export default class Home extends React.Component {

  componentDidMount() {
    this.props.TokenStore.loadTotalSupply();
    this.props.TokenStore.loadName();
    this.props.TokenStore.loadSymbol();
    this.props.TokenStore.loadEndDate();
    this.props.UserDataStore.loadBalance();
  };

  renderTransferEvents() {
    return <div>
      <Green>Transfer events:</Green>
      <ScrollingContainer>
        <Table>
          <thead>
          <Tr>
            <Th>Block number</Th>
            <Th>Tx</Th>
            <Th>From</Th>
            <Th>To</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
          </thead>
          <tbody>
          {this.props.TokenStore.transferEvents.map(event => (
            <Tr key={event.blockHash}>
              <Td>{event.blockNumber}</Td>
              <Td>{event.transactionHash}</Td>
              <Td>{event.args.from}</Td>
              <Td>{event.args.to}</Td>
              <Td>{event.args.value.toString()}</Td>
              <Td>{event.type}</Td>
            </Tr>
          ))}
          </tbody>
        </Table>
      </ScrollingContainer>
    </div>;
  }

  renderApprovalEvents() {
    return <div>
      <Green>Approval events:</Green>
      <ScrollingContainer>
        <Table>
          <thead>
          <Tr>
            <Th>Block number</Th>
            <Th>Tx</Th>
            <Th>Owner</Th>
            <Th>Spender</Th>
            <Th>Approved Amount</Th>
            <Th>Status</Th>
          </Tr>
          </thead>
          <tbody>
          {this.props.TokenStore.approvalEvents.map(event => (
            <Tr key={event.blockHash}>
              <Td>{event.blockNumber}</Td>
              <Td>{event.transactionHash}</Td>
              <Td>{event.args.owner}</Td>
              <Td>{event.args.spender}</Td>
              <Td>{event.args.value.toString()}</Td>
              <Td>{event.type}</Td>
            </Tr>
          ))}
          </tbody>
        </Table>
      </ScrollingContainer>
    </div>;
  }

  render() {
    const TokenStore = this.props.TokenStore;

    return (
      <Wrapper>
        <SideBar/>
        <Dashboard>
          <Heading><Green>{TokenStore.symbol}</Green> Token Distribution Dashboard</Heading>
          <Heading>Token name: <Green>{TokenStore.name}</Green></Heading>
          <Heading>ICO end: {moment.utc(TokenStore.endDate).format('DD MMM HH:mm:ss')}</Heading>

          <Heading>Total supply: <Green>{TokenStore.totalSupply}</Green></Heading>
          <Heading>Contract address: <Green>{TokenStore.contractAddress}</Green></Heading>

          {this.renderTransferEvents()}
          {this.renderApprovalEvents()}

        </Dashboard>
      </Wrapper>
    );
  }
}
