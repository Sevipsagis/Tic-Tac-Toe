var resetButton = $("#resetButton");
var thisTurn = "O";
var winner = "none"
var gameTurn = 0;
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
        if (this.innerHTML == "" && gameStatus == false) {
            $(this).addClass("hover-" + thisTurn);
        }
    });
    gameBox.on("mouseout", function () {
        $(this).removeClass("hover-" + thisTurn);
    });
    gameBox.on("click", function () {
        if (gameStatus == false && !($(this).hasClass("has-O")) && !($(this).hasClass("has-X"))) {
            $(this).append(thisTurn);
            $(this).addClass("has-" + thisTurn);
            $(this).removeClass("hover-O hover-X");
            if (gameTurn >= 4) {
                WinConditionCheck();
            }
            // changeTurn
            if (thisTurn == "O") { thisTurn = "X"; }
            else { thisTurn = "O"; }
            gameTurn++;
        }
    });

    function WinConditionCheck() {
        // Create Array
        var arr = [];
        for (let arg of gameBox) {
            // push arg into arr
            arr.push(arg.innerHTML);
        }
        // assign value in arr to variable
        var [a0, a1, a2, b0, b1, b2, c0, c1, c2] = arr;
        // check condition
        if (a0 == a1 && a1 == a2 && a0 != "" ||
            b0 == b1 && b1 == b2 && b0 != "" ||
            c0 == c1 && c1 == c2 && c0 != "" ||
            a0 == b0 && b0 == c0 && a0 != "" ||
            a1 == b1 && b1 == c1 && a1 != "" ||
            a2 == b2 && b2 == c2 && a2 != "" ||
            a0 == b1 && b1 == c2 && a0 != "" ||
            a2 == b1 && b1 == c0 && a2 != "") {
            gameStatus = true;
            winner = thisTurn;
            title.innerHTML = `Winner is ${winner}`;
            setTimeout(() => {
                alert(`The Winner is ${winner}`);
                alert("Press restart button to play again");
            }, 0);
        }
        else {
            if (gameTurn == 8) {
                title.innerHTML = `Result is draw.`;
                setTimeout(() => {
                    alert(`It's over, Result is draw.`);
                    alert("Press restart button to play again");
                }, 0);
            }
        }
    }
});