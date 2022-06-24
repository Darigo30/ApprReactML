import React from "react";
import "./styles.scss";

function NavBar(props){
    return (
        <nav className="navbar Nav__ml">
            <img className= "me-3" src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png" alt="Logo Mercado Libre"/>
            
            <div className="input-group w-50 justify-content-center">
                <input type="text" class="form-control" placeholder="Nunca dejes de buscar" aria-label="Nunca dejes de buscar" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
            </div>
        </nav>
    );
}

export {NavBar}

