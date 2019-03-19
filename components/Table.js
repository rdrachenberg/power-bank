import React from 'react';
import PropTypes from 'prop-types';
import cryptos from '../components/Btc';
import { returns, Btc } from '../components/Btc';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';



let miningReturn = 0.00028823;

let miningFee = 0.00001736;

// let returns = (miningReturn) - (miningFee);

// console.log(this.props.cryptos.BTC[USD]);
// returns = returns.toFixed(8);

// console.log(returns);

let weeklyReturns = (returns) * (7);

weeklyReturns = weeklyReturns.toFixed(8);

let monthlyReturns = (weeklyReturns) * (4);

monthlyReturns = monthlyReturns.toFixed(8);

let yearlyReturns = (monthlyReturns) * (52);

yearlyReturns = yearlyReturns.toFixed(8)

const term = (24 + '  Months')

let investedAmount = 115.57

let percentReturns = ((returns) * (cryptos)) / (investedAmount);

console.log('Grrrrrr.....');

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      returns: [this.props.returns]
    }
    console.log(returns);

  }
  render() {
    return (
      <BootstrapTable data={ this.props.returns } striped={ true } hover={ true } condensed={ true }>
          <TableHeaderColumn dataField='id' isKey={ true }>Daily</TableHeaderColumn>
          <TableHeaderColumn dataField='weekly'>Weekly</TableHeaderColumn>
          <TableHeaderColumn dataField='monthly'>Monthly</TableHeaderColumn>
          <TableHeaderColumn dataField='yearly'>Yearly</TableHeaderColumn>
          <TableHeaderColumn dataField='term'>Term</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};

export default Table