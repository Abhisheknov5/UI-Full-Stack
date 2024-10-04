// Nested List

export function NestedList(){

    var menu = [,
        {Category:"Electronics", Products: ["TV","Mobile"]},
        {Category:"Footwear", Products: ["Boots","Sneake"]}
    ]

    return(
        <div className="container-fluid">
            <h2>Nested List</h2>
            <ol>
                {
                    menu.map(item=>
                        <li key = {item.Category}>
                            <ul>
                                {
                                    item.Products.map(product=><li key={product}>{product}</li>)
                                }
                            </ul>

                        </li>
                    )
                }
            </ol>
            <select>
                {
                    menu.map(item=>
                        <optgroup key={item.Category} label={item.Category}>
                            {
                                item.Products.map(product=><option key={product}>{product}</option>)
                            }
                        </optgroup>
                        )
                }
            </select>
        </div>
    )
}