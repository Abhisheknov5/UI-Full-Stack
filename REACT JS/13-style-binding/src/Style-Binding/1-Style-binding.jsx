// Import useState hook to manage state
import { useState } from "react"

{/*
Style Binding :-
- It is the process of binding style attributes to JSX element dynamically.
- Element can change its styles using  a style object.
- Style object is a key-value collection.
- Key refers to style attribute in camel case.
- Value is a string.

Syntax:
    <div  style={ {key:value} }>  </div>

    <div style={ {width: '200px', fontSize: '20px' } }>  </div>

    CSS Attribute                React Attribute
    -----------------------------------------------------------
    color                    color
    width                    width
    font-size                    fontSize
    text-align                    textAlign
    background-color            backgroundColor
    font-weight                fontWeight
    etc...

 */}
// This component handles style binding based on user input
 export function StyleBinding(){

     // State to manage the visibility and color of the error message (initially visible and red)
    const [nameError, setNameError] = useState({display:'block', color:'red'});

     // State to manage the border color of the input field (initially red border)
    const [elementColor, setElementColor] = useState({border:'1px solid red'});

      // This function is called when the user types in the input field
    function handleNameChange(e){
           // If the input value is empty, show the error and set the border to red
        if(e.target.value==""){
            setNameError({display:'block', color: 'red'}); // Display the error message in red
            setElementColor({border:'1px solid red'})      // Set border of input to red
        } else {
            // If the input has a value, hide the error and set the border to green
            setNameError({display:'none'}); // Hide the error message
            setElementColor({border:'1px solid green'}) // Set border of input to green
        }
    } 

    return(
        <div class="container-fluid">
            <h2>Style Binding</h2>
            <dl>
                <dt>User Name</dt>
                  {/* Input field with dynamic border color based on the elementColor state */}
                <dd><input type="text" style={elementColor} onChange={handleNameChange} /></dd>
                  {/* Error message with dynamic visibility and color based on the nameError state */}
                <dd style={nameError}> Name Required</dd>
            </dl>

        </div>
    )
 }