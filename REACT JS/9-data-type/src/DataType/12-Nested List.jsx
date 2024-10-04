export function NestedLists(){

    var topics = [
        {Title: "HTML", Description: "It is a markup language"},
        {Title: "CSS", Description: "It configures Styles"}
    ];
    return(
        <div className="container-fluid">
            <h2>Nested List</h2>
            <dl>
                {
                    topics.map(item=>
                        <>
                        <dt>{item.Title}</dt>
                        <dd>{item.Description}</dd>
                        </>
                        
                    )
                }
            </dl>

        </div>
    )
}

// op is 
// Nested List
// HTML
// CSS