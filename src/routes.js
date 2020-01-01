import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout';

import Home from './Components/Home/';
import About from './Components/About/';
import TypesOfZakat from './Components/TypesOfZakat/index';
import ZakatOne from './Components/TypesOfZakat/ZakatOne';
import ZakatTwo from './Components/TypesOfZakat/ZakatTwo';
import ZakatThree from './Components/TypesOfZakat/ZakatThree';
import ZakatFour from './Components/TypesOfZakat/ZakatFour';
import ZakatFive from './Components/TypesOfZakat/ZakatFive';
import ZakatSix from './Components/TypesOfZakat/ZakatSix';
import ZakatSeven from './Components/TypesOfZakat/ZakatSeven';
import ZakatEight from './Components/TypesOfZakat/ZakatEight';
import Calculator from './Components/Calculator/';
import CalculatorGoldSilver from './Components/Calculator/CalculatorGoldSilver/';
import CalculatorMoney from './Components/Calculator/CalculatorMoney/';
import CalculatorStocks from './Components/Calculator/CalculatorStocks/';
import CalculatorRealEstates from './Components/Calculator/CalculatorRealEstates/';
import CalculatorMarket from './Components/Calculator/CalculatorMarket/';
import CalculatorMinerals from './Components/Calculator/CalculatorMinerals/';
import CalculatorAgriculture from './Components/Calculator/CalculatorAgriculture/';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/calculator_six' exact component={CalculatorAgriculture}/>
        <Route path='/calculator_seven' exact component={CalculatorMinerals}/>
        <Route path='/calculator_five' exact component={CalculatorMarket}/>
        <Route path='/calculator_four' exact component={CalculatorRealEstates}/>
        <Route path='/calculator_three' exact component={CalculatorStocks}/>
        <Route path='/calculator_two' exact component={CalculatorMoney}/>
        <Route path='/calculator_one' exact component={CalculatorGoldSilver}/>
        <Route path='/calculator' exact component={Calculator}/>
        <Route path='/zakat_eight' exact component={ZakatEight}/>
        <Route path='/zakat_seven' exact component={ZakatSeven}/>
        <Route path='/zakat_six' exact component={ZakatSix}/>
        <Route path='/zakat_five' exact component={ZakatFive}/>
        <Route path='/zakat_four' exact component={ZakatFour}/>
        <Route path='/zakat_three' exact component={ZakatThree}/>
        <Route path='/zakat_two' exact component={ZakatTwo}/>
        <Route path='/zakat_one' exact component={ZakatOne}/>
        <Route path='/types_of_zakah' exact component={TypesOfZakat}/>
        <Route path='/about' exact component={About}/>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Layout>
  );
};

export default Routes;
