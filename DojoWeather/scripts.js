var cookieBanner = document.querySelector(".cookie_banner");
var urature = document.querySelectorAll(".urature")
var changer = document.querySelector("#changer")
function noCookies(cookie) {
    cookie.remove();
};
function convertTo () {
    if (changer.value === "celsius") {
        for (let i = 0;i < urature.length;i++) {
            let newTemp = (urature[i].innerText - 32) * (5/9);
            newTemp = Math.round(newTemp);
            urature[i].innerText = newTemp;
        }
    }
    else{
        for (let i = 0;i < urature.length;i++) {
            let newTemp = (urature[i].innerText * (9/5)) + 32;
            newTemp = Math.round(newTemp);
            urature[i].innerText = newTemp;
        }
    }
}