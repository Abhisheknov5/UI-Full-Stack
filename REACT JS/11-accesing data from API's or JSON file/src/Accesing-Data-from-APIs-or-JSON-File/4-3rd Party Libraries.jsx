/*
3rd Party Libraries :-
(npmjs.com)
- axios
- whatwgFetch
- telerik methods

Axios:
- It is a promise based Ajax request for XMLHttpRequest
- It transforms data implicitly.
- It manages CORS & XSRF [Cross Side Request Forgery].
- It is more secured.
- It can configure multiple requests simultaneously.
- It is good in error handling when compared to jQuery Ajax.

Syntax:
     axios(
       {
         method: "" ,
         url:" ",
         data:""
    )

        (or)
    axios.get().then().catch()
    axios.post().then().catch()
    axios.put().then().catch()
    etc..

- Axios response is an object that comprises of various details like
        status        200, 302, 404..
        statusText    OK, Method, NotFound
        headers        content-type, request-type
        data         data returned by response url
        etc..

1. Install axios into project

    > npm  i  axios --save


2. import axios into component

    import  axios  from "axios"

3. Make ajax call using axios

    axios.get("url").then(()=>{}).catch(()=>{}).finally(()=>{})
*/

import { useState, useEffect } from "react";
import  axios  from "axios"

// XMLhttpRequestObject component to fetch and display product details
export function ThirdPartyLibraries(){

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
        // Make a GET request to fetch data from product.json
        axios.get("product.json")
         // Handle the response when the request is successful
        .then((response)=>{
            setProduct(response.data); // Set the product data using the response data
     // Handle errors that occur during the request
        }).catch((ex)=>{
            console.log(ex);
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