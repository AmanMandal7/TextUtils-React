import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked." + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase", "success");
    }

    const handleLoClick = ()=> {
        // console.log("Uppercase was clicked." + text)
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("Converted to lowerCase", "success");
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard", "success");
    }

    const handleClearClick = ()=> {
        
        let newText ='';
        setText(newText); 
        props.showAlert("Text Cleared!", "success");
    }
    

    const handleOnChange = (event)=> {
        // console.log("On Change.")
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "Enter the new text." //wrong way to change the state
    // setText("Enter the new text."); //correct way to change the state

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#27282a':'white', color: props.mode==='dark'?'white':'black'}} value={text} rows="12"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        </div>

        <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split("").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
