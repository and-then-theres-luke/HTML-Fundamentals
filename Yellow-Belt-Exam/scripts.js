var donatebutton = document.querySelector("#donate_link")
var likes1 = document.querySelector("#like_counter_1");
var likes2 = document.querySelector("#like_counter_2");
var likes3 = document.querySelector("#like_counter_3");
var count = 0;

function remove1(element) {
    element.remove();
}

function petSelector(element) {
    if (element == "any") {
        alert("You have selected any pet.");
    }
    else if (element == "cat") {
        alert("You have selected cat.")
    }
    else if (element == "dog") {
        alert("You have selected dog.")
    }
}



function addLike (likes) {
    count = likes.innerHTML;
    count++;
    console.log("The count is " + count);
    likes.innerHTML = count;
}