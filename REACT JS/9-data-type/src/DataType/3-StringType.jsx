/*
2. String Type:-

- JavaScript string can be defined in 3 ways
	a) Single Quote	'   '
	b) Double Quote 	" "
	c) Backtick		`  `
- Backtick allows embedded expression defined using "${ }"

Syntax:
		var path = "/products";
		var id = 2;

		<p> {`${path}/${id}`} </p>
		
		<p> {path}/{id} </p>
		
- You can use all your JavaScript string methods and properties to format and manipulate string dynamically.
				bold()
				italics()
				fontsize()				=> formats
				fontcolor()
				toUpperCase()
				toLowerCase()
				etc.. 

				length
				charAt()
				charCodeAt()			=> manipulations
				substring()
				substr()
				slice()
				etc..

- React handles injection attacks [XSS - Cross Site Scripting Attacks], hence several formats are not recommended to bind dynamically.
- React recommends to use style and class binding instead.

Ex:

export function DataBinding(){
    
    var msg = "Welcome to React";

    return(
        <div className="container-fluid">
            <h2>Data Types</h2>
            {msg.toUpperCase().slice(0,7)}
        </div>
    )
}

- You can use various JavaScript parsing methods to convert a numeric string value into number.

		a) parseInt()
		b) parseFloat()

	Syntax:
			parseInt("AB45");		// invalid NaN
			parseInt("45AB");		// valid 45

*/
// Define a functional component named 'String'
export function String1(){

    var path = "/products"; // Declare a variable 'path' and assign the string value "/products"
    var id = 1;            // Declare a variable 'id' and assign the value 1
    
    // Return the JSX structure for rendering the component
    return(
        <div className="container-fluid">
            <h2>String 1</h2>

            {/* Constructing and displaying a dynamic string by using template literals */}
            {/* This method embeds the 'path' and 'id' variables directly into the string */}
            path : {`${path}/${id}`} <br />

             {/* Another way of displaying the same path by using JSX string concatenation */}
            path : {path}/{id}
        </div>
    )
}
// Op is = path : /products/1
//         path : /products/1

export function String2(){

    var msg = "Welcome to React";

    return(
        <div className="container-fluid">
            <h2>String 2</h2>
            {msg.toUpperCase().slice(0,7)}
        </div>

    )
}
// Op is = WELCOME

export function String3(){

    return(
        <div className="conatainer-fluid">
            <h2>String 3</h2>
            { parseInt("46AB") + 40} <br />
            { parseInt("A46AB") + 40}
        </div>
    )
}

// Op is =
// 86
// NaN