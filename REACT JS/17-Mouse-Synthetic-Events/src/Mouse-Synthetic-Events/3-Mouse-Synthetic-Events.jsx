

export function MouseSyntheticEvent_3(){

    // Function to handle mouse over event
    function handleMouseOver(e){
        // Attempt to stop the scrolling of the marquee
        e.target.stop();  // This will not work as `stop` is not a function on the target
    }
   // Function to handle mouse out event
    function handleMouseOut(e){
        // Attempt to start the scrolling of the marquee
        e.target.start(); // This will not work as `start` is not a function on the target
    }

    return (
        <div className="container-fluid m-2 p-4">
            {/* Marquee element that scrolls the images horizontally */}
            <marquee 
                scrollamount="20" // Speed of the scrolling
                onMouseOver={handleMouseOver} // Event triggered when mouse hovers over the marquee
                onMouseOut={handleMouseOut} // Event triggered when mouse leaves the marquee
                style={{ padding: '100px' }} // Adding padding to the marquee
            >
                {/* Images to be displayed within the marquee */}
                <img src="m1.jpg" width="200" height="200" alt="Image 1" />
                <img src="m2.jpg" width="200" height="200" alt="Image 2" />
                <img src="m3.jpg" width="200" height="200" alt="Image 3" />
                <img src="m4.jpg" width="200" height="200" alt="Image 4" />
            </marquee>
        </div>
    );
}