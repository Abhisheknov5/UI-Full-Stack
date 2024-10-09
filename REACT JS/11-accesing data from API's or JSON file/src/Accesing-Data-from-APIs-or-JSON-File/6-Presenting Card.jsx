
import axios from "axios"; // Importing the axios library for making HTTP requests
import { useEffect, useState } from "react" // Importing necessary hooks from React

// Define the NasaAPI functional component
export function PresentingCard()
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
            <div className="d-flex flex-wrap">
                {
                    mars.photos.map(photo=>
                        <div key={photo.id} className="card p-2 m-2" style={{width:'200px'}}>
                          <a href={photo.src} target="_blank">
                          <img src={photo.img_src} className="card-img-top" height="200" />
                          </a>
                            <div className="card-header">
                                <h3>{photo.id}</h3>
                            </div>

                            <div className="card-body">
                                <dl>
                                    <dt>Camera</dt>
                                    <dd>{photo.camera.full_name}</dd>
                                    <dt>Rover</dt>
                                    <dt>{photo.rover.name}</dt>
                                </dl>

                            </div>

                        </div>
                        
                    )
                }

            </div>
             
        </div>
    )
}