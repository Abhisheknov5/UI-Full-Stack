// Nested  Iterators

// Define and export the NestedIterators component
export function NestedIterators(){

    // Array of categories and their associated products
    var menu = [
        {Category: "Electronics", Products: ["TV", "Mobile"]},
        {Category: "Footwear", Products: ["Boots", "Sneakers"]}
    ];

    return(
        <div className="container-fluid">    {/* Main container for the content */}
            
            <h2>Nested Iterators</h2>        {/* Heading of the section */}
            
            <ol>    {/* Ordered list to display categories */}
                {
                    // Iterate over the menu array to display each category
                    menu.map(item=>
                        <li key={item.Category}>    {/* Key ensures unique identification for each category */}
                            {item.Category}         {/* Display category name */}
                            <ul>    {/* Unordered list to display products under each category */}
                                {
                                    // Iterate over the products array to display each product
                                    item.Products.map(product=>
                                        <li key={product}>{product}</li>   
                                    )
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>
        </div>
    )
}

// op is = 
// 1 Electronics
//      TV
//      Mobile
// 2 Footwear
//      Boots
//      Sneakers
