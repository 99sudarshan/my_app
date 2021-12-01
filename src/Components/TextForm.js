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
        let text = document.getElementById('myBox');
        text.select();
        document.execCommand('copy');
        // or, navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();  // inbuilt function to remove select ranges
        props.showAlert('Copied to Clipboard!', 'success');
        
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
            <h2 className="mb-3">{props.heading}</h2>
            <div  className="mb-3">
                <textarea className="form-control" id="myBox" placeholder="Enter text here" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#151313':'white'}}value={text} onChange={handleChange} rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleUpClick}>Convert Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleExSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                <p>{0.008*text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Nothing to Preview!'}</p>
        </div>
    </>
    )
}

 