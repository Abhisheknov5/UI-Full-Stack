/*
Regular Expression Type :-

- A regular expression is used to verify the format of value.
- It is built by using meta characters and quantifiers.
		<input type="text" pattern="">

- Regular expression is enclosed in "/ regExp /"
- To verify regular expression you need "match()" method.
- match() is boolean method that return true if value is matching with regExp.

Syntax:
		var  regExp = /\+91\d{10}/;
		var  value  = "9876543210";

		{ (value.match(regExp)) ? "Valid" : "Invalid" }

*/
export function RegularExpression(){

    var mobile = prompt("Enter Mobile Number");
    var regExp = /\+91\d{10}/;
    return(
        <div class="container-fluid">
            <h2>Regular Expression</h2>
            { (mobile.match(regExp))?"Verified":"Invalid Mobile +91 & 10 digits required"}

        </div>
    )
}
// Op is Numbe is Vrified

/*

Summary: Binding various Types

1. Primitive Types
2. Non Primitive Types

Note: Never use variables for storing data in a component.
	  If you store in variables they will not allow to modify the structure according state
	  & situation as they are "immutable" type.
*/