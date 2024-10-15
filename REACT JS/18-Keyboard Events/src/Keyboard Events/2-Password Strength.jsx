// PasswordStrength
import { useState } from "react" // Import useState hook


export function PasswordStrength(){

    const [msg, setMsg] = useState('');    // State to store password strength message
    const [meter, setMeter] = useState(0); // State to control the meter value

    // Function to verify password strength
    function VerifyPassword(e) {
        if(e.target.value.match(/(?=.*[A-Z])\w{4,15}/)) { // Check for strong password (includes uppercase)
            setMsg('Strong Password');
            setMeter(100); // Set meter to 100 for strong
        } else{
            if(e.target.value.length<4){  // Check for poor password
                setMsg('Poor Password');
                setMeter(30);            // Set meter to 30 for poor
            } else{                      // Else, it's weak
                setMsg('Weak Password');
                setMeter(60);             // Set meter to 60 for weak
            }
        }
    }
 // JSX template for rendering the password strength meter
    return(
        <div className="container-fluid m-2 p-4">
            <h2>Password Strength</h2>
            <dl>
                <dt>Password</dt>
                 {/* Password input triggers VerifyPassword on key up */}
                <dd><input type="passworrd" onKeyUp={VerifyPassword} /></dd>
                 {/* Display password strength meter */}
                <dd><meter min="1" max="100" value={meter} style={{width:'200px'}}/></dd>
                 {/* Display password strength message */}
                <dd>{msg}</dd>
            </dl>
        </div>
    )
}