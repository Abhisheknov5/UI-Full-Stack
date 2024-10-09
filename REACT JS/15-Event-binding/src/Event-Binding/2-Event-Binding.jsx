
export function EventBindingg(){
    
      // Function that is triggered when the button is clicked
    function InsertClick(msg, id, event){
         // `document.write()` is used to display the message, id, X position, and target element's id
        document.write(msg + "<br>" + id + "<br>" + event.clientX + "<br>" + event.target.id);

    }

    return(  
        <div className="container-fluid">
            <h2>Event Binding-2</h2>
            <button id="btnInsert" onClick={(e)=>InsertClick('welcome',10, e)} className="btn btn-success mt-4">Insert</button>

        </div>
    )
}