function removeButton(element) {
    element.remove();
}

function addLike() {
    alert("Hello World!")
}

function logging(element) {
    if (element.innerText == "Login") {
        element.innerText="Logout";
    }
    else {
        element.innerText="Login";
    }
    return element.innerText;
}