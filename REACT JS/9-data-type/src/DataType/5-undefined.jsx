/*
4. Undefined:-

- It specifies that value is not defined into a reference during compile time.
- The keyword "undefined" is used to verify value in reference.

Syntax:
		var price;				// undefined

		{ (price) ? price: "Price Not Defined" }					=> Good Code

		{ (price===undefined) ? "Price Not Defined" : price }		=> Bad Code
*/
export function Undefined(){

    var price ;

    return(
        <div className="container-fluid">
            <h2>Undefined</h2>
            Price : {(price)?price:"Price not Defined"} <br />
            Price : {((price===undefined)?"Price not Defined ":price)}
        </div>
    )
}
// Op is = 
// Price : Price not Defined
// Price : Price not Defined