import React from 'react';
import { Link } from 'react-router-dom';

const ZakatSeven = () => {
    return (
        <div className="about_container">
            <div className="about_text_container">
                <div className = "zakah_text_container_two">
                    <h1 className="max_width_all animated fadeIn delay-1s">
                        Zekat na minerale i rude
                    </h1>
                </div>
                <div className = "zakah_text_container_two">
                   <h3 className="max_width_all animated fadeIn delay-2s">
                        Zekat na minerale i rude podrazumjeva so, ugalj, 
                        naftu, šljunak, željznu rudu i ostale rude i 
                        prirodna blaga do kojih fizičko ili pravno lice dođe 
                        iskopavanjem. Zekat na minerale i rude je 20% od ukupne 
                        vrijednosti od koje se oduzmu svi troškovi 
                        (iskopavanje, transport, prodaja, iznos koncesije/poreza) 
                        i ovaj zekat se daje odmah po ostvarenju dobiti od iskopavanja.
                    </h3>
                </div>
                <Link to="/types_of_zakah">
                    <div className = "zakah_text_container_two zakah_button">
                        <div class="btn animated fadeIn delay-3s">
                            <svg>
                                <rect x="0" y="0" fill="none" width="166" height="45" />
                            </svg>
                            Vrati se nazad
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ZakatSeven;