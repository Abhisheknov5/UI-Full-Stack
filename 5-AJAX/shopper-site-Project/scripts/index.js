/*
EX: SPA Approach [Single Page Application] - JavaScript Ajax
*/
function LoadPage(page){
    var http = new XMLHttpRequest();
    http.open("get",page, true);
    http.send();
    http.onreadystatechange = function(){
        if(http.readyState==4){
            console.log(http.responseText);
            document.querySelector("section").innerHTML = http.responseText;
        }
    }
}

function bodyload(){
    LoadPage("home.html");
}