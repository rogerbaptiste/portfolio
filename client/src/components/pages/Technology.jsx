import React from "react"
import { Heading } from "../common/Heading"
import { technology } from "../data/dummydata"

export const Technology = () => {
    return (
    
        <div id='technology' className="section row valign-wrapper">
    
            <div id='techimgs' className="">
            <Heading title='Technology'/>
            <p className="valign-wrapper"> Some of the technology that powers my projects</p>
                <div className='techrow row col s14 valign-wrapper'>
                    <div className='techimg'>
                        <img className='techimg' src='./images/htmlcssjs.png' alt='logos' />
                    </div>
                    <div className='techimg'>
                        <img className='techimg' src='./images/python.png' alt='python' />
                    </div>
                    <div className='techimg'>
                        <img className='techimg' src='./images/mysql.png' alt='mysql' />
                    </div>
                    <div className='techimg'>
                        <img className='techimg' src='./images/nodejs.png' alt='node' />
                    </div>
                    {/* <div className='col s3 valign'>
                        <img className='techimg' src='./images/chakraui.png' alt='chakra' />
                    </div> */}
                </div>
                <div className='techrow row container col s12 valign-wrapper'>
                    <div className='techimg'>
                        <img className='techimg' src='./images/swift.png' alt='swift' />
                    </div>
                    {/* <div className='col s3 valign'>
                        <img className='techimg' src='./images/redux.png' alt='redux' />
                    </div> */}
                    <div className='techimg'>
                        <img className='techimg' src='./images/django.png' alt='django' />
                    </div>
                    <div className='techimg'>
                        <img className='techimg' src='./images/reactjs.png' alt='react' />
                    </div>
                    <div className='techimg'>
                        <img className='techimg' src='./images/socket.png' alt='socket' />
                    </div>
                    <div className='techimg'>
                        <img className='techimg' src='./images/bootstrap.png' alt='bootstrap' />
                    </div>
                </div>
            </div>
        </div>
    )
}