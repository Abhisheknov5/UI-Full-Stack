/*

Object Type :-

- Object is collection of Key & Value references.
- Key is string type.
- Object can be any type.
- You can present the value of object with reference of Key or using destructuring technique of ES5+ version.

Syntax:
		var obj = {
			"Key": value
			}

		obj.Key
		obj["Key"]

*/
export function Object(){

  // Define an object 'Product' with properties: Name, Price, and Stock
    var Product = {
        Name: "Samsung TV",
        Price: 45600.44,
        Stock: true
    }
  // JSX return statement to render the component
    return(
        <div className="container-fluid">
            <h2>Object</h2>
            <dl>
                <dt>Name</dt>
                <dd>{Product.Name}</dd>        {/* Display the value of Product's Name property */}
                <dd>{Product["Price"]}</dd>    {/* Display the value of Product's Price using bracket notation */}
                <dt>Stock</dt>
                <dd>{Product.Stock===true?"Available":"Out of Stock"}</dd>   {/* Display 'Available' if Stock is true, otherwise 'Out of Stock' */}
            </dl>

        </div>
    )
}
// Op is = 
// Name
// Samsung TV
// 45600.44
// Stock
// Available



// export function DataBinding(){
    
//     var product = {
//        Name: "Samsung TV",
//        Price: 45600.44,
//        Stock: true
//     }

//    return(
//        <div className="container-fluid">
//            <h2>Data Types</h2>
//            <ol>
//                {
//                    Object.keys(product).map(key=> <li key={key}> {key} : {product[key]} </li>)
//                }
//            </ol>
//        </div>
//    )
// }
//Op is=    
// 1 Name: Samsung Tv
// 2 Price: 45600.44
// 3 Stock
