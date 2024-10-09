{/*
FAQ: How to disable the default events configured for elements?
Ans:  
 - HTML provides various generic elements.
 - A generic element have pre-defined functionality.
 - It is configured with default events, that fireup automatically.
 - You can prevent the default events by using the event argument method
            "e.preventDefault()"

FAQ: How to disable the default validations of HTML form?
Ans:  By using "novalidate" attribute for HTML <form> element.

    <form  novalidate>

*/}
export function EventPropagations(){

    function SubmitClicked(e){
        alert('Later we will post data to API');
        e.preventDefault();
    }

    return(
        <div className="container-fluid m-2 p-4">
            <form className="w-50" onSubmit={SubmitClicked}>
                User Name : <input type="text"  name="UserName" /> <button type="submit">Submit</button>
            </form>

        </div>
    )
}