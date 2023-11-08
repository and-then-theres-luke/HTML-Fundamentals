var user1 = document.querySelector("#user1");
var user2 = document.querySelector("#user2");
var user3 = document.querySelector("#user3");

var count = 0;

console.log(user1);

/* count1 will always change the html on the page */

function addLike (user) {
    count = user.innerHTML;
    count++;
    console.log("The count is " + count);
    user.innerHTML = count;
}
