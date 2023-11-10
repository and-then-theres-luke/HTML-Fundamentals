var cookieBanner = document.querySelector(".cookie_banner");

var tempArray = [];
tempArray[0] = document.querySelector("#temp1").innerHTML;
tempArray[1] = document.querySelector("#temp2").innerHTML;
tempArray[2] = document.querySelector("#temp3").innerHTML;
tempArray[3] = document.querySelector("#temp4").innerHTML;
tempArray[4] = document.querySelector("#temp5").innerHTML;
tempArray[5] = document.querySelector("#temp6").innerHTML;
tempArray[6] = document.querySelector("#temp7").innerHTML;
tempArray[7] = document.querySelector("#temp8").innerHTML;
tempArray[8] = "celsius"

console.log(tempArray);


function noCookies(cookie) {
    cookie.remove();
};

function convert(array) {
    if (array[8] == "celsius") {
        for (let i = 0;i < 9;i++) {
            if (i < 8) {
                let newTemp = (array[i] - 32) * (5/9);
                array[i] = newTemp;
            }
            else if (i == 8) {
                array[i] = "fahrenheit";
                console.log(array[i])
            }
        }
    for (j = 0; j < 8;j++) {
        array[j] = Math.round(array[j])
    }
    document.querySelector("#temp1").innerHTML = array[0]
    document.querySelector("#temp2").innerHTML = array[1]
    document.querySelector("#temp3").innerHTML = array[2]
    document.querySelector("#temp4").innerHTML = array[3]
    document.querySelector("#temp5").innerHTML = array[4]
    document.querySelector("#temp6").innerHTML = array[5]
    document.querySelector("#temp7").innerHTML = array[6]
    document.querySelector("#temp8").innerHTML = array[7]
    }
    else if (array[8] == "fahrenheit") {
        for (let i = 0;i < 9;i++) {
            if (i < 8) {
                let newTemp = (array[i] * (9/5)) + 32;
                array[i] = newTemp;
            }
            else if (i == 8) {
                array[i] = "celsius";
                console.log(array[i])
            }
        }
    }
    for (j = 0; j < 8;j++) {
        array[j] = Math.round(array[j])
    }
    document.querySelector("#temp1").innerHTML = array[0]
    document.querySelector("#temp2").innerHTML = array[1]
    document.querySelector("#temp3").innerHTML = array[2]
    document.querySelector("#temp4").innerHTML = array[3]
    document.querySelector("#temp5").innerHTML = array[4]
    document.querySelector("#temp6").innerHTML = array[5]
    document.querySelector("#temp7").innerHTML = array[6]
    document.querySelector("#temp8").innerHTML = array[7]
}



/*


We want to create a function that will convert from F to C and vice versa
we want this function to initiate when the dropdown is selected
we need all these high and low values to push through our function

*/