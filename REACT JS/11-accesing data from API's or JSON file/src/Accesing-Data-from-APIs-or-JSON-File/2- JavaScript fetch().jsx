/*

(2) JavaScript fetch() :-
- Fetch is a "Promise".
- JavaScript introduced promise from version ES5+
- Promise is "async".
- Promise are predictable in nature. They return "resolve(), reject()" on actions.
- Better in error handling when compared to XMLHttpRequest object.
- fetch() is a "window" method that implicitly uses XMLHttpRequest.

Syntax:
    fetch("url").then(()=> onsuccess).catch(()=> onfailure).finally(()=> always);

- It is not good in security. CORS issues. [Cross Origin Resource Sharing]
- It returns data in binary format.
- You have to explicitly parse the data.
- It is not accurate in handling issues.

*/
import { useState, useEffect } from "react";

// XMLhttpRequestObject component to fetch and display product details
export function JavaScriptFetch(){

     // useState to hold product details, initialized with default values
    const [product, setProduct] = useState({
        title:'',  // product title
        rating:{rate:0, ratings:0, reviews:0}, // rating object with default values
        price:0, // product price
        offers:[], // offers as an array
        image:'' // product image
    }); 

    // Function to load product data from a JSON file
    function LoadProduct(){
        
          // Use the fetch API to retrieve the product data from the "product.json" file
        fetch("product.json")

         // First, handle the response by converting it to JSON format
        .then((Response)=>{
            return Response.json();
        })
        // After converting to JSON, set the product data
        .then((product)=>{
            setProduct(product);  // Call a function to use the product data
        }) 
         // Catch any error that occurs during the fetch or JSON conversion
        .catch((error)=>{
            console.log(error);
        })
         // The 'finally' block runs after the promise is settled, regardless of success or failure
        .finally(()=>{
            console.log('Requested Completed'); // Log that the request is complete
        })

    }
  // useEffect to trigger LoadProduct function when the component is first rendered
    useEffect(()=>{
        LoadProduct();

    },[]);

    return(
       <div className="container-fluid">
        <div className="mt-4 row">
            <div className="col-3">  {/* Display product image */}
                <img src={product.image} width="100%" />

            </div>
                {/* Display product details */}
            <div className="col-9">
                    {/* Product title */}
                <div className="h3"> {product.title} </div>
                
                 {/* Product rating and review count */}
                <div>
                    <span className="badge bg-success text-white p-2">{ product.rating.rate} <span className="bi bi-star-fill"></span></span>{/* Display rating with a star icon */}
                    <span className="ms-3 fw-bold text-secondary"> {product.rating.ratings.toLocaleString()} Ratings & {product.rating.reviews} Reviews </span> {/* Format rating count with commas */}
                </div>
                {/* Product price */}
                <div className="mt-3">
                    <div className="h2"> {product.price.toLocaleString('en-in', {style:'currency', currency:'INR'})}</div> {/* Format price as Indian Rupees */}
                </div>
                {/* Available offers section */}
                <div className="mt-3">
                    <div className="h5">Avaialble Offers</div>
                    <ul className="list-unstyled">
                        {
                             // Iterate through the offers array and display each offer
                            product.offers.map(offer=>
                                <li key={offer} className="bi text-success bi-tag-fill my-2"><span className="ms-2 text-secondary">{offer}</span></li> 
                            )
                        }

                    </ul>

                </div>
            </div>
        </div>
       </div>
    )
}