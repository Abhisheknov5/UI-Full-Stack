
export function DataBinding(){
    
    var uname = "john";

    return(
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                <dd><input type="text"/></dd>
            </dl>
            <p>Hello ! {uname}</p>

        </div>
    )
}