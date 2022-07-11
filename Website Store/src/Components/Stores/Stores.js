import React, { useEffect, useState } from 'react'
import "./Stores.css"
import { StoreData } from "../../Data"
import { Link } from "react-router-dom";
import { websiteStoreUrl } from '../../api/urls';
import axios from 'axios'

function Stores() {

    const [stores, setStores] = useState([])

    useEffect(() => {
        axios
          .get(`${websiteStoreUrl}/nearbyStores`)
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
            <Link to="/storeProfile" style={{ textDecoration: "none", color: "inherit" }}>
                <div className='stores'>
                    {stores.map((store) => {
                        return <img id="store" key={store.uuid} src={store.src} alt={store.alt} height="200px"/>
                    })}
                </div>
            </Link>
        </div>
    )
}

export default Stores
