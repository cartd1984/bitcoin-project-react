import React, { Component } from "react";

import './App.css';

import App from './App';

class BitcoinNewsfeed extends Component {
    constructor(props) {
      super(props);
      this.state = {
          newsfeed: [],
      };
    }
   
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

    /*this.state.newsfeed.map((item, index) => (
      <li className='indent' key={index}>
        <Link
          circleId={this.state.SidebarCircleID[index]}
          onClick={(event) => this.handleClickGotoCircle(event)}>
          {item}
        </Link>
      </li>
    ) */
   
      render() {
          return (
            <div className="App">
           
            <table>
                   <tr>
                       <th>News Source</th>
                       <th>Image</th>
                       <th>Article Title</th>
                       <th>Article Body</th>
                   </tr>
                   <tbody>
                       { 
                           this.state.newsfeed.map(row => (
                               <tr>
                                   <td>{row.source}</td>
                                   {/* {this.state.newsfeed.map((item, index) => (
                                     <td>{row.url}</td>
                                     <link
                                      circleId={this.state.SidebarCircleID[index]}
                                      onClick={(event) => this.handleClickGotoCircle(event)}>
                                      {item}
                                      </link>
                                   )) */}
                                   <td>{row.source_info.img}</td>
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