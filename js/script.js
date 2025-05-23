/* Navigation Bar Script */
$("#menu").click(function() {
    $("#navigation-bar > div").slideToggle();
    $("#menu").toggleClass("rotate");
});

/* Checking Mechanism for Problem 1 */
$("#check1").click(function() {
    $("#problem1 .emojis").css("display", "none");
    if(document.getElementById("problem1answer").value=="B" || document.getElementById("problem1answer").value=="b" || document.getElementById("problem1answer").value=="0") {
        $("#checkmark1").css("display", "inline");
    }
    else {
        $("#wrong1").css("display", "inline");
    }
});

/* Checking Mechanism for Problem 2 */
$("#check2").click(function() {
    $("#problem2 .emojis").css("display", "none");
    if(document.getElementById("problem2answer").value==55) {
        $("#checkmark2").css("display", "inline");
    }
    else {
        $("#wrong2").css("display", "inline");
    }
});

/* Checking Mechanism for Problem 3 */
$("#check3").click(function() {
    $("#problem3 .emojis").css("display", "none");
    if(document.getElementById("problem3answer").value==61) {
        $("#checkmark3").css("display", "inline");
    }
    else {
        $("#wrong3").css("display", "inline");
    }
});


// Create an animation for the winning scores //
const tds = document.getElementsByTagName("td");

for (let i = 0; i < tds.length; i++) {
    const cell = tds[i];
    const firstChar = cell.textContent.trim().charAt(0);

    if (firstChar === "W") {
        cell.style.color = "green";
        cell.classList.add("we-won");
    } else if (firstChar === "L") {
        cell.style.color = "red";
    }
}

//Button to stop the animation//
$("#stopWin").click(function () {
    //remove all instances of the animation for the class we-won//
    document.querySelectorAll(".we-won").forEach(cell => {
        cell.classList.remove("we-won");
    });
});
