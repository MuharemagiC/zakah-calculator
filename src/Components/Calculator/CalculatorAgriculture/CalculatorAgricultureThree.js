import React, { Component } from 'react';

class CalculatorAgricultureThree extends Component {
    
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
            <div className="animated fadeIn delay-4s">
                <h5 className="text_color">Proizvodi navodnjavani dijelom<br/> prirodno, a dijelom vještački:</h5>
                <input type="number" value={this.state.initialValue} onChange={this.alpha} name="initialValue" id="initialValue"/>
                <span className="calculator">Vaš zekat iznosi: {(this.state.initialValue  * 0.075).toFixed(2)} KM</span>
            </div>
        )
      }else {
           return (
            <div className="animated fadeIn delay-4s">
                <h5 className="text_color">Proizvodi navodnjavani dijelom<br/> prirodno, a dijelom vještački:</h5>
                <input type="number" value={this.state.initialValue} onChange={this.alpha} name="initialValue" id="initialValue"/>
                <span className="calculator">Zekat je 7.5 % od ukupne vrijednosti</span>
            </div>
            )
        } 
    }
}
   

export default CalculatorAgricultureThree;