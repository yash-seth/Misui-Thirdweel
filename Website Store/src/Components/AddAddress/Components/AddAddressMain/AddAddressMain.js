import React from 'react'
import "./AddAddressMain.css"
import {AddAddressTopicList,   profileAddresses} from "../../../../Data"

function AddAddressMain() {
  return (
    <>
        <div className='AddAddressMainContainer'>
            <div className='AddAddressMainContainerHeader'>
                <div id='AddAddressMainContainerHeaderText'>Your Addresses</div>
                <div id='AddAddressMainContainerHeaderSubText'>My Profile / Manage Addresses</div>
                <div className='AddAddressMainContainerTopics'>
                    <div className='AddAddressMainContainerTopicList'>
                        {AddAddressTopicList.map((topic)=>{
                            return (
                                <div id="topic">
                                    <button><img src={require("./addIcon.png")} alt="add icon" height="16px"/></button>
                                    <button id="profileTopic">{topic.name}</button>
                                </div>
                            )
                        })}
                        <button><div id="signOut">Sign Out</div></button>
                    </div>
                    <div className='AddAddressMainContainerAdd'>
                        <div className='AddAddressContainer'>
                            <button><img src={require("./addIcon.png")} alt="add icon" height="16px"/></button>
                            <button><div id="AddAddressContainerHeaderText">Add a new address</div></button>
                        </div>
                        <div className='AddAddressMainContainerAddresses'>
                            <div id="CustomerServiceIssuesHeader">Saved Addresses</div>
                            <div className='AddAddressMainContainerAddresses'>
                                <div className='AddAddressMainContainerAddressList'>
                                {profileAddresses.map((addr)=>{
                                    return(
                                        <>
                                            <div className='AddAddressMainContainerAddress'>
                                                <div className='addressDetails'>
                                                    {addr.id===0 ? (<div id="defaultAddr">Default</div>) : (<span></span>)}
                                                    <div className="addrHeader">
                                                        <div id="addressName">{addr.name}</div>
                                                        <div id="addressContact">{addr.contact}</div>
                                                    </div>
                                                    <div id="addressDesc">{addr.addr}</div>
                                                </div>
                                                <button><img src={require("./3_dot_menu.png")} alt="3 dot menu icon"/></button>
                                            </div>
                                            <hr />
                                        </>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddAddressMain