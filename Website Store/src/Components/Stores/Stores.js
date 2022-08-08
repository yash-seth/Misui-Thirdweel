import React, { useEffect, useState } from 'react'
import "./Stores.css"
import { StoreData } from "../../Data"
import { Link } from "react-router-dom";
import { storeServiceUrl, websiteStoreUrl } from '../../api/urls';
import axios from 'axios'

function Stores({setProfileView}) {

    const [stores, setStores] = useState(null)
    const coordinates = {
        "long": "74.006",
        "lat": "40.7128"
    }
    useEffect(() => {
        const options = {
            method: "POST",
            url: `${storeServiceUrl}/get-nearby-stores`,
            data: {
                coordinates
            }
        }
        axios(options)
            .then((response) => {
                console.log(response)
                setStores(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='storesContainer'>
            <div className='storesHeading'>
                <section id="stores-heading">Nearby Stores</section>
                <img id="arrow" src={require("./arrow.png")} alt="arrow" />
            </div>
            <Link to="/storeProfile" style={{ textDecoration: "none", color: "inherit" }} onClick={()=>setProfileView(false)}>
                <div className='stores'>
                    {stores && stores.map((store) => {
                        return <img id="store" key={store._id} src={store.image} alt={store.email} height="200px" />
                    })}
                </div>
            </Link>
        </div>
    )
}

export default Stores
