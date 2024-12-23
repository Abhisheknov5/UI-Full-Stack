import { useEffect, useRef, useState } from "react"
export function SetIntervalClearInterval(){

    const [time, setTime] = useState();  // Initialize state to store the current time

     // Function to update the time
    function Clock(){
        var now = new Date();             // Get the current date and time
        setTime(now.toLocaleTimeString()); // Update the time state with the current time in a readable format
    }

    // This runs when the component is mounted
    useEffect(()=>{
       setInterval(Clock, 1000);  // Set an interval to run the Clock function every 1 second (1000 ms)
    },[])  // Empty dependency array ensures this effect runs only once, when the component is mounted


    return(

        <div className="container">
            <h2>SetIntervalClearInterval</h2>
            <p className="mt-4 text-center"> {time} </p> {/* Display the current time in the UI */}
        </div>
    )
}