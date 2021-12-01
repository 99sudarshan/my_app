// in CSS we write like- 'background-color' and in JavaScript and React js we write in Cammel case like-'backgroundColor'.

import React from 'react';
import '../index.css';

export default function About(props) {
    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor:'white'
    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'rgb(43 56 118)' : 'white',
    }

    /* const [btnText, setbtnText] = useState('Enable Dark mode')

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
     }*/
    
    return (
        <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white':'black',backgroundColor:props.mode==='dark'? 'rgb(1 3 32)':'white'}}>
            {/* <hr /> */}
            <h1 className="my-2">About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <strong>Analyze Your text</strong> 
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>TextUtils gives you a way to analyze your text quickly and efficently. Be it word count, character count or 
                        </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                 <strong>Free to use</strong>   
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>TextUtils is a freee character counter tool that provides instant character count and word coutn statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
    
                        </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                   <strong>Browser Compatible</strong> 
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count in facebook, blog, books, excel document, pdf document, essays, etc.

                        </div>
                </div>
            </div>
            </div>
            {/* <div className=" conatainer my-3">
                <button type="button" onClick={toggleStyle} className="btn btn-primary ">{btnText}</button>
            </div> */}
        </div>
    )
}
