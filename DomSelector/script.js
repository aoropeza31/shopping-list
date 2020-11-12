//the shopping list
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");


//strikethrough item but for orignal list (doesn't work for new items being added)
items.forEach(item => {
	//document.querySelector("li").classList.add("done");
	item.addEventListener("click", event => {
		item.classList.toggle("done");
		console.log("item is: " + item.innerHTML);
	})

	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("delete"));
	item.appendChild(deleteBtn);
	deleteBtn.addEventListener("click", event => {
		ul.removeChild(item);
	})
});

//the length of the user's inputted item
function inputLength() {
	return input.value.length;
}

//creates a list
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	//adding a line through new added items
	li.addEventListener("click", event => {
		li.classList.toggle("done");
		console.log("New item is: " + li.innerHTML);
	})

	//deleting new added items
	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("delete"));
	li.appendChild(deleteBtn);
	deleteBtn.addEventListener("click", event => {
		ul.removeChild(li);
	})
}

//adds a new item to the list by clicking on "Enter" button
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//adds an input with "Enter" key
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);