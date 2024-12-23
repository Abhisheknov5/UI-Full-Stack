import { useState } from "react"
 import { useFormik } from "formik";
 import * as yup from "yup";

 {/*
- Formik reports errors onSubmit by default.
- If you want to report errors on various other events then you have to bind the events.

        <input type="text"  onBlur={formik.handleBlur}  onChange={formik.handleChange} />

- Formik provides a "spread operator" syntax for accessing all events and bind to specific element.

   
    <input type="text"  name="Phone"  {...formik.getFieldProps("Phone") }  />
*/}

 // Define the OnBlur component
 export function OnBlur(){

     // Initialize formik for managing form state and submission
     const formik = useFormik({

        initialValues: {
            Phone: ""
        },
        validationSchema: yup.object({

            Phone: yup.string().required("Phone number required").matches(/\+91\d{10}/,"Invalid Mobile")
        })
        
     })
 
     return(
         <div className="container-fluid">
            <div>Yup for Validation on blur</div>
             {/* Form with formik submission handling */}
             <form onSubmit={formik.handleSubmit}>
             <h2>Register User</h2>
             <dl>
                <dt>Mobile</dt>
                <dd><input type="text" {...formik.getFieldProps("Phone")} name="Phone"/></dd>
                <dd className="text-danger">{formik.errors.Phone}</dd>
             </dl>
             <button className="btn btn-primary">Register</button>
            
             </form>
         </div>
     )
 }