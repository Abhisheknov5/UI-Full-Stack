/*
5. Null 
- It specifies that value is not defined into reference during run time.
- It is verified using "null" keyword.

Syntax:
		var price = prompt("Enter Price");

		{ (price===null) ? "Please Enter Price": price }

*/
export function Null(){

    var price = prompt("Enter a Price");

    return(
        <div className="container-fluid">
            <h2>Null</h2>
            Price : {(price===null)?"Please Enter Price":price}
        </div>
    )
}
// Op is = Price : 123
