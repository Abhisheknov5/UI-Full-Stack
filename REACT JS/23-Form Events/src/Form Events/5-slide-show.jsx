 // Importing axios for making HTTP requests
import axios from "axios";
import { useState, useEffect, useRef } from "react"; // Importing hooks from React
export function SlideShows()
{
    // State for storing the current product data
    const [product, setProduct] =  useState({id:0, title:'', price:0, image:'', description:'', category:'', rating:{rate:0, count:0}});
   // State for displaying the status of the slideshow (Running or Paused)
    const [status, setStatus] = useState('');

    // useRef to track the current product ID and slideshow timer
    let ProductId = useRef(1);   // Stores the current product ID
    let Timer = useRef(null);   // Stores the interval timer for automatic slideshow

    // Function to fetch product data from the API by product ID
    function LoadData(id){
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>{
             // Set the fetched product data to the product state
            setProduct(res.data);
        })
    }
    // Function to start the slideshow and load products automatically every 5 seconds
    function handlePlayClick(){
        Timer.current = setInterval(LoadDataAuto, 5000);// Start the timer to automatically load data
        setStatus('Slide Show - Running'); // Update the status
    }
     // Function to pause the slideshow
    function handlePauseClick(){
        clearInterval(Timer.current);   // Clear the interval to stop the slideshow
        setStatus('Slide show - Paused');// Update the status
    }

     // Function to automatically load the next product in the slideshow
    function LoadDataAuto(){
        ProductId.current = ProductId.current + 1; // Increment product ID
        axios.get(`https://fakestoreapi.com/products/${ProductId.current}`)
        .then(res=>{
            setProduct(res.data);  // Update product state with the next product's data
        })
    }

     // Function to manually load the next product
    function handleNextClick(){
        ProductId.current = ProductId.current + 1; // Increment product ID
        LoadData(ProductId.current);              // Load the next product data
    }

    // Function to manually load the previous product
    function handlePrevClick(){
        ProductId.current = ProductId.current - 1;  // Decrement product ID
        LoadData(ProductId.current);                // Load the previous product data
    }

    // useEffect to load the first product when the component is mounted
    useEffect(()=>{
        LoadData(1); // Load the first product initially
    },[]);   // Empty dependency array means this effect runs only once when the component mounts
    return(
        <div className="container-fluid d-flex justify-content-center">
            <h2>Slide-show</h2>
            <div className="mt-4 card w-50">
                <div className="card-header text-center ">
                     {/* Display the title and status of the slideshow */}
                    <p className="card-title fw-bold"> {product.title}</p>
                    <p> {status}</p>

                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-1 d-flex flex-column align-items-center justify-content-center">
                            {/* Button to load the previous product */}
                            <button onClick={handlePrevClick} className="bi bi-chevron-left btn btn-dark"></button>
                        </div>
                        <div className="col-10 ">
                        {/* Display the product image */}
                        <img width="100%" src={product.image} height="400" />
                        </div>
                        <div className="col-1 d-flex flex-column align-items-center justify-content-center">
                        {/* Button to load the next product */}
                        <button onClick={handleNextClick} className="bi bi-chevron-right btn btn-dark"></button>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                     {/* Button to start the slideshow */}
                    <button onClick={handlePlayClick} className="bi bi-play btn btn-success me-2"></button>
                       {/* Button to pause the slideshow */}
                    <button onClick={handlePauseClick} className="bi bi-pause btn btn-warning"></button>
                </div>

            </div>

        </div>
    )
}