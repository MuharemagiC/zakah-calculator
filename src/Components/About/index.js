import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const About = () => {
    return (
        <div className="about_container">
            <div className="about_text_container">
                <div style={{display:'flex', justifyContent: 'center'}}>
                    <h1 className="max_width_all animated fadeIn delay-1s">
                        Šta je to zekat?
                    </h1>
                </div>
                <div className="about_container_two">
                    <h3 className="max_width_all animated fadeIn delay-2s">
                        Riječ zekat je arapska riječ koja označava čišćenje, rast,
                        napredovanje.Zekat,kao jedan od pet stubova islama, i obaveza koja
                        nas određuje kao muslimane, označava čišćenje imetka od nečistoća kao
                        pripreme za njegov rast, napredak i uvećavanje.
                    </h3>
                </div>
                <div className="about_container_two">
                    <h3 className="max_width_all animated fadeIn delay-2s">
                        Negirati zekat, kao strogu vjersku obavezu, znači izlazak iz vjere,
                        a ne davanje zekata za osobu koja ga je dužna dati, prestavlja veliki
                        grijeh koji podrazumjeva kako dunjalučku tako i ahiretsku kaznu i udaljava 
                        od Allahove dž.š. milosti.
                    </h3>
                </div>
                <div className="about_container_two">
                    <h3 className="max_width_all animated fadeIn delay-3s">
                        Uvjeti za obaveznost davanja zekata:
                    </h3>
                </div>
                <div className="about_container_two">
                    <List>
                        <ListItem className="animated fadeInRight delay-4s">
                            Biti musliman
                        </ListItem>
                        <ListItem className="animated fadeInRight delay-4s">
                            Posjedovati puno <br/>
                            vlasništvo (u dunjalučkom smislu)<br/>
                            nad imovinom iz koje se izdvaja zekat
                        </ListItem>
                        <ListItem className="animated fadeInRight delay-5s">
                            Biti umno zdrav i slobodan
                        </ListItem>
                        <ListItem className="animated fadeInRight delay-5s">
                            Posjedovati imovinu u vrijednosti<br/>
                            nisaba ili više od toga
                        </ListItem>
                    </List>
                </div>
               
            
            </div>
            
        </div>
    );
};

export default About;