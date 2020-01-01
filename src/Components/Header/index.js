import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="fixed"  style={{
            backgroundColor: '#3D9970',
            padding: '5px 0',
            borderBottom: '2px solid #f5e9dc',
        }}>
            <Toolbar style={{display: 'flex'}}>
                <div className="header_text">
                    Zekat Kalkulator
                </div>
                <div>
                    <Link to='/'>
                        <Button style={{color: '#f5e9dc', fontFamily:'Literata'}}>
                            Početna
                        </Button>
                    </Link>
                    <Link to='/about'>
                        <Button style={{color: '#f5e9dc', fontFamily:'Literata'}}>
                            Šta je zekat
                        </Button>
                    </Link>
                    <Link to='/types_of_zakah'>
                        <Button style={{color: '#f5e9dc', fontFamily:'Literata'}}>
                            Tipovi Zekata
                        </Button>
                    </Link>
                    <Link to='/calculator'>
                        <Button style={{color: '#f5e9dc', fontFamily:'Literata'}}>
                            Kalkulator
                        </Button>
                    </Link> 
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;