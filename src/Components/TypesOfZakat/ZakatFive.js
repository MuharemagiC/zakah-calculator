import React from 'react';
import { Link } from 'react-router-dom';

const ZakatFive = () => {
    return (
        <div className="about_container">
            <div className="about_text_container">
                <div className = "zakah_text_container_two">
                    <h1 className="max_width_all animated fadeIn delay-1s">
                        Zekat na trgovačku robu i poslovanje
                    </h1>
                </div>
                <div className = "zakah_text_container_two">
                   <h3 className="max_width_all animated fadeIn delay-2s">
                        Zekat na trgovačku robu podrazumjeva robu kojom 
                        osoba trguje radi ostvarivanja dobiti. Poslovni 
                        prostori, automobili, proizvodna i druga sredstva 
                        kojima se trgovac ili firma svakodnevno služi u 
                        poslu ne ulaze u obračun zekata. Zekat na trgovačku 
                        robu iznosi 2,5%. Prije obračunavanja zekata vlasnik 
                        trgovačke robe treba napraviti popis robe, kako u trgovini 
                        tako i u skladištima, odrediti njihovu vrijednost po 
                        aktuelnim tržišnim cijenama (u obzir uzeti diskontne cijene), 
                        dodati iznos novca zarađen od prodaje robe u toku obračunske 
                        godine, a zatim oduzeti obaveze prema dobavljačima, poreze, 
                        rate kredita ili pozajmica i ostale obaveze vezane za obračun 
                        trgovačke robe.Firme koje se bave prodajom usluga kao što su 
                        marketingške, informatičke, ugostiteljske i silčne firme, 
                        zastupništva obračunavat će zekat na dobit od prodaje usluga, 
                        nakon što oduzmu troškove poslovanja. Važno je napomenuti da 
                        se pod ovu kategoriju obaveze davanja zekata mogu uvrstiti i 
                        dobit od pronalazačkih i autorskih prava, prodaje trgovačkog imena, 
                        licence i znaka (brand name), kompjuterskih programa, internet 
                        stranica i hostinga, ukoliko je dobit od navedenog ostvarena u 
                        toku obračunske godine. Također je neophodno napomenuti da sva 
                        ki posao koji podrazumjeva proizvodnju ili prikupljanje robe radi 
                        njene prodaje, kao što je uzgoj pilića, farme za proizvodnju jaja, 
                        mlijeka koja su namijenjena prodaji, prikupljanje i prodaja ljekovitog 
                        bilja, podliježe obavezi davanja zekata na tu robu, a zekat će se 
                        obračunavati 2,5% na ostvarenu neto dobit od tog posla u toku obračunske 
                        godine i zatečenu robu na dan obračuna 
                        (nakon odbijanja svih troškova i obaveza za nju).
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

export default ZakatFive;