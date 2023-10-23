import React, { useState } from 'react'

export default function TextForm(props) {
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert('Copied To Clipboard',"Success");
  }



  const clear=()=>{
    let newText="";
    setText(newText);
    props.showAlert('Clear Text',"Suceess");
  }


  const handleDownClick =()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert('Converted Text To LowerCase',"Success");
  }

  const handleUpclick = ()=>{
    // console.log('uppercase was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText); 
    props.showAlert('Converted Text To UpperCase',"Success");
  }

  const handleOnChange=(event)=>{
    setText(event.target.value)
  }


  const[text,setText]=useState('');

const handleExtraSpaces=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra Spaces Removed","Success");
}

  return (
    <div  className='container my-5' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2 className='mb-2'>{props.heading}</h2>
      <div className='mb-5'>
        <label htmlfor="mybox" className='form-label' id="myBox"></label>
        <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id='myBox' rows="10"></textarea>
    </div>
     <div className='container my-5'>
      <button disabled={text.length===0} className='btn btn-success mx-1 my-1' onClick={handleUpclick}>Convert To Uppercase</button>
      <button disabled={text.length===0} className='btn btn-success mx-1 my-1'onClick={handleDownClick}>Convert To Lowercase</button>
      <button disabled={text.length===0} className='btn btn-success mx-1 my-1' onClick={handleCopy}>Copy text</button>

   <button disabled={text.length===0} className='btn btn-success mx-1 my-1'onClick={handleExtraSpaces}>Remove Extra Spaces</button>
   <button disabled={text.length===0} className='btn btn-success mx-1 my-1' onClick={clear}>Clear Text</button>
  </div>
    <div className='container mb-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h3>Your text summary</h3>
     <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words And {text.length} characters</p>
     <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes read</p>

    <h3>Preview</h3>
    <p>{text.length>0?text:'Nothing To Preview'}</p>
    </div>
    </div>
    
  )
}
