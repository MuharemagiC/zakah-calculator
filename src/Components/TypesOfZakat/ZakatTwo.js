import React from 'react';
import { Link } from 'react-router-dom';

const ZakatTwo = () => {
    return (
        <div className="about_container">
            <div className="about_text_container">
                <div className = "zakah_text_container_two">
                    <h1 className="max_width_all animated fadeIn delay-1s">
                        Zekat na novac
                    </h1>
                </div>
                <div className = "zakah_text_container_two">
                   <h3 className="max_width_all animated fadeIn delay-2s">
                        Na novac, bez obzira u kojem obliku bio,
                        koji se nalazi u posjedu vlasnika, na
                        bankovnom računu, pozajmljen drugoj osobi ili
                        deponovan na određenom mjestu, daje se zekat 2,5% od
                        ukupne vrijednosti novca. Na novac koji je pozajmljen
                        drugom fizičkom ili pravnom licu daje se zekat samo
                        ukoliko postoji određena sigurnost da će
                        taj novac biti vraćen.
                    </h3>
                </div>
                <div className = "zakah_text_container_two">
                    <h3 className="max_width_all animated fadeIn delay-3s">
                        Kamate od štednje ne bi trebalo uzimati u obzir
                        prilikom obračuna zekata, već ih treba podijeliti
                        kao sadaku ili dati u druge humanitarne svrhe.
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

export default ZakatTwo;