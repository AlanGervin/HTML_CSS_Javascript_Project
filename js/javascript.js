

function modeChange() {
    let e = document.getElementById("mode");
    var text = e.options[e.selectedIndex].text;

    if (text == "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        let table = document.getElementById("table");
        table.style.borderColor = "white";
        let td = table.getElementsByTagName("td");
        for (let i = 0; i < td.length; i++) {
            td[i].style.borderColor = "white";
            td[i].style.borderWidth = "2px";
            td[i].style.borderStyle = "solid";
        }
        let th = table.getElementsByTagName("th");
        for (let i = 0; i < th.length; i++) {
            th[i].style.borderColor = "white";
            th[i].style.borderWidth = "2px";
            th[i].style.borderStyle = "solid";
        }
    }

    if (text == "light") {
        document.body.style.backgroundColor = "beige";
        document.body.style.color = "black";
        let table = document.getElementById("table");
        table.style.borderColor = "black";
        let td = table.getElementsByTagName("td");
        for (let i = 0; i < td.length; i++) {
            td[i].style.borderColor = "black";
            td[i].style.borderWidth = "2px";
            td[i].style.borderStyle = "solid";
        }
        let th = table.getElementsByTagName("th");
        for (let i = 0; i < th.length; i++) {
            th[i].style.borderColor = "black";
            th[i].style.borderWidth = "2px";
            th[i].style.borderStyle = "solid";
        }
    }
}

var id2 = document.getElementById("id");
id2.style.color = "blue";

var className = document.getElementsByClassName("classExample");
for(let i = 0; i < className.length; i++) {
    className[i].style.color = "red";
}

function displayName() {
    var name = document.getElementById("name").value;
    console.log(name);
    var display = document.getElementById("nameDisplay");
    display.innerText=name;
}

function colorPick() {
    var color = document.getElementById("color").value;
    var colorDispay = document.getElementById("colorDisplay");
    colorDispay.innerText=color;
}


var hover = document.getElementById("hover");
hover.addEventListener("mouseenter", function(event) {
    event.target.style.color = "blue";
})

const myArray = ["HTML", "CSS", "Javascript"];
var list = document.getElementById("list");
for (let i = 0; i < myArray.length; i++) {
    var p = document.createElement('p');
    p.innerText = myArray[i];
    list.appendChild(p);
}

