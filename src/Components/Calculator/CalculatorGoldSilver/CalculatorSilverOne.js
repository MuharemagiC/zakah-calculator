import React, { Component } from 'react';


class CalculatorSilverOne extends Component {
    
     state = {
        initialValue: 0,
    }
    alpha = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }
  render() {
      if (this.state.initialValue >  641.5){
          return (
            <div className="animated fadeIn delay-5s" style= {{paddingTop:'30px'}}>
                <h5 className="text_color">Unesi količinu srebra:</h5>
                    <input type="number" value={this.state.initialValue} onChange={this.alpha} name="initialValue" id="initialValue"/>
                    <span className="calculator">Vaš zekat iznosi: {(this.state.initialValue * 0.84 * 0.025).toFixed(2)} KM</span>
            </div>
        )
    }   else {
           return (
            <div className="animated fadeIn delay-5s" style= {{paddingTop:'30px'}}>
                <h5 className="text_color">Unesi količinu srebra:</h5>
                    <input type="number" value={this.state.initialValue} onChange={this.alpha} name="initialValue" id="initialValue"/>
                    <span className="calculator">Nisab posjedujete ako imate preko 641.5 gr</span>
            </div>
            )
        }
    }
}
   
export default CalculatorSilverOne;
