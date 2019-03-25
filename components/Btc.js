import axios from 'axios';
import React, { Component } from 'react';
import NumberFormat from 'react-number-format';


const queryString = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=BTC,USD,EUR&api_key=29d326f5fcb7a2b341df9c2123d8054eccead8c20479f3f975ced52e082f84c5'

let miningReturn = 0.00028823;

let miningFee = 0.00001736;

class Btc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cryptos: [],
            returns: [],
            
        };
    }
    componentDidMount() {
        axios.get(queryString)
            .then(res => {
                const cryptos = res.data;
                const returns = ((miningReturn) - (miningFee)) * ((cryptos.BTC.USD));
                let weeklyReturns = (returns) * (7);
                weeklyReturns = weeklyReturns.toFixed(2);
                let monthlyReturns = (weeklyReturns) * (4);
                monthlyReturns = monthlyReturns.toFixed(2);
                let yearlyReturns = (monthlyReturns) * (12);
                yearlyReturns = yearlyReturns.toFixed(2);
                let term = (yearlyReturns) * (2);
                let investedAmount = (115.57);
                let percentReturns = ((returns) / (investedAmount)) * (100);
                // percentReturns = percentreturns.toFixed(2);
                console.log((term));
                this.setState({
                    cryptos: cryptos, 
                    returns: returns,
                    weeklyReturns: weeklyReturns,
                    monthlyReturns: monthlyReturns,
                    yearlyReturns: yearlyReturns,
                    term: term,
                    percentReturns: percentReturns,
                });
                
                console.log(percentReturns);
            }).then(returns => {
                localStorage.setItem('returns', JSON.stringify(this.state.returns));
                localStorage.setItem(['cryptos'], 'BTC');
                console.log(this.state.returns);
            })
            
    }
    
    
    render() {
        return (
        <div className="App">
            {Object.keys(this.state.cryptos).map((BTC) => (
            <div id="crypto-container">
                <span className="left" key={BTC}>{BTC}</span>
                <br />
                <span className="left">
                Price:  <NumberFormat value={this.state.cryptos[BTC].USD} displayType={'text'} decimalprecision={2} thousandSeparator={true} prefix={'  $'} /></span>
                <br />
                <span className="right">
                Daily Returns:  <NumberFormat value={this.state.returns.toFixed(2)} displayType={'text'} decimalprecision={2} thousandSeparator={true} prefix={'  $'} /></span>
                <br />
                <span className="right">
                Weekly Returns:  <NumberFormat value={this.state.weeklyReturns} displayType={'text'} decimalprecision={2} thousandSeparator={true} prefix={'  $'} /></span>
                <br />
                <span className="right">
                Monthly Returns:  <NumberFormat value={this.state.monthlyReturns} displayType={'text'} decimalprecision={2} thousandSeparator={true} prefix={'  $'} /></span>
                <br />
                <span className="right">
                Yearly Returns:  <NumberFormat value={this.state.yearlyReturns} displayType={'text'} decimalprecision={2} thousandSeparator={true} prefix={'  $'} /></span>
                <br />
                <span className="right">
                Term:     <NumberFormat value={this.state.term} displayType={'text'} decimalprecision={2} thousandSeparator={true} prefix={'  $'} /></span>
            </div>
            ))}
            <style jsx>{`
            .App {
                background: #f1f1f1;
                font-size: 22px;
                padding: 15px;
                border-radius: 20px;
                width: 98%;
                margin: 2px;
                display: flex;
                display-direction: column;
                justifyContent: center;
                align-items: center;
            }

            #crypto-container {
                background: cyan;
                border-radius: 20px;
                width: 80%;
                min-width: 490px;
                margin: 10px auto 10px auto;
                padding: 10px;
                box-shadow: 3 px 3 px 0 black;
                text-align: center;
            }

            span.left {
                font-weight: bold;
                padding: 25px;
                margin: 10px auto 10px 10px;
                min-width: 490px;
            }

            span.right {
                clear: all;
                font-weight: bold;
                padding: 25px;
                margin: 10px auto 10px 10px;
                color: darkGreen;
                text-align: center;                
            }
            `}</style>
        </div>
        )
    }
}

export default Btc;