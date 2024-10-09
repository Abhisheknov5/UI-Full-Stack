//import { useState } from "react";
{/*
Event Binding :-

FAQ: What is Event?
Ans:
    - Event is a message sent by sender to its subscriber in order to notify change.
    - It uses delegate mechanism, which is a function pointer.
    - Event follows a software design pattern called "Observer", which is a behavioural       pattern.

    a) Sender     : Triggers the action
    b) Subscriber     : Configures the functionality when event is triggered.

FAQ: What are the events used by React?
Ans:  React uses "SyntheticEvents", which is the base for all Virtual DOM events.
     The SyntheticEvents map to Browser Events.

        Synthetic Event            Browser Event
        -----------------------------------------------------------
        onClick                    onclick
        onChange                onChange
        onBlur                    onBlur
        etc..

     "SyntheticEvent" is library for all events in React.

FAQ: What is Event Handler?
Ans:  Event handler defines the event name and the function that it maps to.

              onClick                : Event
            onClick={insertClick}    : Event Handler

      Event handler is static and resolved at compile time.

FAQ: What is Event Listener?
Ans :  Event Listener configures functionality for element dynamically.
     
Syntax:
        document.querySelector("button").addEventListener("click", ()=>{
   
            // actions on click
       
        });

FAQ: What is the mechanism used by react for events?
      a) Handler ?
      b) Listener ?
Ans:  The default react events use "Handler".
      Dynamically a handler adds listener, which maps to actual DOM events.


      User Clicks a button => Handler Synthetic Event => Listener Browser Event


FAQ: What are Event Arguments?
Ans:  Event args is the payload sent by sender to its subscriber.
     Event handler delivers the payload to subscriber.
     Payload is the data that comprises of following details:
        a) Object Details
                id, name, className, value, src, width, height etc..
        b) Event Details
                clientX, clientY, keyCode, charCode, which, shiftKey etc..
        c) Custom Details
                Primitive Type Data
                Non Primitive Type Data


FAQ: How React uses Event Args?
Ans :  React uses built-in Event Handlers for every Synthetic Event.
      These handlers configure default parameters, which you can access directly in
      function.

      function  InsertClick(e)
      {
      }

      "e" is a formal parameter that comprises object & event payload.
       [ Object & Event Details]

       e.EventDetails
       e.target.ObjectDetails

*/}

export function EventBinding(){
     // Function that is triggered when the button is clicked
    function InsertClick(e){

        // `document.write()` is used to directly write to the document
        // It displays the button's id, className, and the X position of the mouse click (relative to the viewport)
        document.write(`
            Button Id: ${e.target.id} <br>
            class Name: ${e.target.className} <br>
            X Position: ${e.clientX} <br>
            `);


    }

    return(
           // Bootstrap container for better layout and styling
        <div className="container-fluid">
            <h2>Event Binding-1</h2>

            {/* Button with an onClick event that triggers InsertClick function */}
            {/* The button has a Bootstrap class for styling (btn-success) and margin-top (mt-4) */}
            <button id="btnInsert" onClick={InsertClick} className="btn btn-success mt-4">Insert</button>

        </div>
    )
}