import { useState } from "react";
import "./style-demo.css";

export function ClassBindings() {
    // Initializing state to manage theme and button styles
    const [theme, setTheme] = useState('bg-light text-dark');       // Default theme (light mode)
    const [btnStyle, setBtnStyle] = useState('btn btn-dark w-100'); // Default button style (dark button)


    // Function to handle theme change when the checkbox is toggled
    function ThemeChange(e) {
         // If the checkbox is checked, switch to dark theme
        if (e.target.checked) {
            setTheme('bg-dark text-white');      // Set dark background and white text
            setBtnStyle('btn btn-light w-100');  // Change button to light button style
        } else {
            // If checkbox is unchecked, switch back to light theme
            setTheme('bg-light text-dark');    // Set light background and dark text
            setBtnStyle('btn btn-dark w-100'); // Change button back to dark button style
        }
    }

    return (
         // Container that centers the form vertically and horizontally
        <div className="container-fluid d-flex justify-content-center align-items-center custom-container">

              {/* Form with dynamic theme class and inline style for width */}
            <form className={`p-4 rounded ${theme}`} style={{ width: '300px' }}>

                   {/* Toggle switch for enabling/disabling dark mode */}
                <div className="form-switch mb-3">
                    {/* Checkbox to toggle between dark and light mode */}
                    <input type="checkbox" onChange={ThemeChange} className="form-check-input" id="darkModeToggle" />
                    <label className="form-check-label" htmlFor="darkModeToggle">Dark Mode</label>
                </div>

                 {/* Heading with Bootstrap icon and text */}
                <h2 className="bi bi-person-fill text-center mb-4">User Login</h2>
                <dl>
                    <dt>User Name</dt>  {/* Username field */}
                    <dd><input type="text" className="form-control mb-3" /></dd>
                    <dt>Password</dt>    {/* Password field */}
                    <dd><input type="password" className="form-control mb-4" /></dd>
                </dl>
                 {/* Login button with dynamic style */}
                <button className={btnStyle}>Login</button>
            </form>
        </div>
    );
}
