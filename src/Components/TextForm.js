//7) Understanding State and Handling Events in React: state means--> situation;
//8) Adding more logics to TextUtils:

import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    // text="new text"; --> wrong way to change the state
    // setText=("new text"); --> correct way to change the state

    function handleUpClick() {
        console.log('event fired for :', text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', 'success');
    };

    const handleLowerClick=()=> {
        // console.log('event fired for :',text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase', 'success');
    };

    const handleCopy = (e) => {
        console.log(e);
    
        let text = document.getElementById('myBox');
        text.select();
        document.execCommand('copy');
         props.showAlert('Copied to Clipboard', 'success');
        // or, navigator.clipboard.writeText(text.value);
    }
    const handleClear = () => {
        setText('');
    }
    const handleExSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }

    function handleChange(e) {
        // console.log('on change');      
        setText(e.target.value);
    };
    return (
    <>
        <div className="container"style={{color:props.mode==='dark'?'white':'black'}} >
            <h1>{props.heading}</h1>
            <div  className="mb-3">
                <textarea className="form-control" id="myBox" placeholder="Enter text here" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#151313':'white'}}value={text} onChange={handleChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert Lowercase</button>
            <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary" onClick={handleExSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your text Summary</h2>
                <p>{text.split(' ').length} Words and {text.length} Characters</p>
                <p>{0.008*text.split(' ').length} Minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter text above to Preview'}</p>
        </div>
    </>
    )
}

