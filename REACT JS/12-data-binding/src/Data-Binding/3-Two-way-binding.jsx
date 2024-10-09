// Importing React and usestate hook
import { useState } from "react"

{/*
Two Way Binding:-
- It is a data binding technique with bi-directional flow.
- You can access the data from Model and update to UI.
- You can identify the changes the UI and update back to Model.
- Model is considered as "Single-Source-of-Truth".

         previousValue == currentValue  => No change detected
         previousVlaue !== currentValue => Change detected

  Model comprises of data tracking before and after change. As it tracks the changes, it comprises of "Truth" that confirm change and updated.

- React will not support "Two-Way" data binding implicitly.
- You have to implement explicitly using event binding technique.
 - React two way binding can be handled only by using "onChange" event.

Syntax:
      function handleNameChange()
      {
      }

      <input type="text"  onChange={handNameChange}  />

- React uses in-built event listener, which can access element and event details using "event" argument.

     function handleNameChange(event)
     {
         event.clientX, clientY, keyCode, charCode, which etc..
         event.target.id, name, value, src, width, height etc..
    }

 */}

 export function TwoWayBinding(){
    // Declare a state variable 'userName' with initial value 'Abhishek'
  const [userName, setUserName] = useState('Abhishek');

  function handleNameChange(e){
    setUserName(e.target.value);


  }
  return(
      <div className="container-fluid">  {/* Container for styling */}
          <h3>Two Way Binding</h3>
          <dl>
              <dt>User Name</dt>
              <dd><input type="text" onChange={handleNameChange} value={userName} /></dd> {/* Setting input value to userName from state */}
          </dl>
          <p>Hello! {userName}</p> {/* Displaying the user name */}

      </div>
  )
}