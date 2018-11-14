import React, { Component } from "react";

import './App.css';

import Header from './Header';
import App from './App';

class BitcoinNewsfeed extends Component {
    constructor(props) {
      super(props);
      this.state = {
          newsfeed: [],
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
        fetch('https://min-api.cryptocompare.com/data/v2/news/?feeds=cryptocompare,cointelegraph,coindesk', {cache: "force-cache"})
            .then (results => {
                return results.json();
            })
            .then(json => {
                this.setState({ newsfeed: Object.values(json.Data).slice(0, 50) });
                console.log("state", this.state.newsfeed);
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
                       <th>News Source</th>
                       <th>Article Title</th>
                       <th>Article Body</th>
                   </tr>
                   <tbody>
                       { 
                           this.state.newsfeed.map(row => (
                               <tr>
                                   <td>{row.source}</td>
                                   <td>{row.title}</td>
                                   <td>{row.body}</td>
                               </tr>
                           ))
                       }
                   </tbody>
               </table>
           </div>
          );
      }
   }

export default BitcoinNewsfeed; 