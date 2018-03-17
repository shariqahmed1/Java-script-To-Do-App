function add(){
    var val = document.getElementById("val").value;
    var list = document.getElementById("list");
    var li = document.createElement("LI");
    var btn = document.createElement("BUTTON");
    btn.className = "btn btn-outline-danger fr";
    var btnText = document.createTextNode("Delete");
    btn.appendChild(btnText);

    if(val === ""){
        alert("Enter Some Text")
    }
    else{
            
        btn.onclick = function(){
            var li = this.parentNode;
            var ul = li.parentNode;
            ul.removeChild(li);
        }

        var text = document.createTextNode(val+" ");
        li.appendChild(text);
        li.appendChild(btn);
        list.appendChild(li);
        document.getElementById("val").value = "";
    }
}

function dltAll(){
    var ul = document.getElementById("list").innerHTML = "";
}