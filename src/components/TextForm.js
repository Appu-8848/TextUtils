import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("Uppercase was clicked!" + text); //accessing text variable
    let newText=text.toUpperCase();
    setText(newText) //this function we can use to update text state
    //setText("You have clicked on handleUpClick");
    //As soon as I'll click here, It'll change my value of text,As I have made my state variable in such a way that whatever will come in setText it will change the value of text as same. 
    props.showAlert(" Converted to Uppercase!" , "success");
  }

   const handleLoClick=()=>{
    console.log("Lowercase was clicked!" + text); //accessing text variable
    let newText=text.toLowerCase();
    setText(newText) //this function we can use to update text state
    //setText("You have clicked on handleUpClick");
    //As soon as I'll click here, It'll change my value of text,As I have made my state variable in such a way that whatever will come in setText it will change the value of text as same. 
    props.showAlert(" Converted to Lowercase!" , "success");
  }

  const handleClear=()=>{
    console.log("Text cleared!" + text); //accessing text variable
    let newText= ' ';
    setText(newText) //this function we can use to update text state
    //setText("You have clicked on handleUpClick");
    //As soon as I'll click here, It'll change my value of text,As I have made my state variable in such a way that whatever will come in setText it will change the value of text as same. 
    props.showAlert(" Text Cleared!" , "success");
  }

  const handleCopy=()=>{
    console.log("Text Copied!"); //accessing text variable
    var text=document.getElementById("myBox");
    text.select();
    //text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text Copied!" , "success");
  }

  const handleExtraSpaces=()=>{ //use pf regex 
    console.log("Removed Extra Spaces!" + text); //accessing text variable
    let newText= text.split(/[ ]+/); //why I should keep space between these two square brackets
    setText(newText.join(" "))
    props.showAlert(" Removed Extra Spaces!" , "success");
  }

  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value); //text updation and this is an event handler
  }

  // const[text,setText]=useState('Enter text here') //these are state variables [text,setText] we use usestate hook for making them as state variables
  const[text,setText]=useState('')
  //text="new text"; //wrong way use function setText as given below-->
  // setText("new text");
  return (
    <>
<div className='container' style={{color: props.mode===`dark`?`white`:`#042743`}}>
  <h1>{props.heading}</h1>
  <div className="mb-3">
  {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode===`dark`?`grey`:`white`, color :props.mode===`dark`?`white`:`#042743`}} id="myBox" rows="8"></textarea> 
  {/* event handling done in above line  */}
  {/* we can use text not in heading but in value of textarea */}
  </div>
  <button className='btn btn-primary mx-1' onClick={handleUpClick}> Convert to Uppercase</button> 
  <button className='btn btn-primary mx-1' onClick={handleLoClick}> Convert to Lowercase</button> 
  <button className='btn btn-primary mx-1' onClick={handleClear}> Clear Text</button> 
  <button className='btn btn-primary mx-1' onClick={handleCopy}> Copy Text</button> 
  <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}> Remove Extra Spaces</button> 
  {/* function invokes when pressed button */}
</div>
<div className='container my-3' style={{color: props.mode===`dark`?`white`:`#042743`}}> 
{/* my-3 used as my-2,1,etc. (and y for y-axis which keeps margin in vertical way like distance in line or button above and below )for adjusting margins of container */}
{/* mx-3 used as my-2,1,etc. (and x for x-axis which keeps margin in horizontal way like distance in neighbouring words or buttons )for adjusting margins of container */}
{/* and for custom distance or margins we can write separate class in CSS */}
<h1>Your Text Summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008* text.split(" ").length} minutes to read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something to preview it here"}</p>
</div>
</> //we gonna return two things here so we had to write <>...</> (JSX fragment) as regular function returns only one thing
  )
}

//in textarea we listened 2 events onclick and onchange
//What are the caveats ? They are, class, class name.
//this.text typed components are class based components