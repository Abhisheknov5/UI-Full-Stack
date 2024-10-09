// Importing React and usestate hook
import { useState } from "react"
{/*
One Way Binding:-
- It is the process of accessign data from model and updating to UI.
- React implicitly supports one-way binding.
- It is faster in rendering UI, as it is un-directional.
- It is safe for data, as it will not allow any modification in data dynamically.    
*/}



// Defining the OneWayBinding Functional Component
export function OneWayBinding(){
      // Declare a state variable 'userName' with initial value 'Abhishek'
    const [userName, setUserName] = useState('Abhishek');
    return(
        <div className="container-fluid">  {/* Container for styling */}
            <h3>One Way Binding</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" value={userName} /></dd> {/* Setting input value to userName from state */}
            </dl>
            <p>Hello! {userName}</p> {/* Displaying the user name */}

        </div>
    )
}