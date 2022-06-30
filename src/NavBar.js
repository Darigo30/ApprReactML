import React, { useState }  from "react";
import "./styles.scss";
import { useNavigate, Link } from "react-router-dom";



function NavBar(props){
    let navigate = useNavigate();
    const [search, setSearch] = useState('');
    const searchProducts = () => {
        navigate('/items?search=' + search)
    }
    return (
        <nav className="navbar Nav__ml">
            <Link to = "/">
                <img className= "me-3" src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png"
                alt="Logo Mercado Libre"/>
            </Link>

            <div className="input-group w-50 justify-content-center">
                <input onChange={event => setSearch(event.target.value)} type="text" class="form-control"
                placeholder="Nunca dejes de buscar" aria-label="Nunca dejes de buscar" aria-describedby="button-addon2" />
                    <button onClick={searchProducts} className="btn btn-outline-secondary" type="button" id="button-addon2">
                        <i class="bi bi-search"></i>
                    </button>
            </div>
        </nav>
    );
}

export {NavBar}

