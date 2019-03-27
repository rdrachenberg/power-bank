import React from 'react';
import PropTypes from 'prop-types';
import cryptos from '../components/Btc';
import Btc  from '../components/Btc.js';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

console.log(Btc);

let miningReturn = 0.00028823;

let miningFee = 0.00001736;

let returns = (miningReturn) - (miningFee);

returns = returns.toFixed(8);

let weeklyReturns = (returns) * (7);

weeklyReturns = weeklyReturns.toFixed(8);

let monthlyReturns = (weeklyReturns) * (4);

monthlyReturns = monthlyReturns.toFixed(8);

let yearlyReturns = (monthlyReturns) * (52);

yearlyReturns = yearlyReturns.toFixed(8);

const term = (24 + '  Months');

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      returns: this.props.returns,
    }
  console.log(returns + 'table constructor')
  }
  render() {
    let returns = this.state.returns;
    return (
      <BootstrapTable data={ returns } striped={ true } hover={ true } condensed={ true }>
          <TableHeaderColumn dataField='returns' isKey={ true }>Daily</TableHeaderColumn>
          <TableHeaderColumn dataField='weekly'>Weekly</TableHeaderColumn>
          <TableHeaderColumn dataField='monthly'>Monthly</TableHeaderColumn>
          <TableHeaderColumn dataField='yearly'>Yearly</TableHeaderColumn>
          <TableHeaderColumn dataField='term'>Term</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};

export default Table