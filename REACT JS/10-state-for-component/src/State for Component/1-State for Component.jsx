/*
State for Component :-
						
- Web applications use "http & https" as protocols.
- Http & Https are state less protocols.
- They use the mechanism "Go-Get-Forget".

		GO		- Establish connection with server
		GET		- Get response from server
		Forget	- Clean up all details from server

- Stateless nature is good for memory management and security.
- However it is not great for contineous operations.
- Hence every web technology uses various state management techniques to remebers information between requests.
- State Management techniques are classified into 2 types
		a) Client Side State Management
		b) Server Side State Management

- Client Side uses client memory for storing data. [browser memory, HDD]
- Server Side uses server memory for storing data.

- React 17+ version introduced "useState()" hook to maintain a state for function components.
- Hook is a service which comprises of pre-defined business logic and data that you implement and use in your component.

useState() :-
- It is a react hook used to configure state for component.
- State is dynamic and mutable.
- It can handle data for your component and make it available accross requests.
- State configured for a component is not accessible to other component.
- State is memory allocated for component and it can handle any type of data
	a) Primitive
	b) Non Primitive

Syntax:
		const  [getter, setter] = useState();

FAQ's:
1. Why developers use "const" for configuring state?
A. State must be initialized. Hence const is good for state.
    State once initialized can't be assigned with new memory. Hence const is good.
    You can re-initialize the state to store new values.
    State should not allow shadowing.
    "Const"  is block scope.


2. How state can change if it is configure with "const"?
A. Const allows changing of values when memory is re-initialized for component.

Syntax:
		const [name, setName] = useState(defaultValue);

		const [name, setName] = useState('john');
	
		name = "David";			// invalid	- Assignment
		setName("David");			// valid - Initializing

Syntax:
	import  { useState }  from "react";

	const [name, setName] = useState('John');

	<p> { name }  </p>

*/

import { useState } from "react";

// Functional Component
export function StateforComponent(){

    // useState hook initializes the categories state
    const [ categories, setCategories ] = useState(["All","Electronics","Footwear"]);
    return(
        <div className="container-fluid">
            <h2>State for Component</h2>
            {
              // Iterates through categories array and renders each as a list item 
                categories.map(category=>
                    <li key={category}>{ category }</li>
                )
            }

        </div>
    )
}

// Op is = 
// State for Component
// All
// Electronics
// Footwear