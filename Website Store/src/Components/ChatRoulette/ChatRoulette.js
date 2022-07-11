import React from 'react'
import Header from '../Header/Header'
import "./ChatRoulette.css"
import PaginationFooter from '../StoreSearch/Components/PaginationFooter/PaginationFooter'
import ChatRouletteSearch from './Components/ChatRouletteSearch/ChatRouletteSearch'
import {ChatRouletteData} from "../../Data"

function ChatRoulette({address, setAddress}) {
  return (
    <>
        <Header address={address} setAddress={setAddress}/>
        <div className='ChatRouletteMainContainer'>
            <div className='ChatRouletteMainContainerHeader'>
                <div className='ChatRouletteMainContainerHeaderText'>
                    <div id="ChatRouletteMainContainerHeaderText">Roulette Collection<img id="headerRightArrow" src={require("./rightArrow.png")} alt="right arrow icon" height="20px"/></div>
                    <div id="ChatRouletteMainContainerHeaderSubText">My Profile / Roulette Collection</div>
                </div>
                <ChatRouletteSearch/>
            </div>
            <div className='ChatRouletteMainContent'>
                <div className='chatRouletteFilters'>
                    <div id='chatRouletteFiltersHeader'>Filters</div>
                    <hr id="chatRouletteHR"/>
                    <div id="chatRouletteFiltersOrderStatus">Order Status</div>
                    <input type="checkbox" id="OnTheWay" name="OnTheWay" value="OnTheWay" />
                    <label for="OnTheWay">On the Way</label><br></br>
                    <input type="checkbox" id="Delivered" name="Delivered" value="Delivered" />
                    <label for="Delivered">Delivered</label><br></br>
                    <input type="checkbox" id="Cancelled" name="Cancelled" value="Cancelled" />
                    <label for="Cancelled">Cancelled</label><br></br>
                    <hr id="chatRouletteHR"/>
                    <div id="chatRouletteFiltersOrderTime">Order Time</div>
                    <input type="checkbox" id="Last30Days" name="Last30Days" value="Last30Days" />
                    <label for="Last30Days">Last 30 Days</label><br></br>
                    <input type="checkbox" id="2022" name="2022" value="2022" />
                    <label for="2022">2022</label><br></br>
                    <input type="checkbox" id="2021" name="2021" value="2021" />
                    <label for="2021">2021</label><br></br>
                    <input type="checkbox" id="2020" name="2020" value="2020" />
                    <label for="2020">2020</label><br></br>
                </div>
                <div className='chatRouletteCoupons'>
                    {ChatRouletteData.map((roulette)=>{
                        return (
                        <>
                            <div className='roulette'>
                                <img key={roulette.id} id="rouletteImage" src={require("./" + roulette.src)} alt="roulette" height="200px"/>
                                <div className='rouletteDetails'>
                                    <div id="rouletteName">{roulette.name}</div>
                                    <div id="rouletteAddr">{roulette.addr}</div>
                                </div>
                            </div>
                        </>
                        )
                    })}
                </div>
            </div>
            <PaginationFooter/>
        </div>
    </>
  )
}

export default ChatRoulette