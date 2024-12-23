import { useState } from "react"
import { useFormik } from "formik";
{/*
Forms in React :-
- Form provides an UI from where user can interact with application.
- React requires lot of explicit two way binding techniques to handle forms.
- React requires lot of explicity Javascript methods to validate the form.
- React developers prefer using various 3rd party form library to configure and maniulate form elements.
            a) Formik
            b) React Hook Form
            c) Telerik Form
            etc..

Formik for React:

1. Install formik library from project

        > npm  i formik --save

2. Formik provides various types of hooks & components to configure a form.

3. The basic "useFormik()" hook is used to configure form.

Syntax:
        const  formik = useFormik( { options } );

        options:
         {
            initialValues : { key:value }        // It refers to elements & their values.
                                       Key refers to element name.        
                                       Every form element must have a name.

            onSubmit : (values) => {         // It is function that executes on form submit
                                           It collects values from all form elements.
             }                               "values" is an object with Key/value.

            validate  : functionPointer        // It refers to a function that validates the
                                       input value. It is an explicit function that
                                       required manual validation methods.

            validationSchema: Schema    // It refers to validation service, that                                                provides pre-defined validation schemas.
        }

4. Formik provides pre-defined events to handle various SyntheticEvents
   
          onChange= {formik.handleChange}
          onSubmit = {formik.handleSubmit}
          onBlur = {formik.handleBlur}
 */}

// Define the FormDemo component
export function FormDemo(){

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
         // Define the action on form submission
        onSubmit: (values) =>{
            alert(JSON.stringify(values));
        }
    })

    return(
        <div className="container-fluid">
            {/* Form with formik submission handling */}
            <form onSubmit={formik.handleSubmit}>
            <h2>Register User</h2>
            <dl>
                  {/* User ID input */}
                <dt>User Id</dt>
                <dd><input type="text" onChange={formik.handleChange} name="UserId" /></dd>
                 {/* Password input */}
                <dt>Password</dt>
                <dd><input type="password" onChange={formik.handleChange} name="password"/></dd>
                {/* Age input */}
                <dt>Age</dt>
                <dd><input type="number" name="Age"/></dd>
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
                        <option>Your City</option>
                        <option>Delhi</option>
                        <option>Hyderabaad</option>
                    </select>
                </dd>
            </dl>
            <button className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}