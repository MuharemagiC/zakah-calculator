import React, { Component } from 'react';

class CalculatorRealEstatesOne extends Component {
    
    state = {
    initialValue: 0,
    }
    alpha = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }


    render() {
      if (this.state.initialValue){
          return (
            <div className="animated fadeIn delay-2s">
                <h5 className="text_color">Unesi  iznos od iznajmljivanja, nekretnina, kuca, stanova...:</h5>
                <input type="number" value={this.state.initialValue} onChange={this.alpha} name="initialValue" id="initialValue"/>
                <span className="calculator">Vaš zekat iznosi: {(this.state.initialValue  * 0.025).toFixed(2)} KM</span>
            </div>
        )
      }else {
           return (
            <div className="animated fadeIn delay-2s">
                <h5 className="text_color">Unesi  iznos od iznajmljivanja, nekretnina, kuca, stanova...:</h5>
                <input type="number" value={this.state.initialValue} onChange={this.alpha} name="initialValue" id="initialValue"/>
                <span className="calculator">Ovaj zekat se daje odmah, 2.5% od vrijednosti</span>
            </div>
            )
        }
    }
}
   

export default CalculatorRealEstatesOne;
