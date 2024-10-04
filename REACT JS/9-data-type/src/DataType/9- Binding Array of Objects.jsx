/*
Binding Array of Objects:-

- Array can be a collection of objects.
- It can represent "JSON" type.
- "map()" is the method suitable for reading every element from Array of objects.
- A "map()" function can be used over nested iterations.

*/


export function BindingArrayObjects(){
    
    // Array of product objects
    var products = [{Name:"TV", Price:45000}, {Name:"Mobile", Price:12000}];

    return(
        <div className="container-fluid">
            <h2> Binding Array Objects</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>   {/* Table header for product name */}
                        <th>Price</th>  {/* Table header for product price */}
                    </tr>
                </thead>
                <tbody>
                    {
                        // Iterate over the products array to create table rows
                        products.map(product =>
                            <tr key={product.Name}>       {/* Unique key for each row */}
                                <td>{product.Name}</td>   {/* Display product name */}
                                <td>{product.Price}</td>  {/* Display product price */}

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
