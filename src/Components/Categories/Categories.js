import React from 'react'
import "./Categories.css"
import {CategoryData} from "../../Data"

function Categories() {
  return (
    <div className='categoriesContainer'>
        <div className='categoriesHeading'>
                <section id="categories-heading">Categories</section>
                <img id="arrow" src={require("./arrow.png")} alt="arrow" />
            </div>
        <div className='categories'>
        {CategoryData.map((Category)=>{
              return <img id="category" key={Category.id} src={require("./"+Category.src)} alt={Category.alt}/>
              })}
        </div>
    </div>
  )
}

export default Categories