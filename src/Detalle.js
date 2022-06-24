import React from "react";
import "./styles.scss";


function Detalle(){
    return(
        <section className="my-5">
            <div className="container Detalle p-5">
                <div className="row mb-4 d-flex justify-content-between">
                    <div className="col-12 col-md-8">
                        <img src="https://media.revistagq.com/photos/5eaa6ce45a16590008bff7c1/master/pass/Apple_new-iphone-se-white_04152020_big.jpg.large.jpg" className="Detalle__img"/>
                    </div>
                    <div className="col-12 col-md-4">
                        <p className="Detalle__vendidos">Nuevo | 234 vendidos</p>
                        <p className="Detalle__descripcion m-0">Apple iPhone 11 (128 GB) - Negro</p>
                        <p className="Detalle__price my-3">$1.980.000 <sup>00</sup></p>
                        <button className="Detalle__button">Comprar</button>
                    </div>
                </div>
                <div className="row">
                    <h4>Descripcion del producto</h4>
                    <p className="Detalle__descrprod">El iPhone 11 tiene un sistema de dos cámaras que te permite tomar fotos con ultra gran angular, capturar excelentes fotos nocturnas con el modo Noche y grabar videos con una calidad sorprendente. Además, es resistente al agua y al polvo1, tiene una batería de larga duración2 y viene en seis colores increíbles. Disfruta la espectacular experiencia de tener un iPhone 11.</p>
                </div>
            </div>
        </section>
    );
}

export {Detalle};