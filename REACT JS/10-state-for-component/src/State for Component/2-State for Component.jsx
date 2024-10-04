/*
FAQ: How to configure actions on component mount?
Ans:  
 - Mount is a phase for every component, which is similar to load.
 - Initially page is loaded and components are mounted.
 - In React if you want any action to perform at the time of mounting a component, then
   you have to define by using a hook called "useEffect()".

Syntax:
        useEffect(()=>{

        },[dependencies]);


        useEffect(()=>{},[]);

- Every component mount function is called once and executes again when dependency changes.
- Component can have multiple dependencies for mounting.
- If there are no dependencies then you have to represent with empty "[ ]".
- If mount phase is not defined and you call any function inside component directly then it re-renders the component.
- useEffect() hook avoids re-rendering and controls re-rendering using dependencies.
*/
import { useState, useEffect } from "react"

// Function component that manages state and side effects
export function StateforComponents(){
    
    // Declare a state variable 'userName' initialized with an empty string.
    // 'setUserName' is used to update 'userName' later.
    const [userName, setUserName] = useState('');

    useEffect(()=>{
        setUserName('Abhishek');  // Set 'userName' to 'Abhishek' after the component mounts.

    },[]);  // Empty array as second argument ensures effect runs only once on mount.
    return(
        <div className="container-fluid">
            <h2>StateforComponent</h2>
            <p>Hello ! {userName}</p> {/* Display the message with 'userName' which will be 'Abhishek' after mounting */}
        </div>
    )
}

// Op is = 
// Hello ! Abhishek