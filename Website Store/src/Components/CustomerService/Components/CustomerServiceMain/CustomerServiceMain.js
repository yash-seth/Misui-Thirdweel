import React from 'react'
import "./CustomerServiceMain.css"
import {FAQTopicList,   CustomerServiceIssueQuestion} from "../../../../Data"

function CustomerServiceMain() {
  return (
    <>
        <div className='CustomerServiceMainContainer'>
            <div className='CustomerServiceMainContainerHeader'>
                <div id='CustomerServiceMainContainerHeaderText'>Customer Care</div>
                <div className='CustomerServiceMainContainerTopics'>
                    <div className='CustomerServiceMainContainerTopicList'>
                        <div id="CustomerServiceMainContainerTopicListHeader">Help Topics</div>
                        {FAQTopicList.map((topic)=>{
                            return (
                                <div><button id="FAQTopic">{topic.name}</button></div>
                            )
                        })}
                    </div>
                    <div className='CustomerServiceMainContainerHelpCenter'>
                        <div className='HelpCenterContainer'><div id="CustomerServiceIssuesHeaderText">Help Center</div></div>
                        <div className='CustomerServiceMainContainerIssues'>
                            <div id="CustomerServiceIssuesHeader">What issue are you facing?</div>
                            <div className='CustomerServiceMainContainerIssues'>
                                {CustomerServiceIssueQuestion.map((issue)=>{
                                    return(
                                        <>
                                            <div className='CustomerServiceMainContainerIssue'>
                                                <div className='issueDetails'>
                                                    <div id="issueQuestion">{issue.question}</div>
                                                    <div id="issueAnswer">{issue.answer}</div>
                                                </div>
                                                <button><img src={require("./rightArrow.png")} alt="right arrow icon"/></button>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CustomerServiceMain