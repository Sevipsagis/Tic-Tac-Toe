var resetButton = $("#resetButton");
var thisTurn = "O"
var Winner = "--"
var gameStatus = false;
// Restart Game Function
function reloadPage() {
    location.reload();
}
// Main
$(document).ready(function () {
    var title = gameTitle;
    var gameBox = $(".gameBox");

    gameBox.on("mouseover", function () {
        if (this.innerHTML == "") {
            $(this).addClass("hover-" + thisTurn);
        }
    });
    gameBox.on("mouseout", function () {
        $(this).removeClass("hover-" + thisTurn);
    });
    gameBox.on("click", function () {
        
    });


});