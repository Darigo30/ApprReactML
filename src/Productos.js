import React from "react";
import "./styles.scss";

function Products(){
    return(
        <section className="my-5">
            <div className="container Products p-3">
                <div className="Products__container">
                    <div className="row mb-4">
                        <div className="col-12 col-md-2">
                            <img src="https://media.revistagq.com/photos/5eaa6ce45a16590008bff7c1/master/pass/Apple_new-iphone-se-white_04152020_big.jpg.large.jpg" className="Products__img"/>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="Products__price d-flex justify-content-start">$1.980.000
                                <span>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/800px-Sign-check-icon.png" className="Products__iconfree"/>
                                </span>
                            </p>
                            <p className="Products__descripcion m-0">Apple iPhone 11 (128 GB) - Negro</p>
                            <p className="Products__descripcion">Completo unico</p>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-start justify-content-md-center">
                            <p className="Products__author">Pedro Gonzalez</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export {Products}