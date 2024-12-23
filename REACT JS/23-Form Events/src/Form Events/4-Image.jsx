import { useEffect, useRef, useState } from "react"

export function Image(){

    // State variables to control different elements' visibility and behavior
    const [progress, setProgress] = useState('d-none');    // Manages the display of progress bar
    const [image, setImage] = useState('d-none');          // Manages the display of the image
    const [button, setButton] = useState('d-block');      // Manages the display of the 'Load Image' button
    const [progressValue, setProgressValue] = useState(0);// Tracks the current progress value (0 to 100)
    const [status, setStatus] = useState('');   // Tracks if the progress is paused
    
    // `useRef` stores mutable values that persist across renders without triggering re-renders
    let loading = useRef(null); // Reference to store the interval ID for progress loading
    let count = useRef(0);       // Counter to track progress incrementally

     // Function to simulate progress loading
    function LoadingProgress(){
        count.current = count.current + 1;  // Increment the progress value by 1
        setProgressValue(count.current);    // Update the progress value in the state
        if(count.current==100){             // If progress reaches 100%
            setProgress('d-none');          // Hide progress bar
            setImage('d-block');            // Display the image
        }
        
    }
     // Function to handle clicking the 'Load Image' button
    function handleLoadClick(){
        loading.current = setInterval(LoadingProgress,100); // Set interval to update progress every 100ms
        setButton('d-none');     // Hide the 'Load Image' button
        setProgress('d-block');  // Display the progress bar
    }

    // Function to pause progress loading
    function handlePauseClick(){
        clearInterval(loading.current);  // Clear the interval to pause loading
        setStatus('-paused');              // Update the status text to show that it's paused
    }
    function handlePlayClick(){
        loading.current = setInterval(LoadingProgress, 100);
        setStatus('');
    }

    // JSX for rendering the UI
    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <div>Load Image</div>
            <div className="w-25 text-center">
                <div className={button}> {/* Button section to load the image */}
                    <button onClick={handleLoadClick} className="btn btn-primary">Load Image</button>
                </div>
                <div className={progress}> {/* Progress bar section */}
                    <progress min="1" max="100" value={progressValue} className="w-90" style={{height:'20px'}} />
                    <p> {progressValue} % Completed {status} </p>
                    <div> {/* Play and Pause buttons */}
                        <button onClick={handlePlayClick} className="bi bi-play btn btn-success me-2"></button>
                        <button onClick={handlePauseClick} className="bi bi-pause btn btn-warning"></button>
                    </div>
                </div>
            
            <div className={image}>  {/* Image section to display once progress reaches 100% */}
                <img src="Amazon2.jpg" width="200" height="200"/> {/* Display image */}
            </div>
        </div>
    </div>
    )
}