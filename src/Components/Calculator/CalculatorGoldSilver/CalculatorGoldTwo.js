import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class CalculatorGoldTwo extends Component {
    
    state = {
        initialValue: 0,
    }
    alpha = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }

  render() {
      if (this.state.initialValue > 91.6){
          return (
            <div className="animated fadeIn delay-3s" style= {{paddingTop:'30px'}}>
                <h5 className="text_color">Unesi kolicinu 18 karatnog zlata:</h5>
                    <input type="number" value={this.state.initialValue} onChange={this.alpha} name="initialValue" id="initialValue"/>
                    <span className="calculator">Vaš zekat iznosi: {(this.state.initialValue * 47 * 0.025).toFixed(2)} KM</span>
            </div>
        )
      }else {
           return (
            <div className="animated fadeIn delay-3s" style= {{paddingTop:'30px'}}>
                <h5 className="text_color">Unesi kolicinu 18 karatnog zlata:</h5>
                    <input type="number" value={this.state.initialValue} onChange={this.alpha} name="initialValue" id="initialValue"/>
                    <span className="calculator">Nisab posjedujete ako imate preko 91.6 gr</span>
            </div>
            )
        }
    }
}
   



export default CalculatorGoldTwo;
