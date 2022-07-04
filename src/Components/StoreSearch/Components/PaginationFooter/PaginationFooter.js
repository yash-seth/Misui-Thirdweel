import React from 'react'
import "./PaginationFooter.css"

function PaginationFooter() {
  return (
    <div className='PaginationFooterContainer'>
        <button style={{textDecoration: "none"}}><img id="left_arrow" src={require("./Right arrow.png")} alt="left arrow" height="15px"/></button>
        <button style={{textDecoration: "none"}}><div className='number'>1</div></button>
        <button style={{textDecoration: "none"}}><div className='number'>2</div></button>
        <button style={{textDecoration: "none"}}><div className='number'>3</div></button>
        <button style={{textDecoration: "none"}}><div className='number'>4</div></button>
        <button style={{textDecoration: "none"}}><img  id="right_arrow" src={require("./Right arrow.png")} alt="right arrow" height="15px"/></button>
    </div>
  )
}

export default PaginationFooter