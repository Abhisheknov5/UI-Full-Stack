import { useState } from "react"

export function ProgressBar(){

     // State variables to store password message, progress bar class, and style
    const [msg, setMsg] = useState('');                              // Message indicating password strength
    const [progressClass, setProgressClass] = useState('');          // Class for progress bar color
    const [progressStyle, setProgressStyle] = useState({width:'0%'}) // Style to control progress bar width

    // Function to verify password strength and update progress bar dynamically
    function VerifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,15}/)){
            setMsg('Strong Password');
            setProgressClass('bg-success');
            setProgressStyle({width: '100%'});
        } else {
            if(e.target.value.length<4){
                setMsg('Poor Password');
                setProgressClass('bg-danger');
                setProgressStyle({width: '30%'});
            } else{
                setMsg('Weak Password');
                setProgressClass('bg-warning');
                setProgressStyle({width: '60%'});
            }
        }
    }

    return(
        <div className="container-fluid m-2 p-4">
            <h2>Progress Bar</h2>
            <h2>Register User</h2>
            <dl className="w-25">
                <dt>Password</dt>
                <dd><input type="password" className="form-control" onKeyUp={VerifyPassword}/></dd>
                <dd className="progress">
                <div className={`progress-bar progress-bar-striped progress-bar-animated ${progressClass}`} style={progressStyle}>
                {msg}
                    </div>
                </dd>
            </dl>
        </div>
    )
}