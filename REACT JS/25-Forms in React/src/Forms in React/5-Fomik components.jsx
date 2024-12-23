import { useState } from "react"
 import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
 import * as yup from "yup";

 {/*
- Fomik components comprises of markup, styles and logic.  You have to implement and customized according to requirements.

        <Formik> :-   It is container for handling form element
        <Form>   :-   It is a dynamic container to configure elements.
        <Field>  :-   It is for various form elements like text, password, radio,
                    checkbox, select etc.
        <ErrorMessage>  It is container that is configured with formik errors.

Syntax:
        <Formik  initialValues={}   onSubmit={}  validate={}  validationSchema={ }>
            <Form>
                <Field type="text" />
                <ErrorMessage />
            </Form>
        </Form>
*/}

 // Define the FormicComponents component
 export function FormicComponents(){
 
     return(
         <div className="container-fluid">
            <div>Formik Components</div>
            {/* Formik component to manage form state, validation, and submission */}
                <Formik 
                initialValues={{CustomerName:'', Phone:''}} // Set initial values for the form fields

                 // Define validation schema using Yup
                validationSchema = {yup.object({
                    CustomerName: yup.string().required('Name Required').min(4,'Name too Short'),
                    Phone: yup.string().required('Phone Number required').matches(/\+91\d{10}/,'Invalid Mobile')
                })}
                 // Define what happens when the form is submitted
                onSubmit={(values)=>{alert(JSON.stringify(values))}}
                >
                    {/* Formik's Form component automatically connects form submission with Formik */}
                    <Form>
                        <dl>
                            {/* Customer Name field */}
                            <dt>Customer Name</dt>
                            {/* Field component links input to Formik's form state */}
                            <dd><Field type="text" name="CustomerName"/></dd>
                            {/* ErrorMessage component displays validation error if CustomerName is invalid */}
                            <dd className="text-danger"> <ErrorMessage name="CustomerName"/> </dd>
                            {/* Phone field */} 
                            <dt>Mobile</dt>
                            <dd><Field type="text" name="Phone"/></dd>
                              {/* ErrorMessage component displays validation error if Phone is invalid */}
                            <dd className="text-danger"> <ErrorMessage name="Phone"/> </dd>
                        </dl>
                          {/* Submit button */}
                        <button className="btn btn-primary">Register</button>
                    </Form>
                </Formik>
             
         </div>
     )
 }