import React, { Component } from 'react';

class CalculatorMarketOne extends Component {
    
    state = {
    initialValue: 0,
    }
    alpha = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }


    render() {
      if (this.state.initialValue > 7060){
          return (
            <div className="animated fadeIn delay-2s">
                <h5 className="text_color">Unesi vrijednost robe:</h5>
                <input type="number" value={this.state.initialValue} onChange={this.alpha} name="initialValue" id="initialValue"/>
                <span className="calculator">Vaš zekat iznosi: {(this.state.initialValue  * 0.025).toFixed(2)} KM</span>
            </div>
        )
      }else {
           return (
            <div className="animated fadeIn delay-2s">
                <h5 className="text_color">Unesi vrijednost robe:</h5>
                <input type="number" value={this.state.initialValue} onChange={this.alpha} name="initialValue" id="initialValue"/>
                <span className="calculator">Nisab posjedujete ako imate preko 7060 KM</span>
            </div>
            )
        } 
    }
}
   

export default CalculatorMarketOne;