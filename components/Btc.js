import axios from 'axios';
import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Table from './Table';


const queryString = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=BTC,USD,EUR&api_key=29d326f5fcb7a2b341df9c2123d8054eccead8c20479f3f975ced52e082f84c5'

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
                const returns = ((miningReturn) - (miningFee)) * ((cryptos.BTC.USD).toFixed(2));
                this.setState({cryptos: cryptos, returns: returns});
                
                console.log(cryptos.BTC.USD);
            }).then(cryptos => {
                localStorage.setItem('cryptos', JSON.stringify(cryptos));
                localStorage.setItem(['cryptos'], 'BTC');
                console.log(this.state.cryptos);
            })
            
    }
    
    render() {
        const {cryptos, returns} = this.state; 
        return (
        <div className="App">
            {Object.keys(this.state.cryptos).map((key, i) => (
            <div id="crypto-container">
                <span className="left">{key}</span>
                <br />
                <span className="right">
                <NumberFormat value={this.state.cryptos[key].USD} displayType={'text'} decimalprecision={2} thousandSeparator={true} prefix={'$'} /></span>
                <br />
                <span className="left">
                <NumberFormat value={this.state.returns.toFixed(2)} displayType={'text'} decimalprecision={2} thousandSeparator={true} prefix={'$'} /></span>
                {/* <Table { ...this.props }/> */}
            </div>
            ))}
            <style jsx>{`
            .App {
                background: #f1f1f1;
                font-size: 22px;
                padding: 10px;
                border-radius: 20px;
            }

            #crypto-container {
                background: cyan;
                border-radius: 20px;
                width: 500;
                margin: 10px auto 10px 10px;
                padding: 15px;
                box-shadow: 3 px 3 px 0 grey;
            }

            span.left {
                font-weight: bold;
                padding-left: 10px;
                margin: 15px;
            }

            span.right {
                font-weight: bold;
                padding: 10px;
                margin: 15px;
                color: darkGreen;
                
            }
            `}</style>
            
        </div>
        )
    }
}

export default Btc;