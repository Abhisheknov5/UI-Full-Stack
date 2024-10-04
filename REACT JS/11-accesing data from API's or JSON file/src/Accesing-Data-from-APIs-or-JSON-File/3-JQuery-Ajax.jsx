
/*
jQuery Ajax :-

- jQuery is a library for DOM manipulations and building interactions.
- jQuery UI is a component library for building interactive UI.
- jQuery provides Ajax methods to handle Asynchronous requests.

         $.getJSON()
         $.ajax()
           .ajaxStart()
           .ajaxEnd()
           .ajaxSuccess()
           .ajaxComplete()
           .ajaxError()

- jQuery Ajax returns data in JSON format. [Transforms according to response]
- Explicit parsing is not required.
- It is better in error handling when compared to fetch().
- It provides ajax life cycle methods that can track every phase of ajax action.

Syntax:
        $.ajax({
            method: " ",
            url : " ",
            data:  " ",
            success: " ",
            error:" "
        })
    - It have security issues.
- CORS may block the data.
- Can't handle multiple requests simulatneously.

1. Install jQuery library

        >npm  i  jquery --save

2. Import jquery library into "index.js"

         import  $  from "jquery";

Note: If you are configure any specific startup component then import jquery into the component.
   
       
3. Implement in any component

    import    $   from  "jquery";

    $.ajax({ options })

*/
import { useState, useEffect } from "react";
import $ from "jquery";

// XMLhttpRequestObject component to fetch and display product details
export function JQueryAjax(){

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
        // Use jQuery's `ajax` method to make an HTTP request to get the "product.json" file
        $.ajax({
            method: "get", // Set the HTTP method to GET to retrieve data
            url: "product.json", // URL of the file we want to fetch (product.json)
        
            // Function that runs on a successful response
            success: (response)=> {
                setProduct(response); // Pass the response data to the `setProduct` function
            },
              // Function that runs if there's an error during the request
            error: (ex)=> {
                console.log(ex); // Log the error to the console
            }
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