import React from 'react';
import { Link } from 'react-router-dom';

const ZakatFour = () => {
    return (
        <div className="about_container">
            <div className="about_text_container">
                <div className = "zakah_text_container_two">
                    <h1 className="max_width_all animated fadeIn delay-1s">
                        Zekat na nekretnine
                    </h1>
                </div>
                <div className = "zakah_text_container_two">
                   <h3 className="max_width_all animated fadeIn delay-2s">
                        Zekat na nekretnine se obračunava po stopi od 2.5%
                        na novac koji vlasnik dobije od iznajmljivanja nekretnine, 
                        bilo da se radi o zemljištu, kući, stanu, poslovnom prostoru, 
                        vikendici ili drugoj vrsti nekretnine. Ovaj zekat se daje odmah 
                        po dobijanju iznosa od iznajmljivanja, nakon što se odbiju 
                        troškovi koje je vlasnik imao, a vezani su za tu nekretninu, 
                        ukoliko oni na godišnjem nivou dostižu vrijednost nisaba. 
                        Zekat se ne daje na nekretnine koje vlasnik ili članovi 
                        njegove porodice koriste ili je izdao nekretninu bez naknade. 
                        Ukoliko se vlasnik nekretnina bavi prodajom istih onda se one 
                        tretiraju kao trgovačka roba i dužan je dati 2,5% od ukupne 
                        vrijednosti nekretnina, nakon što odbije troškove.
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

export default ZakatFour;