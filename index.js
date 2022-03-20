
var arrow = document.querySelector(".arrow");
var answer = document.querySelector(".answer");

arrow.addEventListener('click', function() {

    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
});