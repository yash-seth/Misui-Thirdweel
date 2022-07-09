import React from 'react'
import "./FAQMain.css"
import {FAQTopicList, FAQQuestionsList} from "../../../../Data"

function FAQMain() {
  return (
    <>
        <div className='FAQMainContainer'>
            <div className='FAQMainContainerHeader'>
                <div id='FAQMainContainerHeaderText'>More FAQs</div>
                <div className='FAQMainContainerTopics'>
                    <div className='FAQMainContainerTopicList'>
                        <div id="FAQMainContainerTopicListHeader">Topics</div>
                        {FAQTopicList.map((topic)=>{
                            return (
                                <div><button id="FAQTopic">{topic.name}</button></div>
                            )
                        })}
                    </div>
                    <div className='FAQMainContainerFAQList'>
                        <div id="FAQMainContainerFAQListHeader">FAQ Questions</div>
                        <div className='FAQMainContainerFAQListFAQ'>
                            {FAQQuestionsList.map((ques)=>{
                                return(
                                    <>
                                        <div className="FAQQuestionContainer">
                                            <div id="FAQQuestion">Q. {ques.question}</div>
                                            <div id="FAQAnswer">{ques.answer}</div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FAQMain