import React from 'react'
import "./Categories.css"
// import {CategoryData} from "../../Data"
import { useState, useEffect } from 'react'

function Categories() {
  const [categories, setCategoriess] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:8012/categories")
    .then(response => response.json())
    .then(data => setCategoriess(data))
  },[])
  return (
    <div className='categoriesContainer'>
        <div className='categoriesHeading'>
                <section id="categories-heading">Categories</section>
                <img id="arrow" src={require("./arrow.png")} alt="arrow" />
            </div>
        <div className='categories'>
        {categories.map((Category)=>{
              return <img id="category" key={Category.uuid} src={Category.src} alt={Category.alt} height="200px"/>
              })}
        </div>
    </div>
  )
}

export default Categories