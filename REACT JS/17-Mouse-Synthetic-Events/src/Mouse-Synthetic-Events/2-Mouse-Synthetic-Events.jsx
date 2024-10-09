import { useEffect, useState } from "react";
import  axios  from "axios";

export function MouseSyntheticEvent_2(){

    // State to hold the style object for positioning the image
    const [styleObj, setStyleObj] = useState({position:'absolute', top:' ', left:''});

     // Function to update the position of the image based on mouse movement
    function GetPosition(e){
          // Update the style object with the current mouse position
        setStyleObj({
            position:'absolute',   // Set position to absolute for free movement
            top: e.clientY + 'px', // Set the top position to the vertical mouse position
            left: e.clientX + 'px' // Set the left position to the horizontal mouse position
        })
        

    }

    return(
        <div onMouseMove={GetPosition} className="container-fluid m-2 p-4">
            <h2>MouseSyntheticEvent_2</h2>
            <div style={{height:'1000px'}}>
                <p>Move Mouse Pointer to test</p>

            </div>
            <img style={styleObj} width="50" height="50" src="Afternoon.gif"  />

            

        </div>
    )
}