import React from 'react';
import { Link } from 'react-router-dom';

const ZakatThree = () => {
    return (
        <div className="about_container">
            <div className="about_text_container">
                <div className = "zakah_text_container_two">
                    <h1 className="max_width_all animated fadeIn delay-1s">
                        Zekat na pozajmice, državne obveznice,
                        vrijednosne papire, dionice, primanja
                    </h1>
                </div>
                <div className = "zakah_text_container_two">
                   <h3 className="max_width_all animated fadeIn delay-2s">
                        Zekat na dionice se daje u procentu od 2,5%, a
                        postoje dva načina za obračunavanje. Ukoliko
                        vlasnik dionica trguje ili ima namjeru da sa
                        dionicama trguje na berzi, u tom slučaju one se
                        tretiraju kao trgovačka roba i obračunava se 2,5%
                        od ukupne vrijednosti dionica na dan obračuna ili
                        najbliži datum kada se sa dionicama trgovalo na berzi. 
                        Prilikom obračuna će se oduzeti troškovi transakcija koji 
                        podrazumjevaju troškove berze, brokerske kuće i ostale troškove. 
                        Ukoliko vlasnik dionica ne trguje sa dionicama niti ima namjeru u 
                        skorije vrijeme trgovati, u tom slučaju se obračunava zekat od 
                        2,5% na ostvarenu dobit u toku godine i dividendu.
                    </h3>
                </div>
               <div className = "zakah_text_container_two">
                    <h3 className="max_width_all animated fadeIn delay-3s">
                        Zekat na pozajmice, godišnja primanja, 
                        državne obveznice, vrijednosne papire, 
                        osiguranja koja uključuju štednju (tekaful), 
                        obračunava se po stopi od 2,5% na ukupnu vrijednost. 
                        Što se tiče zekata na plate i ukupna godišnja primanja, 
                        to podrazumjeva plate i primanja koja su mnogo veća 
                        od prosječnih primanja u društvu i da nakon podmirivanja 
                        osnovnih životnih potreba i troškova osobe i njegove 
                        porodice, realno ostaje priličan iznos novca. Zekat 
                        na plate i godišnja primanja ima za cilj da suzbije 
                        rasipništvo i podstakne muslimana na primjereno 
                        trošenje svog novca. Svaki pojedinac treba potpuno 
                        savjesno ocijeniti da li su njegova primanja 
                        veća od potreba i troškova i na njih obračunati zekat.
                    </h3>
               </div>
               <Link to="/types_of_zakah">
                    <div className = "zakah_text_container_two zakah_button">
                        <div class="btn animated fadeIn delay-4s">
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

export default ZakatThree;