import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Link } from 'react-router-dom';

const TypesOfZakat = () => {
    return (
        <div className="about_container">
            <div className="about_text_container">
                <div className="zakah_text_container_two">
                    <h1 className="animated fadeIn delay-1s">
                        Pravila za obračunavanje zekata
                    </h1>
                </div>
                <div className="zakah_text_container_two">
                    <List>
                        <Link to="/zakat_one" className="text_color">
                            <ListItem 
                                style={{textDecoration: 'underline #790604 '}} 
                                className="animated fadeInRight delay-2s">
                                    Zekat na zlato i srebro
                            </ListItem>
                        </Link>
                        <Link to="/zakat_two" className="text_color">
                            <ListItem 
                                style={{textDecoration: 'underline #790604 '}} 
                                className="animated fadeInLeft delay-2s">
                                    Zekat na novac
                            </ListItem>
                        </Link>
                        <Link to="/zakat_three" className="text_color">
                            <ListItem 
                                style={{textDecoration: 'underline #790604 '}} 
                                className="animated fadeInRight delay-3s">
                                    Zekat na pozajmice, državne obveznice,<br/>
                                    vrijednosne papire, dionice, primanja
                            </ListItem>
                        </Link>
                        <Link to="/zakat_four" className="text_color">
                            <ListItem 
                                style={{textDecoration: 'underline #790604 '}} 
                                className="animated fadeInLeft delay-3s">
                                    Zekat na nekretnine
                            </ListItem>
                        </Link>
                        <Link to="/zakat_five" className="text_color">
                            <ListItem 
                                style={{textDecoration: 'underline #790604 '}} 
                                className="animated fadeInRight delay-4s">
                                    Zekat na trgovačku robu i poslovanje
                            </ListItem>
                        </Link>
                        <Link to="/zakat_six" className="text_color">
                            <ListItem 
                                style={{textDecoration: 'underline #790604 '}} 
                                className="animated fadeInLeft delay-4s">
                                    Zekat na poljoprivredne proizvode
                            </ListItem>
                        </Link>
                        <Link to="/zakat_seven" className="text_color">
                            <ListItem 
                                style={{textDecoration: 'underline #790604 '}} 
                                className="animated fadeInRight delay-5s">
                                    Zekat na minerale i rude
                            </ListItem>
                        </Link>
                        <Link to="/zakat_eight" className="text_color">
                            <ListItem 
                                style={{textDecoration: 'underline #790604 '}} 
                                className="animated fadeInLeft delay-5s">
                                    Zekat na stoku
                            </ListItem>
                        </Link>        
                    </List>
                </div>
               
            
            </div>
            
        </div>
    );
};

export default TypesOfZakat;