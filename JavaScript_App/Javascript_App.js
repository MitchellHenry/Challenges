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
var counter2 = 0;
var counter3 = 0;
var BadSound = new Audio('Siren.mp3');
var GoodSound = new Audio('Shotgun_Blast_Awesome.mp3');
var GIF1 = new Image('Awesome.gif');
GIF1.setAttribute("id","GIF1");
GIF1.style.width = "400px";
GIF1.style.height = "200px";
GIF1.src = "Awesome.gif";

function OurButtonClicked() {
    if (New.innerHTML == ("<h2>Task</h2>") && New2.innerHTML == ("s<h2>Shopping</h2>") && New3.innerHTML == ("<h2>Venue</h2>")) {
        BadSound.pause();
        clearInterval(countdown);
        clearInterval(FlashRed);
        counter3 = 0;
    }
    clear.onclick = RemoveAll;

    function RemoveAll() {
        clearInterval(FlashRed);
        BadSound.pause();
        New.innerHTML = ("<h2>Task</h2>");
        New2.innerHTML = ("<h2>Shopping</h2>")
        New3.innerHTML = ("<h2>Venue</h2>")
        New4.innerHTML = ("")
        counter = 0;
        clearInterval(countdown);
        counter3 = 0;
    }
    if (TaskTime.value.length != 0 && counter3 == 0) {
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
            clearInterval(countdown);
            clearInterval(FlashRed);
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
            if (time.innerHTML <= 0) {
                if (checkbox.checked == false) {
                    time.innerHTML = 0;
                    if (BadSound.play() == true) {
                        BadSound.play();
                    }
                }
                clearInterval(countdown);
            }
        }, 1000);

        var FlashRed = setInterval(function () {
            if (time.innerHTML <= 0) {
                if (div.style.backgroundColor == "white") {
                    time.innerHTML = 0;
                    div.style.backgroundColor = "red"
                    counter3 = 1;
                }

            }
            if (checkbox.checked == true) {
                if (time.innerHTML > 0) {
                    GoodSound.play();
                    New4.appendChild(GIF1);
                    counter2 = 1;
                }

                document.getElementById(myId).remove();
                clearInterval(countdown);
                clearInterval(FlashRed);
                BadSound.pause();
                counter3 = 0;
            }
        }, 750);

        var FlashWhite = setInterval(function () {
            if (div.style.backgroundColor == "red") {
                div.style.backgroundColor = "white"

            }
        }, 1501);

        var RemoveGIF = setInterval(function () {
              if(counter2 == 1){
                 document.getElementById('GIF1').remove();
                 counter2 = 0;
                 clearInterval(RemoveGIF);
              }
            }, 5000)

        if (DropDownList.value == 1) {
            div.appendChild(message);
            div.appendChild(time);
            div.appendChild(contentToAdd);
            div.appendChild(button);
            div.appendChild(checkbox);
            New.appendChild(div);
        }
        if (DropDownList.value == 2) {
            div.appendChild(message);
            div.appendChild(time);
            div.appendChild(contentToAdd);
            div.appendChild(button);
            div.appendChild(checkbox);
            New2.appendChild(div);
        }
        if (DropDownList.value == 3) {
            div.appendChild(message);
            div.appendChild(time);
            div.appendChild(contentToAdd);
            div.appendChild(button);
            div.appendChild(checkbox);
            New3.appendChild(div);
        }
        counter++;
    }
}