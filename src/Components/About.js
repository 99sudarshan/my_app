// in CSS we write like- 'background-color' and in JavaScript and React js we write in Cammel case like-'backgroundColor'.

import React, { useState } from 'react'

export default function About(props) {
    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor:'white'
    })

    const [btnText, setbtnText] = useState('Enable Dark mode')

    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white',
               
            })
            setbtnText('Enable Dark mode');
        }
        else {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid #f2eaea'
            })
            setbtnText('Enable Light mode')
        }
    }
    return (
        <div className="container my-2" style={myStyle}>
            {/* <hr /> */}
            <h1 className="my-2">About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}> <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.

                        </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    
                        </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}><strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.

                        </div>
                </div>
            </div>
            </div>
            <div className=" conatainer my-3">
                <button type="button" onClick={toggleStyle} className="btn btn-primary ">{btnText}</button>
            </div>
        </div>
    )
}
