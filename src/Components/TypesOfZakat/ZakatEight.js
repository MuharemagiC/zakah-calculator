import React from 'react';
import { Link } from 'react-router-dom';

const ZakatEight = () => {
    return (
        <div className="about_container">
            <div className="about_text_container">
                <div className = "zakah_text_container_two">
                    <h1 className="max_width_all animated fadeIn delay-1s">
                        Zekat na stoku
                    </h1>
                </div>
                <div className = "zakah_text_container_two">
                   <h3 className="max_width_all animated fadeIn delay-2s">
                        Ukoliko imate 30 goveda ili više, ali manje 
                        od 40, dužni ste izdvojiti jedno goveče u 
                        drugoj godini. Za broj goveda između 40 i 59, 
                        zekat je jedno june u trećoj godini, za 60-69 
                        dvoje junadi, 70-79 jedna junica od tri godine 
                        i jedno june, za 80-89 dvije junice od tri godine, 
                        za 90-100 troje junadi. Za veći broj goveda, 
                        na svakih sljedećih 40 grla dodaje se jedno june u 
                        trećoj godini, a na svakih sljedećih 30 dodaje se 
                        jedno june u trećoj godini.
                    </h3>
                </div>
                <div className = "zakah_text_container_two">
                    <h3 className="max_width_all animated fadeIn delay-3s">
                        Za ovce ili koze izdvajate zekat ukoliko posjedujete 
                        40 ili više grla. Ukoliko broj grla ne prelazi 120, 
                        dužni ste izdvojiti jednu ovcu ili kozu. Za broj grla 
                        između 121 i 200, zekat su dvije ovce ili koze, za 201-399 
                        tri ovce ili koze, za 400-499 četiri ovce ili koze. 
                        Na svakih sljedećih 100 ovaca ovom broju dodaje se 
                        jedna ovca ili koza.
                    </h3>
                </div>
                <div className = "zakah_text_container_two">
                    <h3 className="max_width_all animated fadeIn delay-4s">
                        Uvjet obaveznosti davanja zekata na stoku je da stoka
                        bude na ispaši veći dio godine. Stoka koja je namijenjena 
                        prodaji tretira se kao trgovačka roba, za nju ne važi gore 
                        navedeni nisab i u tom slučaju nisab je u vrijednosti nisaba 
                        za trgovačku robu, a zekat se obračunava na ukupnu vrijednost 
                        stoke. Stoka koja se koristi za vuču i druge poslove u poljoprivredi 
                        ne podliježe obavezi davanja zekata na nju.
                    </h3>
                </div>
                <Link to="/types_of_zakah">
                    <div className = "zakah_text_container_two zakah_button">
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
    );
};

export default ZakatEight;