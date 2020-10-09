
var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");


function inputLength(){
return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    // ul.appendChild(li);
    input.value="";
}
// newly ctreated
function createDeleteButton() {
    var dltBtn = document.createElement("button");
    dltBtn.className = "delete";
    // crtSpan.appendChild(dltBtn);
}

function createSpan() {
    var crtSpan = document.createElement ("span");
    createListElement();
    crtSpan.appendChild(li);
    crtSpan.appendChild(dltBtn);
    ul.appendChild(crtSpan);
}
// end of edit

function addListAfterClick() {
    if (inputLength() > 0) {
    // createListElement();
    createSpan();
    }
}
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
    // createListElement();
    createSpan();
    }
}

button.addEventListener("click", addListAfterClick
);

input.addEventListener("keypress", addListAfterKeypress
);

var title = document.querySelector("h1");
title.className = "coolTitle";

var item = document.querySelectorAll("li");

item.forEach(function(item) {
    item.addEventListener("click", function() {
    item.classList.toggle("done")})
});

// li.forEach(function(li) {
//     li.addEventListener("click", function() {
//         li.classList.toggle("done")})
// })
var dlt = document.getElementsByClassName("delete");
function deleteItem() {
    for (var i = 0; i < dlt.length; i++) {
        this.parentNode.remove();
    }
}
for (i =0; i < dlt.length; i++) {
    dlt[i].addEventListener( "click", deleteItem)
};
// clear list edit
var clear = document.getElementById("clear");

function clearList () {
    document.getElementsByTagName("body").classList.remove("ul");
};
clear.addEventListener("click", clearList);
//  end 
