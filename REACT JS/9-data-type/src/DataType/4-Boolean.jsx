/*
3. Boolean:-

- React can't display a boolean value, it can just use the boolean value.
- It requires various operators and functions to verify the boolean &  value bind relative data.

Syntax:
		var stock = true;
		
		{ (stock===true) ? "Available": "Out of Stock" }
*/

export function Boolean(){

    var Stock = false;

    return(
        <div className="container-fluid">
            <h2>Boolean</h2>
            stock : {(Stock===true)?"Availabe":"Out of Stock"}
        </div>
    )
} 

// Op is = stock : Out of Stock