/*
(1) Number:
- It can be signed, unsigned, float, double, exponent, binary, hexa, octa, bigint etc.
- JSX requires various javascript methods to convert a number into string or other local formats.
					toString()
					toLocaleString()
Syntax:
		var price = 46000.00;

		{price.toLocaleString('en-in', {style:'currency', currency:'INR'}) }
		{price.toLocaleString()}
	
		var value = 98217769783n;		// BigInt
		
		{ value }
- You handle various operations on numbers using Math library or using arithematic operators.

Note: Data binding expression in JSX will not allow statements with in the context.

			Math.PI
			Math.random()
			Math.pow()
			Math.sqrt()
			Math.sin()
			Math.round()
			etc..
Syntax:
			var price = 45000.67897777;
			
			{ Math.round(price) }

*/

// Define a functional component named 'Number'
export function Number(){
    var price = 46000.00; // Declare a variable 'price' and assign it the value 46000.00
    
    // Return the JSX structure for rendering the component
    return(
        <div className="container-fluid">
            <h2>Numbers</h2>

             {/* 'toLocaleString' is used to format the number as currency in Indian Rupees (INR) */}
            Price: {price.toLocaleString('en-in',{style:'currency',currency:'INR'})}

        </div>
    )
}
// Op is  = Price: ₹46,000.00

export function Numbers(){
    var price = "A45000";
    return(
        <div className="container-fluid">
            <h2>NAN</h2>
            {
                (isNaN(price))?<span>Price is not a Number</span>:<span>{price}</span>
            }

        </div>
    )
}
// Op is = Price is not a Number