var lineItem1 = document.querySelector("#lineitem1");
var lineItem2 = document.querySelector("#lineitem2");
var userName = document.querySelector("#user_name");


var connectionRequest = document.querySelector(".connection_request_number")

function requestDenied (element, connection) {
    element.remove();
    let dummy = connection.innerHTML;
    console.log(dummy);
    dummy--;
    connection.innerHTML = dummy;
}

function redefineUser (newuser) {
    newuser.innerHTML = prompt("What do you want your username to be?");
}
