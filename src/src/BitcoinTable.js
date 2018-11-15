import React, { Component } from "react";

import './App.css';

import Header from './Header';
import App from "./App";

export default function BitcoinTable (props) {
  return (
            <table>
                <thead>
                   <tr>
                       <th>Coin Name</th>
                       <th>Coin Image</th>
                       <th>
                           <button>
                           onClick={() => props.sortBy('TotalCoinSupply')}>
                           Total Coin Supply
                            </button>
                        </th>
                       <th>Coin Link</th>
                       <th>Add Coin and Compare Price</th>
                   </tr>
                </thead>
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
          );
      }
   }

export default BitcoinTable;