export class OracleClient
{
    Insert(){
        return "Record Insereted";
    }
    Delete(){
        return "Record Deleted Successfully..";
    }
}


/*
Note: You can use module system for configuring classes and importing into other libraries. However a module system will not allow event handlers. You have to use "Event Listners".

Syntax:
     document.querySelector("button").addEventListener("click", function(){

     })

Ex:
1. Go to library folder and add  
     "OracleModule.js"

export class OracleClient
{
    Insert(){
        return "Record Inserted";
    }
    Delete(){
        return "Record Deleted Successfully..";
    }
}

2. Home.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="module">
        import { OracleClient } from "../library/OracleModule.js";

        let ora = new OracleClient();

        document.getElementById("btnInsert").addEventListener("click", function(){
            document.querySelector("p").innerHTML = ora.Insert();
        })

        document.getElementById("btnDelete").addEventListener("click", function(){
            document.querySelector("p").innerHTML = ora.Delete();
        })
       
    </script>
</head>
<body>
    <button id="btnInsert">Insert</button>
    <button id="btnDelete">Delete</button>
    <p></p>
</body>
</html>
*/
