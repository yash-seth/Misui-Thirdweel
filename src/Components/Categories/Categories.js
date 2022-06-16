import React from 'react'
import "./Categories.css"

function Categories() {
  return (
    <div className='categoriesContainer'>
        <div className='categoriesHeading'>
                <section id="categories-heading">Categories</section>
                <img id="arrow" src={require("./arrow.png")} alt="arrow" />
            </div>
        <div className='categories'>
                <img id="category" src={require("./category1.png")} alt="category" />
                <img id="category" src={require("./category2.png")} alt="category" />
                <img id="category" src={require("./category3.png")} alt="category" />
                <img id="category" src={require("./category1.png")} alt="category" />
                <img id="category" src={require("./category2.png")} alt="category" />
                <img id="category" src={require("./category3.png")} alt="category" />
                <img id="category" src={require("./category1.png")} alt="category" />
                <img id="category" src={require("./category2.png")} alt="category" />
                <img id="category" src={require("./category3.png")} alt="category" />
                <img id="category" src={require("./category1.png")} alt="category" />
                <img id="category" src={require("./category2.png")} alt="category" />
                <img id="category" src={require("./category3.png")} alt="category" />
        </div>
    </div>
  )
}

export default Categories