import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div className="about_container">
            <div className="about_text_container">
                <div className="calculator_text_container_two">
                    <h1 className="animated fadeIn delay-1s">
                        Zekat Kalkulator
                    </h1>
                </div>
                <div className="calculator_text_container_two">
                    <List>
                        <Link to="/calculator_one" style={{color: '#3D9970'}}>
                            <ListItem style={{textDecoration: 'underline #790604 '}} 
                                      className="animated fadeInRight delay-2s">
                                        Kalkulator za zlato i srebro
                            </ListItem>
                        </Link>
                        <Link to="/calculator_two" style={{color: '#3D9970'}}>
                            <ListItem style={{textDecoration: 'underline #790604 '}} 
                                      className="animated fadeInLeft delay-2s">
                                        Kalkulator za novac
                            </ListItem>
                        </Link>
                        <Link to="/calculator_three" style={{color: '#3D9970'}}>
                            <ListItem style={{textDecoration: 'underline #790604 '}} 
                                      className="animated fadeInRight delay-3s">
                                        Kalkulator za pozajmice, 
                                        državne obveznice,<br/> 
                                        vrijednosne papire, 
                                        dionice, primanja
                            </ListItem>
                        </Link>
                        <Link to="/calculator_four" style={{color: '#3D9970'}}>
                            <ListItem style={{textDecoration: 'underline #790604 '}} 
                                      className="animated fadeInLeft delay-3s">
                                        Kalkulator za nekretnine
                            </ListItem>
                        </Link>
                        <Link to="/calculator_five" style={{color: '#3D9970'}}>
                            <ListItem style={{textDecoration: 'underline #790604 '}} 
                                      className="animated fadeInRight delay-4s">
                                        Kalkulator za trgovačku robu i poslovanje
                            </ListItem>
                        </Link>
                        <Link to="/calculator_six" style={{color: '#3D9970'}}>
                            <ListItem style={{textDecoration: 'underline #790604 '}} 
                                      className="animated fadeInLeft delay-4s">
                                        Kalkulator za poljoprivredne proizvode
                            </ListItem>
                        </Link>
                        <Link to="/calculator_seven" style={{color: '#3D9970'}}>
                            <ListItem style={{textDecoration: 'underline #790604 '}} 
                                      className="animated fadeInRight delay-5s">
                                        Kalkulator za minerale i rude
                            </ListItem>
                        </Link>
                        <Link to="/calculator_eight" style={{color: '#3D9970'}}>
                            <ListItem style={{textDecoration: 'underline #790604 '}} 
                                      className="animated fadeInLeft delay-5s">
                                        Kalkulator za stoku
                            </ListItem>
                        </Link>        
                    </List>
                </div>
            </div>
        </div>
    );
};

export default index;