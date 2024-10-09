//  api.nasa.gov - API
//  Ex: Presenting in Table


import axios from "axios"; // Importing the axios library for making HTTP requests
import { useEffect, useState } from "react" // Importing necessary hooks from React

// Define the NasaAPI functional component
export function NasaAPI()
{
      // State to hold Mars rover photos, initialized as an object with a photos array
    const [mars, setMars] = useState({ photos: [] });

     // useEffect hook to perform side effects, specifically fetching data when the component mounts
    useEffect(()=>{
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=3XLYG4ILQbehkAQzxD8APH65RpfYWQbGRVflnnDz')
        .then((response)=>{
            setMars(response.data);   // Set the response data to the mars state
        })
    },[]);
    return(
        <div className="container-fluid">
            <h2>Mars Rover Photos</h2>
              {/* Create a table to display the Mars rover photos */}
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Preview</th>
                        <th>Camera</th>
                        <th>Rover</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // Map over the photos array and create a table row for each photo
                        mars.photos.map(photo=>
                            <tr key={photo.id}>
                                <td>{photo.id}</td>
                                <td>
                                     {/* Display a thumbnail image of the photo */}
                                    <img src={photo.img_src} width="100" height="100" />
                                </td>
                                <td>{photo.camera.full_name}</td>   {/* Display the camera's full name */}
                                <td>{photo.rover.name}</td>     
                                {/* Display the rover's name */}

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}