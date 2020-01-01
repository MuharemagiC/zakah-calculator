import React from 'react';
import CalculatorGoldOne from './CalculatorGoldOne';
import CalculatorGoldTwo from './CalculatorGoldTwo';
import CalculatorGoldThree from './CalculatorGoldThree';
import CalculatorSilverOne from './CalculatorSilverOne';
import { Link } from 'react-router-dom';

const CalculatorGoldSilver = () => {
    return (
        <div className="about_container">
            <div className="about_text_container">
                <div style={{display:'flex', justifyContent: 'center',flexDirection: 'column', marginLeft: '55vh'}}>
                    <h4 className="animated fadeIn delay-1s text_color calculator_text">Zekat na zlato i srebro</h4>
                    <CalculatorGoldOne/>
                    <CalculatorGoldTwo/>
                    <CalculatorGoldThree/>
                    <CalculatorSilverOne/>
                <Link to="/calculator">
                    <div style={{paddingTop: '40px'}}>
                        <div class="btn animated fadeIn delay-5s">
                            <svg>
                                <rect x="0" y="0" fill="none" width="166" height="45" />
                            </svg>
                            Vrati se nazad
                        </div>
                    </div>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default CalculatorGoldSilver;