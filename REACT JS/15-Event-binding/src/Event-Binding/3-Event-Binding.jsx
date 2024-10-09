
export function EventBindinggg(){

     // Function to handle the click event
    function InsertClick(...args){
        // Destructuring the arguments
       var [msg, id, event] =args;
       document.write(`${msg} <br> ${id} <br> ${event.target.id}` );

    }

    return(  
        <div className="container-fluid">
            <h2>Event Binding-3</h2>

               {/* Button that calls InsertClick on click and passes arguments */}
            <button id="btnInsert" onClick={(e)=>InsertClick('welcome',10, e)} className="btn btn-success mt-4">Insert</button>

        </div>
    )
}