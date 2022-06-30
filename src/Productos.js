import React, { useState, useEffect }  from "react";
import "./styles.scss";
import { useSearchParams, useNavigate } from "react-router-dom";
const axios = require('axios').default;


//Componente productos
export const Products = () => {
    
    const navigate = useNavigate();
    const searchProducts = (id) => {
        navigate('/items/' + id)
    }

    const  [data, setData] = useState([]);
    const [ searchParams ] = useSearchParams();
    const search = searchParams.get('search')

    useEffect(() => {
        const GetApiMl = async () => {
            try {
                const urlApi = "http://localhost:3000/api/items"
                const results = await axios(urlApi, {params: {q: search} });
                setData(results.data.results) 
            } catch (error) {
                console.error("error al mostrar datos de mi api", error)
            }
        }
        GetApiMl();
    }, []);
    let product = 1

    return (
        <section className="my-5">
            {data?.map((item, i) => {
               
            if(product <= 4) {
                product++
            return <div className="container Products p-5" key={i}>

                <div onClick={() => searchProducts(item.id)} className="Products__container">
                   
                    <div className="row mb-4">
                        <div className="col-12 col-md-2">
                            <img src={item?.thumbnail} className="Products__img"/>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="Products__price d-flex justify-content-start">${Number(item.price?.toFixed(0)).toLocaleString("de")}
                                <span className="d-flex align-items-center ml-2">
                                    {
                                        item?.shipping.free_shipping
                                        ?  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/800px-Sign-check-icon.png"
                                        className="Products__iconfree"/>
                                        : null 
                                    }
                                </span>
                            </p>
                            <p className="Products__descripcion m-0">{item?.title}</p>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-start justify-content-md-center">
                            <p className="Products__author">{item?.seller?.eshop?.nick_name}</p>
                        </div>
                    </div>
                </div>
            </div>
            }})}
        </section>
    );
  
};

