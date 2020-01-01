import React from 'react';
import { Link } from 'react-router-dom';

const ZakatOne = () => {
    return (
        <div className="about_container">
            <div className="about_text_container">
                <div className = "zakah_text_container_two">
                    <h1 className="max_width_all animated fadeIn delay-1s">
                        Zekat na zlato i srebro
                    </h1>
                </div>
                <div className = "zakah_text_container_two">
                   <h3 className="max_width_all animated fadeIn delay-2s">
                        Musliman je dužan izdvojiti iz
                        svoje imovine i dati zekat na zlato,
                        bez obzira da li je ono u obliku zlatnog nakita,
                        zlatnih legura, zlatnog novca ili zlatnog posuđa 
                        (koje je haram muslimanima da ga uptrebljavaju),
                        ukoliko njegova vrijednost doseže vrijednost nisaba 91,6 grama čistog
                        zlata. Nisab za srebro, nakit i predmete od srebra
                        iznosi 641,5g srebra. Zekat na zlato i srebro je 2,5%
                        od ukupne vrijednosti zlata i srebra. Ulema je saglasna
                        da se na dijamante, bisere,safire, rubine i druge vrste
                        dragog kamenja ne daje zekat.
                    </h3>
                </div>
               <div className = "zakah_text_container_two">
                    <h3 className="max_width_all animated fadeIn delay-3s">
                        Prema većini pravnih škola zekat na zlatni i srebreni
                        nakit podrazumjeva nakit koji nije u upotrebi, osim ako
                        davaoc zekata ne pretjeruje u gomilanju nakita  i uobičava
                        upotrebljavati veliku količinu nakita.
                    </h3>
               </div>
               <div className = "zakah_text_container_two">
                    <h3 className="max_width_all animated fadeIn delay-4s">
                        Međutim, prema, našoj, hanefijskoj pravnoj školi zekat
                        se daje i na nakit koji je u upotrebi i ovog mišljenja
                        bi se trebali pridržavati.
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

export default ZakatOne;