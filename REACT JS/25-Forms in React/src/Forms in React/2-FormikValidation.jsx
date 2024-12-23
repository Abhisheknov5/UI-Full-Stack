import { useState } from "react"
 import { useFormik } from "formik";
{/*
Formik Validation :-
- Validation is the process of verifying user input.
- Validation is required to ensure that contradictory and unauthorized data is not get stored into database.
- Formik have 2 types of validation techniques

        a) Custom Validation Function
        b) Validation Schemas

Custom Validation Function
- It requires an explicit function for validation that returns errors.
- Formik can collect the errors and report them.
- Developer have to use various string, number, boolean, array and other methods to validate value explicitly.
- Validation have 2 states
        a) Form State Validation
        b) Input State Validation
 */}

 
 
 // Define the FormValidation component
 export function FormValidation(){

     // Define a custom validation function to handle validation for each field
    function ValidationUser(FormData){
           // Initialize an errors object to hold validation messages
        var errors = {UserId:'', Password:'', Age:'', Gender:'', City:''};

        // Validate UserId for required input and minimum length
        if(FormData.UserId==""){
            errors.UserId = "User Id Required";   
        } else {
            if(FormData.UserId.length<4){
                errors.UserId = "Name too Short";
            }
        }

         // Validate City selection for required choice
        if(FormData.city==="-1") {
            errors.City = "Plese Select Your City";
        }
         // Return the errors object to formik
        return errors;

    }
 
     // Initialize formik for managing form state and submission
     const formik = useFormik({
         // Define initial form values
         initialValues: {
             UserId: '',
             Password: '',
             Age: 0,
             Gender: '',
             City: ''
         },
         validate: ValidationUser,
          // Define the action on form submission
         onSubmit: (values) =>{
             alert(JSON.stringify(values));
         }
     })
 
     return(
         <div className="container-fluid">
            <div>Form Validation</div>
             {/* Form with formik submission handling */}
             <form onSubmit={formik.handleSubmit}>
             <h2>Register User</h2>
             <dl>
                   {/* User ID input */}
                 <dt>User Id</dt>
                 <dd><input type="text" onChange={formik.handleChange} name="UserId" /></dd>
                 {/* Display validation message for UserId */}
                 <dd className="text-danger"> {formik.errors.UserId} </dd>
                  {/* Password input */}
                 <dt>Password</dt>
                 <dd><input type="password" onChange={formik.handleChange} name="password"/></dd>
                 {/* Age input */}
                 <dt>Age</dt>
                 <dd><input type="number" name="Age" onChange={formik.handleChange} /></dd>
                {/* Gender radio buttons */}
                 <dt>Gender</dt>
                 <dd>
                     <input type="radio" name="Gender" onChange={formik.handleChange} value="Male" /> <label>Male</label>
                     <input type="radio" name="Gender" onChange={formik.handleChange} value="Female" /> <label>Female</label>
                 </dd>
                   {/* City dropdown selection */}
                 <dt>City</dt>
                 <dd>
                     <select onChange={formik.handleChange} name="city">
                         <option value="-1">Your City</option>
                         <option value="Delhi">Delhi</option>
                         <option value="Hyderabaad">Hyderabaad</option>
                     </select>
                 </dd>
                  {/* Display validation message for City */}
                 <dd className="text-danger">{formik.errors.City}</dd>
             </dl>
             <button className="btn btn-primary">Register</button>
             </form>
         </div>
     )
 }