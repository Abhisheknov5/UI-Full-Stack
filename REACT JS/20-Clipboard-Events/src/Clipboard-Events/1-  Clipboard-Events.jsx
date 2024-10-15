import { useState } from "react";
{/*
Clipboard Events :-
- onCut
- onCopy
- onPaste
 */}
 
 export function ClipboardEvents(){
    const [msg, setMsg] = useState('');// State to store the message when text is copied

     // Function to handle the copy event and update the message
    function handleCopy(){
        setMsg('Copied to Clipboard');
    }

    return(
        <div className="container-fluid m-2 p-4">
            <h2>Clipboard Events</h2>
            <dl>
                {/* Input field with copy functionality */}
                <dt>Account Number</dt>
                <dd><input type="text" onCopy={handleCopy}/></dd>
                <dd>{msg}</dd>

                  {/* Input field with paste functionality disabled */}
                <dt>Verify Account</dt>
                <dd><input type="text" onPaste={ document.onpaste = () => {return false}}/></dd>
            </dl>

        </div>
    )
 }