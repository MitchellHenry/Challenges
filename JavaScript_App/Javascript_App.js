var add = document.getElementById("OurButton");
var clear = document.getElementById("OurButton2");
var New = document.getElementById("New");
var New2 = document.getElementById("New2");
var New3 = document.getElementById("New3");
var New4 = document.getElementById("New4");
var DropDownList = document.getElementById("MyList");
var TaskTime = document.getElementById("TimeForTask");
var body = document.getElementById("Main");
add.onclick = OurButtonClicked;
var counter = 0;
var counter3 = 0;
var BadSound = new Audio('Siren.mp3');
var GoodSound = new Audio('Shotgun_Blast_Awesome.mp3');
var GIF1 = new Image('Awesome.gif');
GIF1.style.width = "400px"
GIF1.style.height = "200px"
GIF1.src = "Awesome.gif"

function OurButtonClicked() {
    if (counter3 == 0) {
        if (TaskTime.value.length != 0) {
            var contentToAdd = document.createElement("p");
            contentToAdd.appendChild(document.createTextNode("| " + input.value))
            contentToAdd.style.marginBottom = "0px"
            contentToAdd.style.marginTop = "5px"
            contentToAdd.style.height = "29px"

            let myId = "Div_" + counter;
            var button = document.createElement("button")
            button.appendChild(document.createTextNode("Remove"));
            button.onclick = ClearIndividualElement;
            button.style.paddingLeft = "3px"
            button.style.paddingBottom = "0px"
            button.style.paddingTop = "0px"
            button.style.height = "20px"
            button.style.marginTop = "5px"

            var div = document.createElement("div");
            div.setAttribute("id", "Div_" + counter)
            div.style.display = "flex";
            div.style.backgroundColor = "white";

            function ClearIndividualElement() {
                document.getElementById(myId).remove();
                document.getElementById(myId).remove();
                counter3 = 0;
                time.innerHTML = -1;
                New4.innerHTML = ("");
            }

            clear.onclick = RemoveAll;

            function RemoveAll() {
                time.innerHTML = -1;
                New.innerHTML = ("<h2>Task</h2>");
                New2.innerHTML = ("<h2>Shopping</h2>")
                New3.innerHTML = ("<h2>Venue</h2>")
                New4.innerHTML = ("")
                New.innerHTML.br.remove();
                New2.innerHTML.br.remove();
                New3.innerHTML.br.remove();
                counter = 0;
                BadSound.pause();
                counter3 = 0;
            }

            var message = document.createElement('p');
            message.appendChild(document.createTextNode("Time Left:"));
            message.style.paddingRight = "2px";
            message.style.marginBottom = "5px"
            message.style.marginTop = "5px"
            message.style.fontSize = "10px";

            var time = document.createElement('p');
            time.appendChild(document.createTextNode(TaskTime.value));
            time.style.marginTop = "5px"


            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.style.marginTop = "5px";

            var br = document.createElement('br');
            br.setAttribute("id", "Div_" + counter)

            var countdown = setInterval(function () {
                if (time.innerHTML > 0) {
                    time.innerHTML--;
                }
                if (time.innerHTML == 0) {
                    if (checkbox.checked == false) {
                        BadSound.play();
                    }
                    clearInterval(countdown);
                }
            }, 1000);

            var FlashRed = setInterval(function () {
                if (time.innerHTML == 0) {
                    if (div.style.backgroundColor == "white") {
                        div.style.backgroundColor = "red"
                    }

                }
                if (checkbox.checked == true) {
                    counter3 = 1;
                    if (time.innerHTML > 0) {
                        GoodSound.play();
                    }

                    document.getElementById(myId).remove();

                    BadSound.pause();
                    clearInterval(FlashRed);
                    counter3 = 0;
                }
            }, 750);

            var FlashWhite = setInterval(function () {
                if (div.style.backgroundColor == "red") {
                    div.style.backgroundColor = "white"
                    counter3 = 0;
                }
            }, 1501);

            var GIFY = setInterval(function () {
                if (checkbox.checked == true && time.innerHTML > 0) {
                    counter3 = 0;
                    New4.appendChild(GIF1)
                }
            }, 250);

            if (DropDownList.value == 1) {
                div.appendChild(message);
                div.appendChild(time);
                div.appendChild(contentToAdd);
                div.appendChild(button);
                div.appendChild(checkbox);
                New.appendChild(div);
                New.appendChild(br);
            }
            if (DropDownList.value == 2) {
                div.appendChild(message);
                div.appendChild(time);
                div.appendChild(contentToAdd);
                div.appendChild(button);
                div.appendChild(checkbox);
                New2.appendChild(div);
                New2.appendChild(br);
            }
            if (DropDownList.value == 3) {
                div.appendChild(message);
                div.appendChild(time);
                div.appendChild(contentToAdd);
                div.appendChild(button);
                div.appendChild(checkbox);
                New3.appendChild(div);
                New3.appendChild(br);
            }
            counter++;
        }
    }
}