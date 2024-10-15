{/*
Keyboard Events :-
onKeyUp
onKeyDown
onKeyPress

- KeyUp & KeyDown are events to use for every character input.
- If you are verify the char code instead of character, then "KeyPress" event is good.
- Key Events have various properties

        keyCode
        charCode
        which
        shiftKey
        ctrlKey
        altKey
        etc..
                       
Ex:
public/users.json

[
    {
        "UserId": "john"
    },
    {
        "UserId":"john12"
    },
    {
        "UserId": "john_nit"
    },
    {
        "UserId": "david"
    }
]
 */}
// Importing required hooks from React
import { useEffect } from "react";
import { useState } from "react"
// Importing axios for making HTTP requests
import  axios  from "axios";

export function KeywordEvents(){

    // Initializing state variables using useState hook
    const { userId, setUserId} = useState('');           // To hold the user ID value (not used in the current code)
    const [users, setUsers] = useState([]);             // To store the list of users fetched from the JSON file
    const [userError, setUserError] = useState('');    // To store error message if user ID is taken
    const [valClass, setValClass] = useState('');      // To control the CSS class of the error message (danger or success)
    const[showWarn, setShowWarn] = useState('d-none'); // To show or hide the caps lock warning message

    // useEffect hook runs when the component is mounted
    useEffect(()=>{
        // Fetching the user data from "user.json" file
        axios.get("user.json")
        .then(response=>{
            setUsers(response.data) // Populating the users state with the data received from the server
        })

    },[])  // The empty dependency array means this will run only once when the component is first rendered


     // Function to verify if the entered user ID is already taken
    function VerifyUserId(e){
        for(var user of users)
        {
             // Looping through each user to check if the input matches any existing user ID
            if(user.UserId===e.target.value){                // Checking if user ID matches
                setUserError('User Id Taken - Try Another'); // Set error message if user ID is taken
                setValClass('text-danger');                  // Apply CSS class for error message
                break;                                      // Exit the loop if user ID is found
            } else {
                setUserError('User Id Available');          // Show success message if user ID is available
                setValClass('text-sucess');                 // Apply success CSS class
            }
        }

    }

        // Function to show a warning message if caps lock is on during password input
        function VerifyCaps(e) {
            if (e.which >= 65 && e.which <= 90) { // Checking if the key pressed is a capital letter
                setShowWarn('d-block'); // Show the warning if caps lock is on
            } else {
                setShowWarn('d-none'); // Hide the warning if caps lock is off
            }
        }

    // JSX to render the form

    return(
         
        <div className="container-fluid m-2 p-4">
            <h2>KeyWord Events</h2>
            <h2>Register User</h2>
            <dl>
                  {/* User ID input field */}
                <dt>User Id</dt>
                <dd><input type="text" onKeyUp = {VerifyUserId} /></dd>  {/* Call VerifyUserId on key up event */}
                <dd className={valClass}>{userError}</dd>                {/* Display the user error message with appropriate class */}
                
                 {/* Password input field */}
                <dt>Password</dt>
                <dd><input type="password" onKeyPress={VerifyCaps} /></dd> {/* Call VerifyCaps on key press event */}
               
                {/* Warning message for caps lock */}
                <dd className={`text-warning ${showWarn}`}>
                    <span className="bi bi-exclamation-triangle-fill text-warning"></span> Warning-Caps ON
                </dd>
            </dl>

        </div>
    )
}