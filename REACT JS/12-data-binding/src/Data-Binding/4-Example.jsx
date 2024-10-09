// Importing React and usestate hook
import { useState } from "react"

 export function Example(){
    // Declare a state variable 'userName' with initial value 'Abhishek'
  const [userName, setUserName] = useState('Abhishek');
  const [city, setCity] = useState('-1');

  function handleNameChange(e){
    setUserName(e.target.value);
  }

  function handleCityChange(e){
    setCity(e.target.value);
  }
  return(
      <div className="container-fluid">  {/* Container for styling */}
          <h3>Example </h3>
          <dl>
              <dt>User Name</dt>
              <dd><input type="text" onChange={handleNameChange} value={userName} /></dd> {/* Setting input value to userName from state */}
              <dt>City</dt>
              <dd>
                <select onChange={handleCityChange}>
                    <option value="-1">Your City</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Hyderabaad">Hyderabaad</option>
                </select>
              </dd>
          </dl>
          <p>Hello! {userName} from {city}</p> {/* Displaying the user name */}

      </div>
  )
}