import React, { useState, useEffect }  from "react";
import "./styles.scss";
import { useParams } from 'react-router-dom'
const axios = require('axios').default;

export const Detalle = () => {
    const  [data, setData] = useState([]);
    let { id } = useParams()
    useEffect(() => {
        const getApiMlIdDetalle = async () => {
            try {
                const urlApi = `http://localhost:3000/api/items/${id}`
                const results = await axios(urlApi);
                setData(results.data) 
            } catch (error) {
                console.error("error al mostrar datos de mi api", error)
            }
        }
        getApiMlIdDetalle();
    }, []);

    return(
        <section className="my-5">
            <div className="container Detalle p-5">
                <div className="row mb-4 d-flex justify-content-between align-items-center">
                    <div className="col-12 col-md-6">
                        <img src={data.pictures && data.pictures[0].secure_url} className="Detalle__img"/>
                    </div>
                    <div className="col-12 col-md-6">
                        <p className="Detalle__vendidos">{data.condition} | {data.sold_quantity} vendidos</p>
                        <p className="Detalle__descripcion m-0">{data.title}</p>
                        <p className="Detalle__price my-3">${Number(data.price?.toFixed(0)).toLocaleString("de")} <sup>00</sup></p>
                        <button className="Detalle__button">Comprar</button>
                    </div>
                </div>
                <div className="row">
                    <h4>Descripcion del producto</h4>
                    <p className="Detalle__descrprod">{data.plain_text}</p>
                </div>
            </div>
        </section>
    );
}
