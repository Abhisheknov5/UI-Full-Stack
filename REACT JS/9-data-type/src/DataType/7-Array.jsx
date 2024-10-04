/*
Array
- Array binding requires various array methods.

Methods for Reading:
	
		map()
		forEach()
		find()
		filter()
		slice()

Syntax:
		collection.map(function(item){ 
			// present item
		 })

JSX:
		collection.map(item => <element> </element>)

Note: JSX requires a unique reference "key" for every repeating element.

		collection.map(item=> <li key={item}> {item} </li>)
*/


// Define and export the Array component
export function Array(){

     // Array of categories
    var categories = ["All", "Electronics", "Fashion", "Footwear"];
    return(
        <div className="container-fluid">
            <h2>Array</h2>
            {/* Render an ordered list of categories */}

            <ol>                     
                {
                      /* Map over the categories array to create list items*/ 
                    categories.map(category=><li key={category}>{category}</li>)
                }
            </ol>

            {  /* Render a select dropdown with categories as options */}
            <select>   
                {
                    // Map over the categories array to create option elements
                    categories.map(category=><option key={category} value={category} > {category} </option>)
                }
            </select>

            <br /> 

            {/* Render an unordered list with checkboxes for each category */}
            <ul className="list-unstyled"> 
                {
                    // Map over the categories array to create list items with checkboxes
                    categories.map(category=> <li key={category}> <input type="checkbox"/> <label>{category}</label> </li>)
                }

            </ul>

            <br />
            {/* Render a button containing links for each category */}
            <nav className="p-2 border d-flex justify-content-between border-1 border-dark">  
                {
                     // Map over the categories array to create link elements inside the button
                    categories.map(category=> <a className="btn btn-dark" key={category} href="#"> {category} </a>)
                    
                }

            </nav>
        </div> 
    )
}
// Op is :-
// All
// Electronics
// Fashion
// Footwear