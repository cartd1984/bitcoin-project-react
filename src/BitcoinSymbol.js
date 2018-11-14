import React, { Component } from "react";

class BitcoinSymbol extends Component {
    constructor() {
        super();
        this.state = {
            coinSymbol: [],
        }; 
    }

    componentDidMount() {
        fetch('https://min-api.cryptocompare.com/data/all/coinlist', {cache: "force-cache"})
        .then (results => {
            return results.json();
        })
        .then(json => {
            this.setState({ coinSymbol: Object.values(json.Data).slice(0, 10) });
            console.log("state", this.state.coinSymbol);
        })
    }

    render() {
        return (
          <div className="BitcoinSymbol">
          <table>
              <tbody>
                {
                    this.state.coinSymbol.map(row =>
                        <tr>
                            <td>{row.Symbol}</td>
                        </tr>
                        )
                }
              </tbody>
            </table>
         </div>
        );
    }
}

export default BitcoinSymbol;