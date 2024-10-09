import { useEffect, useState } from "react";
import  axios  from "axios";
import "./Mouse-Synthetic-Events.css";


{/*
Mouse Synthetic Events:

- onMouseOver: Triggered when the mouse pointer is over an element.
- onMouseOut: Triggered when the mouse pointer leaves an element.
- onMouseDown: Triggered when the mouse button is pressed down on an element.
- onMouseUp: Triggered when the mouse button is released over an element.
- onMouseMove: Triggered when the mouse pointer moves within an element.

Mouse-Synthetic-Events.css
 */}
export function MouseSyntheticEvent_1(){

     // State to hold mobile images fetched from the JSON file
    const[mobiles, setMobiles] = useState([]);

      // State to hold the source of the image currently hovered over
    const [targetImg, setTargetImg] = useState('');

    // Function to load mobile images from the Mobile.json file
    function LoadMobiles(){
        axios.get('Mobile.json') // Make a GET request to fetch the mobile data

        .then((response)=>{
            // Update the 'mobiles' state with the response data
            setMobiles(response.data);
        })
    }
     // useEffect hook to load mobiles when the component mounts
    useEffect(()=>{
        LoadMobiles(); // Call the LoadMobiles function
    },[]); // Empty dependency array means this effect runs once on mount

    // Function to handle mouse over event
    function handleMouseOver(e){
          // Set the targetImg state to the source of the hovered image
        setTargetImg(e.target.src);

    }

    return(
        <div className="container-fluid m-2 p-4">
            <h2>MouseSyntheticEvent_1</h2>
            <section className="mt-4 row">
                <nav className="col-1">
                    {
                         // Map through the 'mobiles' state to render each mobile image
                        mobiles.map(mobile=>
                            <div key={mobile.img_src}>
                                  {/* Attach the onMouseOver event handler to each image */}
                                <img
                                onMouseOver={handleMouseOver}
                                src={mobile.img_src}
                                width="100"
                                height="60"
                                />
                            </div>
                        )
                    }
                </nav>
                <main className="col-10">
                     {/* Display the currently hovered image in a larger size */}
                    <img
                     width="300" 
                     src={targetImg} 
                     height="500"  
                     />

                </main>

            </section>

        </div>
    )
}