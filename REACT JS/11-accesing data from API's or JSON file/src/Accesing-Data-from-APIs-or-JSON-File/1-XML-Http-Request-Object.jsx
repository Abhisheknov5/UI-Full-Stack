/*
Accessing data from API or JSON file

- There are various techniques for accessing data from API or JSON file

    1. XMLHttpRequest  object
    2. fetch()  promise
    3. jQuery Ajax
    4. 3rd Party libraries


XMLHttpRequest:
- It is the native browser object used to make "Ajax" call.
- It is faster in rendering.
- It is not good in error handling.
- It requires lot of explicit techniques for translating the response.
- It not good in tracking the Ajax request cycle.
- It is default synchronous, you have to enable async explicitly.

Syntax:
     var  http = new XMLHttpRequest();
     
     http.open("methodType", "url", booleanAsync);
     http.send();

     http.onreadystatechange = function(){

     }

     http.readystate = 1, 2, 3, 4
     1=Initial
     2=Success  [request complete]
     3=Complete [response process complete]
     4=Ready  [response data is ready]

     http.responseText
     http.responseHTML
     http.responseXML

Ex:
1. Go to "public" folder and add a new file  "product.json"

{
    "title": "Apple iPhone 15 (Black, 128 GB)",
    "rating": {"rate":4.2, "ratings":12967, "reviews":905},
    "price": 82999,
    "offers": [
        "Bank Offer5% Cashback on Flipkart Axis Bank CardT&C",
        "Bank Offer₹4000 Off On HDFC Bank Credit Card EMI TransactionsT&C",
        "Bank Offer₹4000 Off On HDFC Bank Credit Card Non EMI TransactionsT&C",
        "Special PriceGet extra ₹4901 off (price inclusive of cashback/coupon)T&C"
    ],
    "image": "iphone-15.jpg"
}
*/
import { useState, useEffect } from "react";

// XMLhttpRequestObject component to fetch and display product details
export function XMLhttpRequestObject(){

     // useState to hold product details, initialized with default values
    const [product, setProduct] = useState({
        title:'',  // product title
        rating:{rate:0, ratings:0, reviews:0}, // rating object with default values
        price:0, // product price
        offers:[], // offers as an array
        image:'' // product image
    }); 

    // Function to load product data from a JSON file using XMLHttpRequest
    function LoadProduct(){
        var http = new XMLHttpRequest(); // Create a new XMLHttpRequest object
        http.open("get","Product.json",true);  // Open a GET request to 'Product.json'
        http.send(); // Send the request

        // Handle the response when readyState changes
        http.onreadystatechange = function(){
            if(http.readyState===4){ // Check if the request is complete
                setProduct(JSON.parse(http.responseText)); // Parse and set the product data in state
            }
        }

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