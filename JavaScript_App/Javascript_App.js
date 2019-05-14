var add = document.getElementById("OurButton");
var clear = document.getElementById("OurButton2");
var New = document.getElementById("New");
add.onclick = OurButtonClicked;
clear.onclick = RemoveAll;
var counter = 0;
function OurButtonClicked(){
    var contentToAdd = document.createElement("span");
    contentToAdd.appendChild(document.createTextNode(input.value))

    let myId = "Button_" + counter;
    var button = document.createElement("BUTTON")
    button.appendChild(document.createTextNode("Remove"));
    button.onclick = ClearIndividualElement;
    button.setAttribute("id","Button_" + counter)
    button.style.marginLeft = "3px";
    button.style.marginTop = "3px";

    var div = document.createElement("div");
    div.setAttribute("id","Button_" + counter)

    function ClearIndividualElement(){
        document.getElementById(myId).remove();
    }
     
    var checkbox = document.createElement('input'); 
    checkbox.type = "checkbox"; 

    div.appendChild(contentToAdd);
    div.appendChild(button);
    div.appendChild(checkbox);
    New.appendChild(div);
   counter++;
}
function RemoveAll(){
    New.innerHTML = ("");
    counter = 0;
}

