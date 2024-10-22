import { useRef, useState } from "react"
{/*

Use Reference Hook :-

- React 18x introduces a new hook  "useRef()".
- It is used to configure a memory reference, where you can store any function or value and use in the process.
- The reference creates a thread for managing your values and function in process.

Syntax:
        let  refName = useRef(null);

- You can assign any value or function using "current" property, that refers to current thread.

Syntax:
        refName.current = value / function(){ }

- The reference values are not for rendering, they are for internal process.

*/}
export function TimerDemo(){

     // useState hook to manage the current volume percentage (vol) in the component's state
    const [vol, setVol] = useState(0);
    // useRef hook to store a reference to the timeout for the second volume change
    let vol2ref = useRef(null);

     // Function to set volume to 10%
    function v1(){
        setVol(10);
    }
     // Function to set volume to 20%
    function v2(){
        setVol(20);
    }
     // Function to set volume to 30%
    function v3(){
        setVol(30);
    }

    // Function to handle volume increase in steps with delays
    function handleVolumeUp(){
        // Set volume to 10% after 5 seconds
       setTimeout(v1, 5000);
        // Store the reference to the timeout for the 20% volume change (after 8 seconds)
       vol2ref.current = setTimeout(v2, 8000);
        // Set volume to 30% after 12 seconds
       setTimeout(v3, 12000);
    }

    // Function to cancel the second volume change (20%)
    function handleCancel(){
         // Cancel the timeout for setting volume to 20% if it's still pending
        clearTimeout(vol2ref.current);
    }
    return(
        <div className="container">
            <h3>Timer Demo</h3>
             {/* Button to start volume increase process */}
            <button onClick={handleVolumeUp} className="bi bi-volume-up btn btn-primary me-3"> </button>
              {/* Button to cancel only the 20% volume change */}
            <button onClick={handleCancel} className="btn btn-primary"> Cancel 20% </button>
            {/* Display the current volume */}
            <p>
                Volume Increase by {vol} %
            </p>
        </div>
    )
 }