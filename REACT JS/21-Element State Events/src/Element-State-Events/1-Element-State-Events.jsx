import { useState } from "react";
{/*
Element State Events :-
- onFocus
- onBlur
- onChange
- onSelectStart
 */}
 export function ElementStateEvents() {

    const [msg, setMsg] = useState(''); // State to store the message based on input focus/blur

    // Function to handle the focus event and update the message
    function handleFocus(){
        setMsg('code in Block Letters');
    }

    // Function to handle the blur event and check if the input is empty
    function handleBlur(e){
        if(e.target.value.length==0){
            setMsg('Code Required'); // Show message if input is empty
        } else {
            setMsg(''); // Clear message if input is not empty
        } 
        
    }
    return(
        <div className="container-fluid m-2 p-4">
            <h2>Element State Events</h2>
            <dl>
                    {/* Input field with focus and blur event handlers */}
                <dt>IFSC Code</dt>
                <dd><input type="text" onFocus={handleFocus} onBlur={handleBlur} placeholder="Code in Block Letters"/></dd>
                  {/* Display message below the input field */}
                <dd className="text-warning">
                    {msg}
                </dd>
            </dl>
        </div>
    )
 }