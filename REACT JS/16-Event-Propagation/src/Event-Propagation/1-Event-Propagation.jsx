{/*
FAQ: What is event Propagation?
Ans:  
 - Every event uses "Event Bubbling" mechanism.
 - It is a technique where the child event will simulate the parent if both are using same.
 - Bubbling event is technically propagation of events for DOM elements that are defined with parent & child hierarchy.
 - You can prevent propagation by using "stopPropagation()" method of event args.

Ex:
*/}

export function EventPropagation(){

    function ContainerClick(){
        alert("Container Clicked");
    }
    function ButtonClick(e){
        alert("Button Click");
        e.stopPropagation();
    }


    return(
        <div className="container-fluid m-2 p-4 bg-dark text-white" onClick={ContainerClick}>
            <h2>Event Propagation</h2>
            <button id="btnInsert" onClick={ButtonClick} className="btn btn-success mt-4">Insert</button>
        </div>
    )
}