import React, { Component } from "react";

import './App.css';

import Header from './Header';
import App from "./App";

class BitcoinHome extends Component {
    constructor() {
      super();
      this.state = {
          coins: [],
      };
      //this.sortBy = this.sortBy.bind(this)
    }
    
    /*
    sortBy(key) {
        console.log(key)
        this.setState({
            coins: coins.sort( (a, b) => a[key] < b[key])
        })
    }
*/
   
    componentDidMount() {
        fetch('https://min-api.cryptocompare.com/data/all/coinlist', {cache: "force-cache"})
            .then (results => {
                return results.json();
            })
            .then(json => {
                this.setState({ coins: Object.values(json.Data).slice(0, 50) });
                console.log("state", this.state.coins);
            })
    }
   
      render() {
          return (
            <div className="App">
            <div className="Header">
                <Header />
            </div>
           
            <table>
                   <tr>
                       <th>Coin Name</th>
                       <th>Coin Image</th>
                       <th>
                           <button>
                                Total Coin Supply
                            </button>
                        </th>
                       <th>Coin Link</th>
                       <th>Add Coin and Compare Price</th>
                   </tr>
                   <tbody>
                       { 
                           this.state.coins.map(row => (
                               <tr>
                                   <td>{row.CoinName}</td>
                                   <td>
                                       <img src={`https://www.cryptocompare.com${row.ImageUrl}`} alt='' />
                                   </td>
                                   <td>{row.TotalCoinSupply}</td>
                                   <td>{row.Url}</td>
                                   <td>
                                       <button>Add Coin to Wallet</button>
                                       <button>USD Rate</button>
                                       <button>EUR Rate</button>
                                   </td>
                               </tr>
                           ))
                       }
                   </tbody>
               </table>
           </div>
          );
      }
   }

export default BitcoinHome; 