{/*
Button Events :-
- onClick                single click    
- onDoubleClick        double click
- onContextMenu        right click

*/}
export function ButtonEvents(){

     // Function to handle double-click on the image, opens a new window with an image
    function handleDoubledCLick(){
        window.open('Amazon1.jpg','Amazon', 'width=400 height=400')
    }
     // Function to handle right-click, shows an alert and disables the right-click menu
    function handleRightClick(){
        alert('Right CLicked Diabled');
        document.oncontextmenu = function(){
            return false;  // Prevents the context menu from appearing
        }
    }

    return(
        <div onContextMenu={handleRightClick} className="container-fluid m-2 p-4">
            <h2>Button Events</h2>
              {/* Image that triggers the double-click event to open a window */}
            <img src="Amazon1.jpg"onDoubleClick={handleDoubledCLick} width="100" height="100" />
            <p>Double click to Open</p>

        </div>
    )
}