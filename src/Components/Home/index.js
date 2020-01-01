import React from 'react';
import medina from '../../Resources/img/medina.jpg';

const HomePicture = () => {
    return (
        
        <div style={{background:`url(${medina}) no-repeat `, height: '100vh', backgroundPosition: 'center', backgroundSize: 'cover', overflow: 'hidden'}}>
            <div  className="home_container_one">
                <h1 className="home_h1 animated fadeInRight delay-2s">Allah kaže:</h1>
            </div>
            <div  className="home_container_two">
                <h2 className="home_h2 animated fadeInRight delay-4s">
                    »Uzmi iz njihova imetka sadaku (zekat),
                    da ih time očistiš i uzdigneš». (at-tawba, 103. ajet).
                </h2>
            </div>
        </div>
        
    
    );
};

export default HomePicture;