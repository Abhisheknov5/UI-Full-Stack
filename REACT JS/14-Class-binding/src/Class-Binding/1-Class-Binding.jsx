// Import useState hook to manage state
import { useState } from "react";
// Import the external CSS file
import "./style-demo.css";
{/*
Class Binding :-
- It is a technique of configuring CSS classes dynamically to JSX elements.
- You can define classes in a "css" file and dynamically apply to element using binding expression.

Syntax:
        <div className={ 'class1 class2  class3' }> </div>

- Classes are defined as string.
- Multiple classes are spearated with blank space.

Ex:
1. style-demo.css


.valid-style {
    border:1px solid green;
    box-shadow: 2px 2px 2px green;
    outline: none;
}
.invalid-style {
    border:1px solid red;
    box-shadow: 2px 2px 2px red;
    outline: none;
}

 */}
 export function ClassBinding(){

     // State to manage the CSS class for the input field (initially set to invalid-style)
    const [nameError, setNameError] = useState('invalid-style');

     // State to manage the visibility and style of the error message (initially shown and red)
    const [required, setRequired] = useState('d-block text-danger');

   // This function is triggered when the user types in the input field
   function handleNameChange(e){
          // If the input value is empty, apply error styles
       if(e.target.value== ""){
        setNameError('invalid-style');      // Apply red border to the input field
        setRequired('d-block text-danger'); // Show the error message with red text
           
       } else {
         // If the input field is not empty, apply valid styles
        setNameError('valid-style'); // Apply green border to the input field
        setRequired('d-none');      // Hide the error message
          
       }
   } 

   return(
       <div class="container-fluid"> {/* Bootstrap container class */}
           <h2>Style Binding</h2>
           <dl>
               <dt>User Name</dt>
                {/* Input field with dynamic class based on the nameError state */}
               <dd><input type="text" className={nameError} onChange={handleNameChange} /></dd>
               {/* Error message that is dynamically shown/hidden based on the required state */}
               <dd className={required}> Name Required</dd>
           </dl>

       </div>
   )
}