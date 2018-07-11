var resetButton = $("#resetButton");
var thisTurn = "O";
var gameTurn = 0;
var Winner = "none";
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
        if (gameStatus == false && !($(this).hasClass("has-O")) && !($(this).hasClass("has-X"))){
            $(this).append(thisTurn);
            $(this).addClass("has-" + thisTurn);
            $(this).removeClass("hover-O hover-X");
            // changeTurn
            if(thisTurn == "O"){thisTurn = "X";}
            else{thisTurn = "O";}
            gameTurn++;
            if(gameTurn >= 5){
                WinConditionCheck();
            } 
        }
    });

    function WinConditionCheck(){
        // Create Array
        var arr = [];
        for(let arg of gameBox){
            // push arg into arr
            arr.push(arg.innerHTML);
        }
        // assign value in arr to variable
        var [a0, a1, a2, b0, b1, b2, c0, c1, c2] = arr;
        // check condition
        if(a0 == a1 && a1 == a2 && a0 != "" ||
           b0 == b1 && b1 == b2 && b0 != "" ||
           c0 == c1 && c1 == c2 && c0 != "" ||
           a0 == b0 && b0 == c0 && a0 != "" ||
           a1 == b1 && b1 == c1 && a1 != "" ||
           a2 == b2 && b2 == c2 && a2 != "" ||
           a0 == b1 && b1 == c2 && a0 != "" ||
           a2 == b1 && b1 == c0 && a2 != "") {
            alert(thisTurn);

        }
    }


});