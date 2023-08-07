var button= document.getElementById("butona");
var text = document.getElementById("input");
var ul = document.querySelector("ul");


// Retrieve todo list items from localStorage on page load
window.addEventListener("load", function() {
    var savedItems = localStorage.getItem("todoItems");
    if (savedItems) {
      ul.innerHTML = savedItems;
    }
  });


function addtodo(){
    if(text.value.length>0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(text.value));
        ul.appendChild(li);

        saveTodoItems(); // Save updated todo items

        text.value="";
    }
}

function addtodo2(event){
    if(text.value.length>0 && event.keyCode===13){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(text.value));
        ul.appendChild(li);

        saveTodoItems(); // Save updated todo items

        text.value="";
    }
}

function saveTodoItems() {
    // Get all the li elements inside the ul and convert them to an HTML string
    var itemsHTML = ul.innerHTML;       //  It then uses the innerHTML property to get the HTML content inside the ul element, which includes all the li elements.
    localStorage.setItem("todoItems", itemsHTML); // The localStorage.setItem() method is used to store the HTML string. It takes two arguments: the key, which is "todoItems" in this case, and the value, which is the itemsHTML string.
  }

button.addEventListener("click",addtodo);
text.addEventListener("keypress",addtodo2);

