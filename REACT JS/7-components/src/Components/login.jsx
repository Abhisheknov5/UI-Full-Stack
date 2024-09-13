// Import the CSS file for styling
import "./login.css";

// Define a functional component named 'Login'
export  function Login(){
    return(
       <div>
        <header className="mt-3">   {/* Header section with a button to toggle the offcanvas (sidebar)*/}
            <button data-bs-target="#navbar" data-bs-toggle="offcanvas" className="btn btn-dark bi bi-justify"></button> {/* Button to open the offcanvas (sidebar) */}
            <div className="offcanvas offcanvas-start" id="navbar" tabIndex="-1"> {/* Offcanvas (sidebar) element, which contains the navigation menu*/}
                <div className="offcanvas-header">
                    <h3>Navbar</h3>
                    <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>  {/* Button to close the offcanvas */}
                </div>
                <div className="offcanvas-body"> {/* Offcanvas body where the menu items would be placed */}
                    ..your menu..
                </div>
            </div>
        </header>

        {/* Container for the login form */}
        <div className="form-container"> 
         <form className="alert alert-warning alert-dismissible">               {/* Login form with a warning alert style */}
            <h3 className="bi bi-person-fill">User Login</h3>                   {/* Form heading with an icon */}
            <button className="btn btn-close" data-bs-dismiss="alert"></button> {/* Button to close the alert */}
            <dl>                                                                 {/* Definition list to group the form fields */}
                <dt>User Id</dt>                                                 {/* User ID field */}
                <dd><input type="text" className="form-control"/></dd>
                <dt>Password</dt>                                                {/* Password field */}
                <dd><input type="password" className="form-control"/></dd>
            </dl>
            <button className="btn btn-warning w-100">Login</button>              {/* Submit button for the form */}
        </form>
       </div>
       </div>
    )
}



