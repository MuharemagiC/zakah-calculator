import React from 'react';
import { Link } from 'react-router-dom';

const ZakatSix = () => {
    return (
        <div className="about_container">
            <div className="about_text_container">
                <div className = "zakah_text_container_two">
                    <h1 className="max_width_all animated fadeIn delay-1s">
                        Zekat na poljoprivredne proizvode
                    </h1>
                </div>
                <div className = "zakah_text_container_two">
                   <h3 className="max_width_all animated fadeIn delay-2s">
                        Zekat na poljoprivredne proizvode obračunava 
                        se na sve što izraste iz zemlje, a od čega 
                        čovjek ima određenu korist. Većina islamskih 
                        pravnika smatra da se to odnosi na svo voće i povrće, 
                        žitarice, rižu, soju, pamuk i med, dok neki u ovu kategoriju 
                        ubrajaju i ribu, morske plodove i duhan.Zekat na poljoprivredne 
                        proizvode se daje na ukupne prinose u iznosu od 10% za prirodno 
                        navodnjavane, 5% za vještački navodnjavane i 7,5% za poljoprivredne 
                        proizvode koji su navodnjavani dijelom prirodnim, a dijelom vještačkim 
                        putem. Zekat na poljoprivredne proizvode daje se odmah po žetvi ili 
                        ubiranju proizvoda.Nisab za poljoprivredne proizvode prema hanefijskom 
                        mezhebu (mezheb kojeg prakticiraju muslimani u BiH) nije tačno određen, 
                        nego se određuje prema potrebama davaoca zekata i podrazumjeva sve ono 
                        što prelazi osnovne potrebe davaoca. Prema drugim pravnim školama nisab 
                        za poljoprivredne proizvode je 653 kg.
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

export default ZakatSix;