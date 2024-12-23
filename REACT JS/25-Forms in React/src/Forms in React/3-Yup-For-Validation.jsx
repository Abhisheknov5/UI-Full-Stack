import { useState } from "react"
 import { useFormik } from "formik";
 import * as yup from "yup";

 {/*
Yup for Validations :-

- Yup is a schema based library for handling validations.
- It provides input & form state validation services.
- Service is a pre-defined business logic, which you can implement and customize according to your requirements.
- Yup comprises of various functions a services, which map to HTML form validations.
           
            HTML 5 Validations
            - required
            - minlength
            - pattern
            - email
            - url
            - number
            etc...

1. Install yup library

        > npm   i   yup  --save

2. Import all services from yup or any specific service from yup in a component.

        import  *  as yup from "yup";
        import  required, min, pattern from "yup";

3. Yup services are accesible by using an yup object


            yup.object({                 => building schema for validation
           
                FieldName: yup.type().validationService()
           
            })

4. Formik can apply validation schema by using  the property  "validationSchema".
    [ yup schema is applied using validation schema]

Syntax:
            useFormik({
                initialValues: {  },
                validationSchema: yup.object({field:validation})
            })

Note: Yup validation schema properties must match with initialValues of formik.

5. Formik can access and use errors in a component by using "errors" object.

            { formik.errors.fieldName }

 */}
 
 // Define the YupforValidation component
 export function YupforValidation(){

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
         validationSchema: yup.object({

            UserId: yup.string().required("User Id Required").min(4, "Name too Short").max(10, "Name too Long"),
            Age: yup.number().required("Age Required").min(15, "Min age is 15").max(30, "Max Age is 30"),
            Password: yup.string().required("Password Required").matches(/(?=.*[A-Z])\w{4,15}/,"Password 4 to 15 atleast one uppercase letter")

         }),
          // Define the action on form submission
         onSubmit: (values) =>{
             alert(JSON.stringify(values));
         }
     })
 
     return(
         <div className="container-fluid">
            <div>Yup for Validation</div>
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
                 <dd><input type="password" onChange={formik.handleChange} name="Password"/></dd>
                 <dd className="text-danger">{formik.errors.Password}</dd>
                 {/* Age input */}
                 <dt>Age</dt>
                 <dd><input type="number" name="Age" onChange={formik.handleChange}/></dd>
                 <dd className="text-danger">{formik.errors.Age}</dd>
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